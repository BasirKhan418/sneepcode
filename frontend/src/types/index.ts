import React from 'react';
import type { FieldValues } from 'react-hook-form';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'user' | 'admin';
  isVerified: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
  token: string;
}

export type FormType = 'login' | 'signup' | 'forgot' | 'reset';

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'password' | 'checkbox';
  placeholder?: string;
  label?: string;
  icon?: React.ReactNode;
  validation?: any;
  required?: boolean;
}

export interface FormLink {
  text: string;
  linkText: string;
  onClick: () => void;
}

export interface FormConfig {
  title: string;
  subtitle: string;
  fields: FormField[];
  submitText: string;
  onSubmit: (data: FieldValues) => Promise<void>;
  socialAuth?: boolean;
  links?: FormLink[];
}