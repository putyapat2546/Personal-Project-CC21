import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../validation/schema";
import { Eye, EyeOff } from "lucide-react";

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false);
      return;
    }
    
    // Validate input
    try {
      registerSchema.parse({ full_name: name, email, password });
    } catch (error) {
      if (error.errors) {
        setMessage(error.errors[0].message);
      } else {
        setMessage('Validation failed');
      }
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: name, email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(body.error || 'Registration failed');
        setLoading(false);
        return;
      }
      setMessage(body.message || 'Registration successful — please sign in');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error(err);
      setMessage('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          {/* Go Home */}
          <button
            onClick={() => navigate("/")}
            className="inline-block hover:opacity-70 transition-opacity"
          >
            <h1
              className="text-black tracking-[0.2em] mb-2"
              style={{ fontSize: "1.5rem" }}
            >
              MAISON EIGHT
            </h1>
          </button>

          <div className="w-12 h-[1px] bg-[#C6A664] mx-auto mb-6" />
          <p
            className="text-gray-600 tracking-wider"
            style={{ fontSize: "0.875rem" }}
          >
            CREATE YOUR ACCOUNT
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-10 shadow-lg"
        >
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                className="block text-gray-700 mb-2 tracking-wide"
                style={{ fontSize: "0.75rem" }}
              >
                FULL NAME
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                required
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 mb-2 tracking-wide"
                style={{ fontSize: "0.75rem" }}
              >
                EMAIL ADDRESS
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                required
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-gray-700 mb-2 tracking-wide"
                style={{ fontSize: "0.75rem" }}
              >
                PASSWORD
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664] pr-10"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-gray-700 mb-2 tracking-wide"
                style={{ fontSize: "0.75rem" }}
              >
                CONFIRM PASSWORD
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664] pr-10"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={loading}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error/Success Message */}
            {message && (
              <div className={`text-center text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-black hover:bg-[#C6A664] text-white transition-all duration-300 py-6 tracking-[0.2em]"
              style={{ fontSize: "0.875rem" }}
              disabled={loading}
            >
              {loading ? 'CREATING...' : 'CREATE ACCOUNT'}
            </Button>
          </form>

          {/* Switch to Login */}
          <div className="mt-8 text-center">
            <p
              className="text-gray-600 mb-2"
              style={{ fontSize: "0.875rem" }}
            >
              Already have an account?
            </p>
            <button
              onClick={() => navigate('/login')}
              className="text-[#C6A664] hover:text-black transition-colors tracking-wide"
              style={{ fontSize: "0.875rem" }}
            >
              Sign In
            </button>
          </div>
        </motion.div>

        {/* Continue as Guest */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black transition-colors tracking-wide"
            style={{ fontSize: "0.75rem" }}
          >
            Continue as Guest
          </button>
        </div>
      </motion.div>
    </div>
  );
}
