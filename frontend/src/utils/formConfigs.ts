import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import type { FormConfig } from '../types';

const createIcon = (IconComponent: React.ComponentType<any>, props = { className: "w-5 h-5" }) => {
  return React.createElement(IconComponent, props);
};

export const getLoginConfig = (
  onSubmit: (data: any) => Promise<void>,
  onNavigateSignup: () => void,
  onNavigateForgot: () => void
): FormConfig => ({
  title: 'Welcome Back',
  subtitle: 'Sign in to your SneepCode account',
  fields: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      icon: createIcon(Mail),
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      icon: createIcon(Lock),
      required: true,
    },
    {
      name: 'rememberMe',
      type: 'checkbox',
      label: 'Remember me',
    },
  ],
  submitText: 'Sign In',
  onSubmit,
  socialAuth: true,
  links: [
    {
      text: "Don't have an account?",
      linkText: 'Sign up',
      onClick: onNavigateSignup,
    },
    {
      text: 'Forgot your password?',
      linkText: 'Reset it here',
      onClick: onNavigateForgot,
    },
  ],
});

export const getSignupConfig = (
  onSubmit: (data: any) => Promise<void>,
  onNavigateLogin: () => void
): FormConfig => ({
  title: 'Create Account',
  subtitle: 'Join SneepCode and start coding',
  fields: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: 'First name',
      icon: createIcon(User),
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: 'Last name',
      icon: createIcon(User),
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      icon: createIcon(Mail),
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Create password',
      icon: createIcon(Lock),
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      icon: createIcon(Lock),
      required: true,
    },
    {
      name: 'acceptTerms',
      type: 'checkbox',
      label: 'I agree to the Terms of Service and Privacy Policy',
    },
  ],
  submitText: 'Create Account',
  onSubmit,
  socialAuth: true,
  links: [
    {
      text: 'Already have an account?',
      linkText: 'Sign in',
      onClick: onNavigateLogin,
    },
  ],
});

export const getForgotPasswordConfig = (
  onSubmit: (data: any) => Promise<void>,
  onNavigateLogin: () => void
): FormConfig => ({
  title: 'Forgot Password?',
  subtitle: 'Enter your email and we\'ll send you a reset link',
  fields: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email address',
      icon: createIcon(Mail),
      required: true,
    },
  ],
  submitText: 'Send Reset Link',
  onSubmit,
  socialAuth: false,
  links: [
    {
      text: 'Remember your password?',
      linkText: 'Back to Sign In',
      onClick: onNavigateLogin,
    },
  ],
});

export const getResetPasswordConfig = (
  onSubmit: (data: any) => Promise<void>
): FormConfig => ({
  title: 'Reset Password',
  subtitle: 'Enter your new password below',
  fields: [
    {
      name: 'password',
      type: 'password',
      placeholder: 'New password',
      icon: createIcon(Lock),
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm new password',
      icon: createIcon(Lock),
      required: true,
    },
  ],
  submitText: 'Update Password',
  onSubmit,
  socialAuth: false,
});