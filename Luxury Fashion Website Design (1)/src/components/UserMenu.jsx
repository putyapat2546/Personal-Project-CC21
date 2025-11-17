import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function UserMenu() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => navigate("/login")}
        className="text-black hover:text-[#C6A664] transition-colors"
      >
        <User size={20} />
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center gap-2 text-black hover:text-[#C6A664] transition-colors z-50 relative"
      >
        <User size={20} />
        <span className="text-sm tracking-wide">{user?.full_name}</span>
        <ChevronDown size={16} />
      </button>

      {showUserMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[100]"
            onClick={() => setShowUserMenu(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden z-[101]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
