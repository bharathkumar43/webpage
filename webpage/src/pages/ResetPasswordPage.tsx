import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { getUsers, validateResetToken, updateUserPassword, removeResetToken } from "@/lib/userUtils";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token || !email) {
      setError("Invalid reset link. Please request a new password reset.");
      return;
    }

    // Validate reset token using utility function
    if (!validateResetToken(email, token)) {
      setError("Invalid or expired reset link. Please request a new password reset.");
      return;
    }

    // Check if user exists
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      setError("User not found. Please request a new password reset.");
      return;
    }

    setIsValidToken(true);
    setUserEmail(email);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validation
    if (!password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      // Update user password using utility function
      const passwordUpdated = updateUserPassword(userEmail, password);
      
      if (!passwordUpdated) {
        setError("Failed to update password. Please try again.");
        setIsLoading(false);
        return;
      }

      // Remove used reset token using utility function
      removeResetToken(userEmail);

      setSuccess(true);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isValidToken && error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto bg-red-100 p-3 rounded-lg w-fit mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-red-600">Invalid Reset Link</h2>
            <p className="text-muted-foreground">{error}</p>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => navigate('/forgot-password')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Request New Reset Link
            </Button>
            <div className="mt-4">
              <button 
                type="button" 
                className="text-sm text-blue-600 hover:underline flex items-center justify-center mx-auto"
                onClick={() => navigate('/login')}
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Sign In
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 p-3 rounded-lg w-fit mb-4">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold">Reset Your Password</h2>
          <p className="text-muted-foreground">Enter your new password below</p>
        </CardHeader>
        <CardContent>
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
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
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-green-600 font-semibold mb-2">Password reset successfully!</div>
              <div className="text-muted-foreground text-sm mb-4">
                Your password has been updated. You can now sign in with your new password.
              </div>
              <div className="text-xs text-muted-foreground">
                Redirecting to login page...
              </div>
            </div>
          )}
          
          <div className="mt-4 text-center">
            <button 
              type="button" 
              className="text-sm text-blue-600 hover:underline flex items-center justify-center mx-auto"
              onClick={() => navigate('/login')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Sign In
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage; 