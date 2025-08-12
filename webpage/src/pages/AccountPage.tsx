import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AccountPage = () => {
  const [cancelled, setCancelled] = useState(false);

  const handleCancel = () => {
    setCancelled(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold mb-2">My Subscription</h2>
          <p className="text-muted-foreground mb-4">Manage your kabini.ai subscription below.</p>
        </CardHeader>
        <CardContent className="text-center">
          {!cancelled ? (
            <>
              <div className="mb-6">
                <span className="font-semibold text-lg">Active Plan:</span> <span className="text-blue-600">Pro</span>
              </div>
              <Button variant="destructive" className="w-full" onClick={handleCancel}>
                Cancel Subscription
              </Button>
            </>
          ) : (
            <div className="text-green-600 font-semibold">Your subscription has been cancelled.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPage; 
