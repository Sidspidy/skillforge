
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Header */}
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-white/60 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-600 mt-3 text-lg font-medium">Track your skill development progress and weekly momentum</p>
          </div>
          <div className="text-6xl md:text-7xl filter drop-shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-12 cursor-default">🎯</div>
        </div>
      </div>

      {/* Weekly Overview Cards */}
      {overview && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_32px_rgba(59,130,246,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Current Week</CardTitle>
              <div className="p-2 bg-blue-50 rounded-lg"><Calendar className="h-5 w-5 text-blue-600" /></div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{formatWeekRange(overview.weekStart)}</div>
              <div className="flex items-center space-x-2 bg-gray-50/50 p-2 rounded-lg inline-flex">
                {overview.hasReflection ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm text-emerald-700 font-medium">Reflection submitted</span>
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-amber-700 font-medium">Reflection pending</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_32px_rgba(99,102,241,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Goals</CardTitle>
              <div className="p-2 bg-indigo-50 rounded-lg"><Target className="h-5 w-5 text-indigo-600" /></div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{overview.totalGoals}</div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs bg-emerald-100/80 text-emerald-800 border-emerald-200 hover:bg-emerald-200 transition-colors">
                  ✅ {overview.completedGoals} completed
                </Badge>
                <Badge variant="outline" className="text-xs bg-blue-100/80 text-blue-800 border-blue-200 hover:bg-blue-200 transition-colors">
                  🕐 {overview.inProgress} in progress
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_32px_rgba(16,185,129,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Completion Rate</CardTitle>
              <div className="p-2 bg-emerald-50 rounded-lg"><TrendingUp className="h-5 w-5 text-emerald-600" /></div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">{overview.completionRate}</div>
              <p className="text-sm font-medium text-gray-500">This week's progress</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_32px_rgba(249,115,22,0.08)] transition-all duration-300 ease-out hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Pending Goals</CardTitle>
              <div className="p-2 bg-orange-50 rounded-lg"><AlertCircle className="h-5 w-5 text-orange-600" /></div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">{overview.pending}</div>
              <p className="text-sm font-medium text-gray-500">Goals to start</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Productivity Momentum */}
      {momentum && (
        <Card className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden">
          <CardHeader className="border-b border-gray-100/50 bg-white/40 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900 tracking-tight">
                  <div className="p-2.5 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-lg shadow-purple-500/20">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  Productivity Momentum
                </CardTitle>
                <CardDescription className="text-base mt-2 font-medium text-gray-500">
                  Track your completion history and productivity trends
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all duration-300 shadow-sm"
                onClick={() => setChartType(chartType === 'line' ? 'bar' : 'line')}
              >
                Switch to {chartType === 'line' ? 'Bar' : 'Line'} Chart
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur border border-blue-100/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-blue-600 mb-2 drop-shadow-sm">{momentum.streak} 🔥</div>
                <div className="text-sm text-blue-800 font-semibold uppercase tracking-wider">Week Streak</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur border border-emerald-100/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-emerald-600 mb-2 drop-shadow-sm">{momentum.avgCompletionRate}% 📈</div>
                <div className="text-sm text-emerald-800 font-semibold uppercase tracking-wider">Avg. Completion</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50/80 to-fuchsia-50/80 backdrop-blur border border-purple-100/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-purple-600 mb-2 drop-shadow-sm">{momentum.productivityScore}<span className="text-2xl text-purple-400">/10</span> ⭐</div>
                <div className="text-sm text-purple-800 font-semibold uppercase tracking-wider">Productivity Score</div>
              </div>
            </div>

            <div className="h-80 p-6 bg-white rounded-2xl border border-gray-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'line' ? (
                  <LineChart data={momentum.history} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis 
                      dataKey="week" 
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      stroke="#94a3b8"
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#94a3b8" 
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      labelFormatter={(value) => `Week of ${new Date(value).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}`}
                      formatter={(value: any, name: string) => [
                        <span className="font-semibold text-gray-900">{name === 'rate' ? `${value}%` : value}</span>,
                        <span className="text-gray-500">{name === 'rate' ? 'Completion Rate' : name === 'completed' ? 'Completed' : 'Total Goals'}</span>
                      ]}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                        padding: '12px 16px',
                      }}
                      cursor={{ stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '5 5' }}
                    />
                    <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={4} dot={{ fill: '#white', stroke: '#3b82f6', strokeWidth: 3, r: 5 }} activeDot={{ r: 8, strokeWidth: 0, fill: '#3b82f6' }} />
                    <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={4} dot={{ fill: '#white', stroke: '#10b981', strokeWidth: 3, r: 5 }} activeDot={{ r: 8, strokeWidth: 0, fill: '#10b981' }} />
                  </LineChart>
                ) : (
                  <BarChart data={momentum.history} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis 
                      dataKey="week" 
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      stroke="#94a3b8"
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#94a3b8"
                      tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      labelFormatter={(value) => `Week of ${new Date(value).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}`}
                      formatter={(value: any, name: string) => [
                        <span className="font-semibold text-gray-900">{name === 'rate' ? `${value}%` : value}</span>,
                        <span className="text-gray-500">{name === 'rate' ? 'Completion Rate' : name === 'completed' ? 'Completed' : 'Total Goals'}</span>
                      ]}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                        padding: '12px 16px',
                      }}
                      cursor={{ fill: '#f8fafc' }}
                    />
                    <Bar dataKey="totalGoals" fill="#93c5fd" radius={[6, 6, 0, 0]} maxBarSize={50} />
                    <Bar dataKey="completed" fill="#34d399" radius={[6, 6, 0, 0]} maxBarSize={50} />
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
