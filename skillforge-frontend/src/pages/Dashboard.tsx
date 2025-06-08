
import { useState, useEffect } from 'react';
import { dashboardAPI } from '@/lib/api';
import { DashboardData, MomentumData } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Calendar, Target, TrendingUp, Award, BarChart3, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function Dashboard() {
  const [overview, setOverview] = useState<DashboardData | null>(null);
  const [momentum, setMomentum] = useState<MomentumData | null>(null);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [overviewRes, momentumRes] = await Promise.all([
        dashboardAPI.getOverview(),
        dashboardAPI.getMomentum()
      ]);
      
      setOverview(overviewRes.data.data);
      setMomentum(momentumRes.data.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Track your skill development progress and weekly momentum</p>
          </div>
          <div className="text-6xl">🎯</div>
        </div>
      </div>

      {/* Weekly Overview Cards */}
      {overview && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Current Week</CardTitle>
              <Calendar className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-gray-900 mb-2">{formatWeekRange(overview.weekStart)}</div>
              <div className="flex items-center space-x-2">
                {overview.hasReflection ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">Reflection submitted</span>
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600 font-medium">Reflection pending</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Goals</CardTitle>
              <Target className="h-5 w-5 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-3">{overview.totalGoals}</div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                  ✅ {overview.completedGoals} completed
                </Badge>
                <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                  🕐 {overview.inProgress} in progress
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completion Rate</CardTitle>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{overview.completionRate}</div>
              <p className="text-sm text-gray-600">This week's progress</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Goals</CardTitle>
              <AlertCircle className="h-5 w-5 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{overview.pending}</div>
              <p className="text-sm text-gray-600">Goals to start</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Productivity Momentum */}
      {momentum && (
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-200/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BarChart3 className="h-6 w-6 text-purple-500" />
                  Productivity Momentum
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Track your completion history and productivity trends
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-gray-50 transition-colors"
                onClick={() => setChartType(chartType === 'line' ? 'bar' : 'line')}
              >
                Switch to {chartType === 'line' ? 'Bar' : 'Line'} Chart
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{momentum.streak} 🔥</div>
                <div className="text-sm text-blue-700 font-medium">Week Streak</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">{momentum.avgCompletionRate}% 📈</div>
                <div className="text-sm text-green-700 font-medium">Avg. Completion</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">{momentum.productivityScore}/10 ⭐</div>
                <div className="text-sm text-purple-700 font-medium">Productivity Score</div>
              </div>
            </div>

            <div className="h-80 p-4 bg-gray-50 rounded-xl">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'line' ? (
                  <LineChart data={momentum.history}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="week" 
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      stroke="#64748b"
                    />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      labelFormatter={(value) => `Week of ${new Date(value).toLocaleDateString()}`}
                      formatter={(value, name) => [
                        name === 'rate' ? `${value}%` : value,
                        name === 'rate' ? 'Completion Rate' : name === 'completed' ? 'Completed' : 'Total Goals'
                      ]}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                    <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
                  </LineChart>
                ) : (
                  <BarChart data={momentum.history}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="week" 
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      stroke="#64748b"
                    />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      labelFormatter={(value) => `Week of ${new Date(value).toLocaleDateString()}`}
                      formatter={(value, name) => [
                        name === 'rate' ? `${value}%` : value,
                        name === 'rate' ? 'Completion Rate' : name === 'completed' ? 'Completed' : 'Total Goals'
                      ]}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="totalGoals" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
