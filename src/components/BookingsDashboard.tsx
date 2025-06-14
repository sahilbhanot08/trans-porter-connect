
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Booking {
  id: string;
  pickup_location: string;
  delivery_location: string;
  scheduled_date?: string;
  scheduled_time?: string;
  vehicle_type?: string;
  distance?: number;
  estimated_price?: number;
  status?: string;
  created_at: string;
}

export default function BookingsDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) return;
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setBookings(data as Booking[]);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Your Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div>No bookings found.</div>
          ) : (
            <div className="space-y-4">
              {bookings.map(b => (
                <div
                  key={b.id}
                  className="border rounded-lg p-4 mb-2 shadow-sm bg-slate-50"
                >
                  <div className="font-medium mb-1">{b.pickup_location} → {b.delivery_location}</div>
                  <div className="text-sm text-gray-600">
                    {b.vehicle_type && <span className="mr-2">{b.vehicle_type}</span>}
                    {b.scheduled_date && b.scheduled_time && (
                      <span>{b.scheduled_date} {b.scheduled_time}</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    Distance: {b.distance ?? "?"} km | ₹{b.estimated_price ?? "?"}
                  </div>
                  <Badge className="bg-blue-600">{b.status}</Badge>
                  <div className="text-xs text-gray-400 mt-1">
                    Created: {new Date(b.created_at).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
