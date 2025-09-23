import React, { useState } from "react";
import { User, Mail, Lock, Shield, MapPin, Globe, BookOpen, Users, Building, Search, Eye, EyeOff, Mountain, Home } from "lucide-react";

const Input = ({ label, type, placeholder, icon: Icon, required, value, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-stone-800 font-serif tracking-wide">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600/60 group-focus-within:text-amber-700 transition-colors duration-200" />
        )}
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`w-full border-2 border-stone-200 rounded-xl px-4 py-3.5 text-sm bg-white/80 backdrop-blur-sm text-stone-800 placeholder-stone-400 focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md hover:border-stone-300 ${
            Icon ? 'pl-12' : ''
          } ${isPassword ? 'pr-12' : ''}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 hover:text-amber-700 transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

const Button = ({ children, variant = 'primary', fullWidth, className, disabled, ...props }) => {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-sm tracking-wide";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 via-orange-600 to-red-700 hover:from-amber-600 hover:via-orange-700 hover:to-red-800 text-white shadow-lg hover:shadow-2xl",
    secondary: "bg-white/90 backdrop-blur-sm border-2 border-stone-200 text-stone-700 hover:border-amber-300 hover:bg-amber-50/50 hover:text-stone-800 shadow-md hover:shadow-lg"
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const UserTypeCard = ({ type, icon: Icon, title, description, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
      isSelected
        ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg'
        : 'border-stone-200 bg-white/70 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-md'
    }`}
  >
    <div className="flex items-start space-x-3">
      <div className={`p-2 rounded-lg ${
        isSelected 
          ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md' 
          : 'bg-stone-100 text-amber-600'
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className={`font-serif font-semibold text-sm ${
          isSelected ? 'text-stone-900' : 'text-stone-800'
        }`}>
          {title}
        </h4>
        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
    {isSelected && (
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
    )}
  </div>
);

const AuthPages = () => {
  const [currentPage, setCurrentPage] = useState('register');
  const [userType, setUserType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    nationality: '',
    travelPurpose: '',
    experience: '',
    languages: '',
    monasteryName: '',
    yearsOfService: '',
    institution: '',
    researchField: '',
    adminCode: ''
  });

  const userTypes = {
    tourist: {
      icon: Globe,
      title: "Tourist",
      description: "Explore sacred monasteries and immerse in spiritual heritage"
    },
    guide: {
      icon: MapPin,
      title: "Local Guide",
      description: "Share knowledge and lead meaningful cultural journeys"
    },
    monk: {
      icon: Users,
      title: "Monastery Monk",
      description: "Connect with fellow practitioners and monastic communities"
    },
    researcher: {
      icon: BookOpen,
      title: "Researcher",
      description: "Access resources for academic and spiritual study"
    },
    admin: {
      icon: Shield,
      title: "Administrator",
      description: "Manage platform content and monastery information"
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderExtraFields = () => {
    if (!userType) return null;

    const fieldConfigs = {
      tourist: [
        { key: 'nationality', label: 'Nationality', placeholder: 'e.g., Indian, American, British', icon: Globe },
        { key: 'travelPurpose', label: 'Travel Purpose', placeholder: 'Pilgrimage, Cultural Study, Photography, Tourism', icon: MapPin }
      ],
      guide: [
        { key: 'experience', label: 'Experience (Years)', type: 'number', placeholder: 'Years of guiding experience', icon: User },
        { key: 'languages', label: 'Languages Known', placeholder: 'English, Hindi, Tibetan, Sanskrit, Nepali', icon: Globe }
      ],
      monk: [
        { key: 'monasteryName', label: 'Monastery Name', placeholder: 'Enter your monastery name', icon: Building },
        { key: 'yearsOfService', label: 'Years of Service', type: 'number', placeholder: 'Years in monastic life', icon: Users }
      ],
      researcher: [
        { key: 'institution', label: 'Institution / Organization', placeholder: 'University or Research Center', icon: Building },
        { key: 'researchField', label: 'Research Field', placeholder: 'Buddhist Studies, History, Architecture, Anthropology', icon: Search }
      ],
      admin: [
        { key: 'adminCode', label: 'Admin Code', type: 'password', placeholder: 'Enter your authorization code', icon: Shield }
      ]
    };

    const fields = fieldConfigs[userType] || [];

    return (
      <div className="space-y-4 animate-slideIn">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 text-stone-500 font-medium tracking-wider uppercase">
              Additional Information
            </span>
          </div>
        </div>
        {fields.map(({ key, label, type = 'text', placeholder, icon }) => (
          <Input
            key={key}
            label={label}
            type={type}
            placeholder={placeholder}
            icon={icon}
            required
            value={formData[key]}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        ))}
      </div>
    );
  };

  const RegistrationPage = () => (
    <div className="w-full max-w-lg bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 relative overflow-hidden">
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-2xl" />
      
      <div className="relative p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Mountain className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 tracking-wide mb-2">
              Join Monastery360
            </h1>
            <p className="text-stone-600 text-sm leading-relaxed">
              Connect with sacred spaces, spiritual wisdom, and cultural heritage
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          
          {/* User Type Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-stone-800 font-serif tracking-wide">
              Choose Your Path <span className="text-red-600">*</span>
            </label>
            <div className="grid gap-3">
              {Object.entries(userTypes).map(([type, config]) => (
                <UserTypeCard
                  key={type}
                  type={type}
                  icon={config.icon}
                  title={config.title}
                  description={config.description}
                  isSelected={userType === type}
                  onClick={() => setUserType(type)}
                />
              ))}
            </div>
          </div>

          {/* Dynamic Fields */}
          {renderExtraFields()}

          {/* Common Fields */}
          <div className="space-y-5">
            <Input 
              label="Full Name" 
              type="text" 
              placeholder="Enter your full name" 
              icon={User}
              required 
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="your@email.com" 
              icon={Mail}
              required 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Create a secure password" 
              icon={Lock}
              required 
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
            <Input 
              label="Confirm Password" 
              type="password" 
              placeholder="Confirm your password" 
              icon={Lock}
              required 
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-amber-50/80 to-orange-50/80 rounded-xl border border-amber-200/50">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-stone-300 rounded"
            />
            <div className="text-sm text-stone-700 leading-relaxed">
              I agree to the{" "}
              <button className="text-amber-700 font-semibold hover:text-amber-800 hover:underline transition-colors">
                Terms & Conditions
              </button>{" "}
              and respect the sacred nature of monastery spaces and cultural heritage.
            </div>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating Your Account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-stone-200/50">
          <p className="text-sm text-stone-600">
            Already part of our community?{" "}
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-amber-700 font-semibold hover:text-amber-800 transition-colors hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 relative overflow-hidden">
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-2xl" />
      
      <div className="relative p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Home className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900 tracking-wide mb-2">
              Welcome Back
            </h1>
            <p className="text-stone-600 text-sm leading-relaxed">
              Continue your spiritual journey with Monastery360
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          
          {/* Login Fields */}
          <div className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="your@email.com" 
              icon={Mail}
              required 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Enter your password" 
              icon={Lock}
              required 
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button className="text-sm text-amber-700 hover:text-amber-800 font-semibold hover:underline transition-colors">
              Forgot your password?
            </button>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Signing you in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-stone-200/50">
          <p className="text-sm text-stone-600">
            New to Monastery360?{" "}
            <button 
              onClick={() => setCurrentPage('register')}
              className="text-amber-700 font-semibold hover:text-amber-800 transition-colors hover:underline"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-8 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Texture Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Page Toggle for Demo */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-stone-200/50">
          <button
            onClick={() => setCurrentPage('register')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              currentPage === 'register'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'text-stone-700 hover:bg-amber-50'
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setCurrentPage('login')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              currentPage === 'login'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md'
                : 'text-stone-700 hover:bg-amber-50'
            }`}
          >
            Login
          </button>
        </div>
      </div>

      {/* Render Current Page */}
      <div className="relative z-10">
        {currentPage === 'register' ? <RegistrationPage /> : <LoginPage />}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthPages;