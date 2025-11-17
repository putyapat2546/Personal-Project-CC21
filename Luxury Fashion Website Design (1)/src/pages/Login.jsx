import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validation/schema";

export function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    // Validate input
    try {
      loginSchema.parse({ email, password });
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
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessage(body.error || 'Login failed');
        setLoading(false);
        return;
      }
      // store token and navigate
      if (body.token) {
        localStorage.setItem('auth_token', body.token);
      }
      onLogin?.(body.user);
      navigate('/home');
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
            WELCOME BACK
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-10 shadow-lg"
        >
          <form onSubmit={handleLogin} className="space-y-6">
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
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                required
                disabled={loading}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="text-gray-600 hover:text-[#C6A664] transition-colors tracking-wide"
                style={{ fontSize: "0.75rem" }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Error/Success Message */}
            {message && (
              <div className="text-center text-sm text-red-600">
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
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </Button>
          </form>

          {/* Switch to Register */}
          <div className="mt-8 text-center">
            <p
              className="text-gray-600 mb-2"
              style={{ fontSize: "0.875rem" }}
            >
              Don't have an account?
            </p>
            <button
              onClick={() => navigate('/register')}
              className="text-[#C6A664] hover:text-black transition-colors tracking-wide"
              style={{ fontSize: "0.875rem" }}
            >
              Create Account
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
