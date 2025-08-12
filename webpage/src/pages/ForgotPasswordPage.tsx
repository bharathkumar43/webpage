import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { getUsers, addResetToken } from "@/lib/userUtils";
import { sendPasswordResetEmail } from "@/lib/emailService";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Check if user exists
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      setError("No account found with this email address.");
      setIsLoading(false);
      return;
    }

    try {
      // Generate reset token
      const resetToken = generateResetToken();
      const resetExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // 24 hours

      // Store reset token using utility function
      addResetToken(email, resetToken, resetExpiry);

      // Generate reset link
      const resetLink = `${window.location.origin}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`;

      // Send email using email service
      const emailSent = await sendPasswordResetEmail({
        email: email,
        resetLink: resetLink,
        userName: user.firstName
      });

      if (!emailSent) {
        throw new Error("Failed to send email");
      }

      setSuccess(true);
    } catch (error) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const generateResetToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 p-3 rounded-lg w-fit mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold">Reset Your Password</h2>
          <p className="text-muted-foreground">Enter your email to receive a password reset link</p>
        </CardHeader>
        <CardContent>
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-green-600 font-semibold mb-2">Reset link sent!</div>
              <div className="text-muted-foreground text-sm mb-4">
                We've sent a password reset link to <strong>{email}</strong>
              </div>
              <div className="text-xs text-muted-foreground">
                Check your email and click the link to reset your password.
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

export default ForgotPasswordPage; 