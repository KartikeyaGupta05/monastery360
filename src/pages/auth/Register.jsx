import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Globe,
  BookOpen,
  Users,
  Building,
  Mountain,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const Register = () => {
  const [userType, setUserType] = useState("");

  const renderExtraFields = () => {
    switch (userType) {
      case "tourist":
        return (
          <>
            <Input label="Nationality" placeholder="e.g., Indian, American" icon={Globe} required />
            <Input label="Travel Purpose" placeholder="e.g., Pilgrimage, Research" icon={BookOpen} required />
          </>
        );
      case "guide":
        return (
          <>
            <Input label="Experience (years)" type="number" placeholder="e.g., 5" icon={Users} required />
            <Input label="Languages Known" placeholder="e.g., English, Hindi, Tibetan" icon={Globe} required />
          </>
        );
      case "monk":
        return (
          <>
            <Input label="Monastery Name" placeholder="Enter your monastery" icon={Mountain} required />
            <Input label="Years of Service" type="number" placeholder="e.g., 10" icon={BookOpen} required />
          </>
        );
      case "researcher":
        return (
          <>
            <Input label="Institution / Organization" placeholder="e.g., Delhi University" icon={Building} required />
            <Input label="Research Field" placeholder="e.g., Buddhist Studies" icon={BookOpen} required />
          </>
        );
      case "admin":
        return <Input label="Admin Code" type="password" placeholder="Enter admin code" icon={Lock} required />;
      default:
        return null;
    }
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

          <div className="relative p-8 space-y-8">
            {/* Header */}
             <Link
              to="/"
              className="absolute top-4 left-4 flex items-center gap-2 text-stone-600 hover:text-amber-700 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 via-orange-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Create Your Account</h2>
              <p className="text-stone-600 text-sm">
                Begin your journey with{" "}
                <span className="text-amber-700 font-semibold">Monastery360</span>
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  User Type
                </label>
                <select
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="">Select user type</option>
                  <option value="tourist">Tourist</option>
                  <option value="guide">Guide</option>
                  <option value="monk">Monastery Monk</option>
                  <option value="researcher">Researcher</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Conditional fields */}
              <AnimatePresence>
                {userType && (
                  <motion.div
                    key={userType}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {renderExtraFields()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Common fields */}
              <Input label="Full Name" type="text" placeholder="John Doe" icon={User} required />
              <Input label="Email" type="email" placeholder="you@example.com" icon={Mail} required />
              <Input label="Password" type="password" placeholder="••••••••" icon={Lock} required />

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm text-stone-600">
                <input type="checkbox" required className="rounded accent-amber-600" />
                I agree to the{" "}
                <Link to="/terms" className="text-amber-700 font-medium hover:underline">
                  Terms & Conditions
                </Link>
              </label>

              {/* Button */}
              <Button
                fullWidth
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-lg hover:opacity-90 transition font-semibold"
              >
                Register
              </Button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-stone-600">
              Already have an account?{" "}
              <Link to="/login" className="text-amber-700 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
