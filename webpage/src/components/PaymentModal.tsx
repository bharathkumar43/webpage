import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import { useEffect } from "react";

interface Plan {
  name: string;
  price: string;
}

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  plans: Plan[];
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
}

// const RAZORPAY_KEY = "rzp_test_1DP5mmOlF5G5ag"; // Razorpay test key

const PaymentModal = ({ open, onClose, plans, selectedPlan, setSelectedPlan }: PaymentModalProps) => {
  // useEffect(() => {
  //   if (!window.Razorpay) {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);

  const selected = plans.find(p => p.name === selectedPlan) || plans[0];
  // const amount = selected.name === "Starter" ? 0 : parseInt(selected.price.replace("$", "")) * 100; // in paise

  // const handleRazorpay = () => {
  //   const options = {
  //     key: RAZORPAY_KEY,
  //     amount: amount,
  //     currency: "USD",
  //     name: "kabini.ai",
  //     description: `Subscription for ${selected.name} Plan`,
  //     image: "https://app.kabini.ai/favicon.ico",
  //     handler: function (response: any) {
  //       window.location.href = "https://app.kabini.ai";
  //     },
  //     prefill: {
  //       email: "test@example.com",
  //       contact: "9999999999"
  //     },
  //     theme: {
  //       color: "#2563eb"
  //     }
  //   };
  //   // @ts-ignore
  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  const handleStartTrial = () => {
    window.location.href = "https://app.kabini.ai";
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Start Your Free Trial</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Select Plan</label>
            <select
              className="w-full border rounded px-3 py-2 bg-background text-foreground"
              value={selectedPlan}
              onChange={e => setSelectedPlan(e.target.value)}
            >
              {plans.map(plan => (
                <option key={plan.name} value={plan.name}>{plan.name} ({plan.price}/mo)</option>
              ))}
            </select>
          </div>
          <div className="text-lg font-semibold text-center mt-4">
            Plan: <span className="text-primary">{selected.name}</span>
          </div>
          <div className="bg-muted p-3 rounded text-xs text-muted-foreground">
            <div className="mb-1 font-semibold">Free Trial Details:</div>
            <div>• 7-day free trial</div>
            <div>• No credit card required</div>
            <div>• Cancel anytime</div>
            <div>• Full access to all features</div>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" type="button" onClick={handleStartTrial}>
            Start Free Trial
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal; 
