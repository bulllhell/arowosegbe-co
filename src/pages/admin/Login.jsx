import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { RiLockLine, RiMailLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export default function Login() {
  const navigate          = useNavigate();
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      navigate("/admin");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal flex items-center justify-center px-5 grain-overlay">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <span className="font-display text-2xl font-bold text-white">Arowosegbe</span>
          <br />
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-orange">
            & Co. Properties
          </span>
          <p className="text-white/40 text-xs mt-3">Admin Access Only</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center">
              <RiLockLine size={17} className="text-brand-orange" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-brand-charcoal">Sign In</h1>
              <p className="text-xs text-brand-muted">Agent dashboard</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-brand-charcoal block">
                Email
              </label>
              <div className="relative">
                <RiMailLine
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border text-sm outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-brand-charcoal block">
                Password
              </label>
              <div className="relative">
                <RiLockLine
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted"
                />
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-brand-border text-sm outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  {showPass ? <RiEyeOffLine size={15} /> : <RiEyeLine size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-500 bg-red-50 border border-red-100 px-3 py-2.5 rounded-xl"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeDark disabled:opacity-60 disabled:pointer-events-none text-white font-medium py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/25 mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          This page is for authorised personnel only.
        </p>
      </motion.div>
    </div>
  );
}