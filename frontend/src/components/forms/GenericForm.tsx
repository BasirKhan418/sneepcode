import React from 'react';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from '../ui/FormInput';
import Button from '../ui/Button';
import SocialAuth from './SocialAuth';

interface FormConfig {
  title: string;
  subtitle: string;
  fields: Array<{
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    icon?: React.ReactNode;
  }>;
  submitText: string;
  onSubmit: (data: FieldValues) => Promise<void> | void;
  socialAuth?: boolean;
  links?: Array<{
    text: string;
    linkText: string;
    onClick: () => void;
  }>;
  onGoogleAuth?: () => void;
  onGithubAuth?: () => void;
}

interface GenericFormProps {
  config: FormConfig;
  schema: z.ZodType<any, any, any>;
  loading?: boolean;
  error?: string | null;
  onFormChange?: (data: FieldValues) => void;
}

// Password Toggle Component
const PasswordToggle: React.FC<{ 
  fieldName: string; 
  showPassword: boolean; 
  onToggle: () => void; 
}> = ({ showPassword, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-1 rounded-lg hover:bg-blue-50"
    >
      {showPassword ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )}
    </button>
  );
};

const GenericForm: React.FC<GenericFormProps> = ({ 
  config, 
  schema, 
  loading, 
  error,
  onFormChange 
}) => {
  const [showPasswordStates, setShowPasswordStates] = React.useState<Record<string, boolean>>({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  // Watch form changes for real-time validation
  const watchedValues = watch();
  
  React.useEffect(() => {
    if (onFormChange) {
      onFormChange(watchedValues);
    }
  }, [watchedValues, onFormChange]);

  const onSubmit = async (data: FieldValues) => {
    try {
      await config.onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const getInputType = (field: any) => {
    if (field.type === 'password') {
      return showPasswordStates[field.name] ? 'text' : 'password';
    }
    return field.type;
  };

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPasswordStates(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-white/95 backdrop-blur-lg border-2 border-red-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/25">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-red-900 mb-1">
                Error
              </h4>
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {config.fields.map((field) => {
          if (field.type === 'checkbox') {
            return (
              <label key={field.name} className="flex items-start space-x-3 cursor-pointer group p-3 rounded-xl hover:bg-blue-50/50 transition-colors duration-200">
                <input
                  type="checkbox"
                  {...register(field.name)}
                  className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 mt-0.5 transition-colors duration-200"
                />
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                  {field.label}
                </span>
                {errors[field.name] && (
                  <p className="text-sm text-red-600 font-medium">
                    {errors[field.name]?.message as string}
                  </p>
                )}
              </label>
            );
          }

          return (
            <FormInput
              key={field.name}
              {...register(field.name)}
              type={getInputType(field)}
              placeholder={field.placeholder}
              label={field.label}
              icon={field.icon}
              error={errors[field.name]?.message as string}
              rightIcon={field.type === 'password' ? (
                <PasswordToggle
                  fieldName={field.name}
                  showPassword={showPasswordStates[field.name] || false}
                  onToggle={() => togglePasswordVisibility(field.name)}
                />
              ) : undefined}
            />
          );
        })}

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full mt-8"
          loading={loading || isSubmitting}
        >
          {config.submitText}
        </Button>
      </form>

      {config.socialAuth && (
        <SocialAuth 
          onGoogleAuth={config.onGoogleAuth}
          onGithubAuth={config.onGithubAuth}
        />
      )}

      {config.links && (
        <div className="space-y-3 mt-6">
          {config.links.map((link, index) => (
            <p key={index} className="text-center text-sm text-gray-600">
              {link.text}{' '}
              <button
                type="button"
                onClick={link.onClick}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
              >
                {link.linkText}
              </button>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenericForm;