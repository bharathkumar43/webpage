import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Eye, EyeOff, KeyRound } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { authenticateUser, setCurrentUser } from "@/lib/userUtils";

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.38,36.168,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const MicrosoftIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
        <path fill="#f25022" d="M1 1h9v9H1z"></path>
        <path fill="#00a4ef" d="M1 11h9v9H1z"></path>
        <path fill="#7fba00" d="M11 1h9v9h-9z"></path>
        <path fill="#ffb900" d="M11 11h9v9h-9z"></path>
    </svg>
);


const LoginPage = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isReturning, setIsReturning] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check against stored users first using utility function
    const user = authenticateUser(email, password);
    
    if (user) {
      // User found in localStorage
      setError("");
      // Store logged in user info using utility function
      setCurrentUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      });
      // Redirect to app.kabini.ai after successful login
      window.location.href = "https://app.kabini.ai";
      return;
    }

    // Fallback to default admin credentials
    if (email === "admin@example.com" && password === "password") {
      setError("");
      // Redirect to app.kabini.ai after successful login
      window.location.href = "https://app.kabini.ai";
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 p-3 rounded-lg w-fit mb-4">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to kabini.ai</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Sign In</Button>
          </form>
          <div className="mt-4 text-center">
            <button type="button" className="text-sm text-blue-600 hover:underline" onClick={() => navigate('/forgot-password')}>
              Forgot your password?
            </button>
          </div>
          <div className="mt-2 text-center">
            <button type="button" className="text-sm text-blue-600 hover:underline" onClick={() => navigate('/signup')}>
              Don't have an account? Sign up
            </button>
          </div>
          <div className="mt-4 space-y-2">
            <Button variant="outline" className="w-full">
              <GoogleIcon />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full">
                <MicrosoftIcon />
              Sign in with Microsoft
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Forgot Password Modal */}
      <Dialog open={showForgot} onOpenChange={setShowForgot}>
        <DialogContent className="max-w-sm w-full">
          <DialogHeader>
            <DialogTitle>Reset your password</DialogTitle>
          </DialogHeader>
          {!resetSent ? (
            <form onSubmit={e => { e.preventDefault(); setResetSent(true); }} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded px-3 py-2 bg-background text-foreground"
                  placeholder="Enter your email"
                  value={resetEmail}
                  onChange={e => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">Send Reset Link</Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="text-green-600 text-center py-6">A password reset link has been sent to your email.</div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginPage; 
