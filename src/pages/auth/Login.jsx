import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Sparkles,ArrowLeft } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-10 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-tr from-amber-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-orange-200/40 to-red-200/40 rounded-full blur-3xl animate-pulse" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200/40 relative overflow-hidden">
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-amber-400/20 to-orange-500/20 animate-pulse" />
           <Link
              to="/"
              className="absolute top-4 left-4 flex items-center gap-2 text-stone-600 hover:text-amber-700 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>

          <div className="relative p-8 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 via-orange-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Welcome Back</h2>
              <p className="text-stone-600 text-sm">
                Continue your journey with{" "}
                <span className="text-amber-700 font-semibold">Monastery360</span>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="you@example.com"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                icon={Lock}
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Remember me + forgot password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-stone-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="rounded accent-amber-600"
                  />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-amber-700 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Button */}
              <Button
                fullWidth
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-lg hover:opacity-90 transition font-semibold"
              >
                Login
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-stone-600">
              Don’t have an account?{" "}
              <Link to="/register" className="text-amber-700 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
