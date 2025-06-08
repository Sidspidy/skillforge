
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  notes: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  category: Category;
}

export interface Goal {
  id: string;
  title: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  notes?: string;
  skillId: string;
  skill?: Skill;
  weekPlanId: string;
}

export interface WeekPlan {
  id: string;
  weekStart: string;
  goals: Goal[];
  reflection?: {
    summary: string;
    challenges: string;
    wins: string;
    ideas: string;
  };
}

export interface DashboardData {
  weekStart: string;
  totalGoals: number;
  completedGoals: number;
  inProgress: number;
  pending: number;
  completionRate: string;
  hasReflection: boolean;
}

export interface MomentumData {
  history: {
    week: string;
    totalGoals: number;
    completed: number;
    rate: number;
  }[];
  streak: number;
  avgCompletionRate: string;
  productivityScore: string;
}
