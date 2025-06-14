
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Listen for auth changes and set session, redirect when logged in
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) {
        navigate("/");
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        navigate("/");
      }
    });
    return () => { authListener?.subscription.unsubscribe(); };
  }, [navigate]);

  // Handle login/signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isLogin) {
        // Log in using email or phone
        if (email) {
          const { error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) throw error;
        } else if (phone) {
          const { error } = await supabase.auth.signInWithPassword({ phone, password });
          if (error) throw error;
        }
      } else {
        // Sign up using email or phone
        if (email) {
          const redirectUrl = `${window.location.origin}/`;
          const { error } = await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: redirectUrl }
          });
          if (error) throw error;
        } else if (phone) {
          const { error } = await supabase.auth.signUp({ phone, password });
          if (error) throw error;
        }
      }
    } catch (err: any) {
      setError(err?.message || "Authentication error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            {isLogin ? "Log In to TransPorter" : "Sign Up for TransPorter"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              placeholder="Email (optional)"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={!!phone}
            />
            <Input
              placeholder="Phone (optional, e.g., +919999999999)"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={!!email}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={loading}>
              {loading ? "Please wait..." : isLogin ? "Log In" : "Sign Up"}
            </Button>
            <Button type="button" variant="ghost" className="w-full" onClick={() => setIsLogin(x => !x)}>
              {isLogin ? "Don't have an account? Sign up!" : "Have an account? Log in!"}
            </Button>
          </form>
          {error && (
            <div className="text-red-500 mt-2 text-sm text-center">{error}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
