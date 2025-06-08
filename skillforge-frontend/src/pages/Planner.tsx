
import { useState, useEffect } from 'react';
import { plannerAPI, skillsAPI } from '@/lib/api';
import { WeekPlan, Goal, Skill } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Calendar, Target, CheckCircle, Clock, XCircle, FileText } from 'lucide-react';

const GOAL_STATUS = [
  { value: 'PENDING', label: 'Pending', icon: Clock, color: 'bg-yellow-100 text-yellow-800' },
  { value: 'IN_PROGRESS', label: 'In Progress', icon: Target, color: 'bg-blue-100 text-blue-800' },
  { value: 'COMPLETED', label: 'Completed', icon: CheckCircle, color: 'bg-green-100 text-green-800' },
  { value: 'CANCELLED', label: 'Cancelled', icon: XCircle, color: 'bg-red-100 text-red-800' },
];

export default function Planner() {
  const [weekPlan, setWeekPlan] = useState<WeekPlan | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [goalDialogOpen, setGoalDialogOpen] = useState(false);
  const [reflectionDialogOpen, setReflectionDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [goalFormData, setGoalFormData] = useState({
    title: '',
    status: 'PENDING',
    notes: '',
    skillId: '',
  });
  const [reflectionData, setReflectionData] = useState({
    summary: '',
    challenges: '',
    wins: '',
    ideas: '',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [planRes, skillsRes] = await Promise.all([
        plannerAPI.getCurrentWeek(),
        skillsAPI.list()
      ]);
      setWeekPlan(planRes.data.data || planRes.data);
      setSkills(skillsRes.data.data);
      
      if (planRes.data.data?.reflection || planRes.data.reflection) {
        const reflection = planRes.data.data?.reflection || planRes.data.reflection;
        setReflectionData({
          summary: reflection.summary || '',
          challenges: reflection.challenges || '',
          wins: reflection.wins || '',
          ideas: reflection.ideas || '',
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load planner data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!goalFormData.title || !goalFormData.skillId) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      if (editingGoal) {
        await plannerAPI.updateGoal(editingGoal.id, goalFormData);
        toast({
          title: "Goal Updated",
          description: "Goal has been successfully updated.",
        });
      } else {
        await plannerAPI.addGoal({
          weekPlanId: weekPlan!.id,
          title: goalFormData.title,
          skillId: goalFormData.skillId,
        });
        toast({
          title: "Goal Created",
          description: "New goal has been successfully created.",
        });
      }
      
      await fetchData();
      handleCloseGoalDialog();
    } catch (error: any) {
      toast({
        title: editingGoal ? "Update Failed" : "Creation Failed",
        description: error.response?.data?.message || "An error occurred.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteGoal = async (id: string) => {
    if (!confirm('Are you sure you want to delete this goal?')) return;

    try {
      await plannerAPI.deleteGoal(id);
      toast({
        title: "Goal Deleted",
        description: "Goal has been successfully deleted.",
      });
      await fetchData();
    } catch (error: any) {
      toast({
        title: "Delete Failed",
        description: error.response?.data?.message || "Failed to delete goal.",
        variant: "destructive",
      });
    }
  };

  const handleReflectionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSaving(true);
    try {
      await plannerAPI.submitReflection({
        weekPlanId: weekPlan!.id,
        ...reflectionData,
      });
      toast({
        title: "Reflection Submitted",
        description: "Your weekly reflection has been saved.",
      });
      await fetchData();
      setReflectionDialogOpen(false);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.response?.data?.message || "Failed to save reflection.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleCloseGoalDialog = () => {
    setGoalDialogOpen(false);
    setEditingGoal(null);
    setGoalFormData({ title: '', status: 'PENDING', notes: '', skillId: '' });
  };

  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal);
    setGoalFormData({
      title: goal.title,
      status: goal.status,
      notes: goal.notes || '',
      skillId: goal.skillId,
    });
    setGoalDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = GOAL_STATUS.find(s => s.value === status);
    if (!statusConfig) return <Badge variant="secondary">{status}</Badge>;
    
    const Icon = statusConfig.icon;
    return (
      <Badge className={statusConfig.color}>
        <Icon className="h-3 w-3 mr-1" />
        {statusConfig.label}
      </Badge>
    );
  };

  const formatWeekRange = (weekStart: string) => {
    const start = new Date(weekStart);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weekly Planner</h1>
          {weekPlan && (
            <p className="text-gray-600 mt-2">
              {formatWeekRange(weekPlan.weekStart)}
            </p>
          )}
        </div>
        
        <div className="flex gap-3">
          <Dialog open={reflectionDialogOpen} onOpenChange={setReflectionDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Weekly Reflection
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Weekly Reflection</DialogTitle>
                <DialogDescription>
                  Reflect on your week's progress and plan for improvement.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleReflectionSubmit}>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      value={reflectionData.summary}
                      onChange={(e) => setReflectionData(prev => ({ ...prev, summary: e.target.value }))}
                      placeholder="How did this week go overall?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenges">Challenges</Label>
                    <Textarea
                      id="challenges"
                      value={reflectionData.challenges}
                      onChange={(e) => setReflectionData(prev => ({ ...prev, challenges: e.target.value }))}
                      placeholder="What challenges did you face?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wins">Wins</Label>
                    <Textarea
                      id="wins"
                      value={reflectionData.wins}
                      onChange={(e) => setReflectionData(prev => ({ ...prev, wins: e.target.value }))}
                      placeholder="What were your biggest wins?"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ideas">Ideas for Next Week</Label>
                    <Textarea
                      id="ideas"
                      value={reflectionData.ideas}
                      onChange={(e) => setReflectionData(prev => ({ ...prev, ideas: e.target.value }))}
                      placeholder="What will you focus on next week?"
                      rows={3}
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setReflectionDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={saving}>
                    {saving ? 'Saving...' : 'Save Reflection'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={goalDialogOpen} onOpenChange={setGoalDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Goal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingGoal ? 'Edit Goal' : 'Add New Goal'}
                </DialogTitle>
                <DialogDescription>
                  {editingGoal 
                    ? 'Update your goal information.' 
                    : 'Set a new goal for this week.'
                  }
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleGoalSubmit}>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Goal Title</Label>
                    <Input
                      id="title"
                      value={goalFormData.title}
                      onChange={(e) => setGoalFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="What do you want to achieve?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skill">Related Skill</Label>
                    <Select 
                      value={goalFormData.skillId} 
                      onValueChange={(value) => setGoalFormData(prev => ({ ...prev, skillId: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a skill" />
                      </SelectTrigger>
                      <SelectContent>
                        {skills.map((skill) => (
                          <SelectItem key={skill.id} value={skill.id}>
                            {skill.name} ({skill.category.name})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {editingGoal && (
                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select 
                        value={goalFormData.status} 
                        onValueChange={(value) => setGoalFormData(prev => ({ ...prev, status: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {GOAL_STATUS.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={goalFormData.notes}
                      onChange={(e) => setGoalFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Add any additional notes"
                      rows={3}
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={handleCloseGoalDialog}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={saving}>
                    {saving ? 'Saving...' : editingGoal ? 'Update' : 'Create'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {weekPlan && (
        <div className="space-y-6">
          {/* Week Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Week Overview
              </CardTitle>
              <CardDescription>
                {formatWeekRange(weekPlan.weekStart)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{weekPlan.goals.length}</div>
                  <div className="text-sm text-blue-700">Total Goals</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {weekPlan.goals.filter(g => g.status === 'COMPLETED').length}
                  </div>
                  <div className="text-sm text-green-700">Completed</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">
                    {weekPlan.goals.filter(g => g.status === 'IN_PROGRESS').length}
                  </div>
                  <div className="text-sm text-yellow-700">In Progress</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600">
                    {weekPlan.goals.filter(g => g.status === 'PENDING').length}
                  </div>
                  <div className="text-sm text-gray-700">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Goals */}
          {weekPlan.goals.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Goals Set</h3>
                <p className="text-gray-600 mb-4">
                  Start planning your week by setting some goals.
                </p>
                <Button onClick={() => setGoalDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Goal
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weekPlan.goals.map((goal) => (
                <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <span className="truncate">{goal.title}</span>
                      </div>
                      {getStatusBadge(goal.status)}
                    </CardTitle>
                    {goal.skill && (
                      <CardDescription>
                        Related to: {goal.skill.name}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {goal.notes && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {goal.notes}
                      </p>
                    )}
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditGoal(goal)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
