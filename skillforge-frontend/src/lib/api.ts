
import axios from 'axios';

const API_BASE_URL = 'https://skillforge-backend-cb4b.onrender.com/api';
// const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
};

export const dashboardAPI = {
  getOverview: () => api.get('/dashboard'),
  getMomentum: () => api.get('/dashboard/momentum'),
};

export const userAPI = {
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: { name: string }) => api.put('/user/profile', data),
};

export const categoriesAPI = {
  list: () => api.get('/categories'),
  create: (data: { name: string }) => api.post('/categories', data),
  update: (id: string, data: { name: string }) => api.put(`/categories/${id}`, data),
  delete: (id: string) => api.delete(`/categories/${id}`),
};

export const skillsAPI = {
  list: () => api.get('/skills'),
  create: (data: { name: string; level: string; notes: string; categoryId: string }) =>
    api.post('/skills', data),
  update: (id: string, data: { name: string; level: string; notes: string; categoryId: string }) =>
    api.put(`/skills/${id}`, data),
  delete: (id: string) => api.delete(`/skills/${id}`),
};

export const plannerAPI = {
  getCurrentWeek: () => api.get('/planner/current'),
  addGoal: (data: { weekPlanId: string; title: string; skillId: string }) =>
    api.post('/planner/goal', data),
  updateGoal: (id: string, data: { title: string; status: string; notes?: string; skillId: string }) =>
    api.put(`/planner/goal/${id}`, data),
  deleteGoal: (id: string) => api.delete(`/planner/goal/${id}`),
  submitReflection: (data: { weekPlanId: string; summary: string; challenges: string; wins: string; ideas: string }) =>
    api.post('/planner/reflection', data),
};

export default api;
