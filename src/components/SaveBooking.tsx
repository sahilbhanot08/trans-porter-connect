
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export interface BookingInput {
  pickup_location: string;
  delivery_location: string;
  scheduled_date?: string;
  scheduled_time?: string;
  vehicle_type?: string;
  distance?: number;
  estimated_price?: number;
}

interface SaveBookingProps {
  booking: BookingInput;
  onSuccess?: () => void;
}

export default function SaveBooking({ booking, onSuccess }: SaveBookingProps) {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    // Ensure user is logged in
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      toast({ title: "Login required", description: "Please login to book." });
      setLoading(false);
      return;
    }
    // Save booking to supabase
    const { error } = await supabase.from("bookings").insert([
      {
        ...booking,
        user_id: session.user.id,
        status: "pending"
      }
    ]);
    setLoading(false);
    if (error) {
      toast({ title: "Booking failed", description: error.message });
    } else {
      toast({ title: "Booking saved!", description: "Your booking has been saved." });
      if (onSuccess) onSuccess();
    }
  };

  return (
    <Button onClick={handleSave} disabled={loading} className="bg-blue-600 hover:bg-blue-700 w-full">
      {loading ? "Saving..." : "Confirm & Save Booking"}
    </Button>
  );
}
