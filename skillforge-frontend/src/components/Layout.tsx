
import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import {
  Home,
  User,
  Brain,
  Calendar,
  FolderOpen,
  LogOut,
  Menu,
  X
} from 'lucide-react';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Categories', href: '/categories', icon: FolderOpen },
    { name: 'Skills', href: '/skills', icon: Brain },
    { name: 'Planner', href: '/planner', icon: Calendar },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-blue-50 to-indigo-50 flex relative">
      {/* Decorative background blurs for the main layout */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob pointer-events-none z-0"></div>
      <div className="fixed top-[40%] left-[-10%] w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000 pointer-events-none z-0"></div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/70 backdrop-blur-2xl shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-white/50 transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        {/* Logo Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200/30 bg-white/50 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SkillForge</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-500 hover:bg-gray-100/50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 ${isActive(item.href)
                  ? 'bg-white text-blue-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white/60 translate-x-1'
                  : 'text-gray-600 hover:bg-white/60 hover:text-gray-900 hover:shadow-sm'
                }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className={`mr-4 h-5 w-5 transition-transform duration-300 ${isActive(item.href) ? 'text-blue-600 scale-110' : 'text-gray-400 group-hover:scale-110 group-hover:text-gray-600'
                }`} />
              {item.name}
              {isActive(item.href) && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200/50">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 hover:shadow-md"
            onClick={logout}
          >
            <LogOut className="mr-4 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* Top bar with gradient */}
        <div className="h-20 bg-white/40 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border-b border-white/50 flex items-center px-6 sticky top-0 z-40 relative">
          {/* Subtle top progress bar / accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80"></div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden mr-4 hover:bg-gray-100"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {navigation.find(item => isActive(item.href))?.name || 'SkillForge'}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back! Ready to level up your skills? 🚀
            </p>
          </div>
        </div>

        {/* Page content with premium container */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
