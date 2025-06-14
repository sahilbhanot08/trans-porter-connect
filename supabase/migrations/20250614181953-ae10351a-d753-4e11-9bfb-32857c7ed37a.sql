
-- 1. Bookings Table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  pickup_location TEXT NOT NULL,
  delivery_location TEXT NOT NULL,
  scheduled_date DATE,
  scheduled_time TIME,
  vehicle_type TEXT,
  distance NUMERIC,
  estimated_price NUMERIC,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Row Level Security for bookings
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own bookings
CREATE POLICY "Users can view their own bookings" ON public.bookings
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to insert their own bookings
CREATE POLICY "Users can create a booking" ON public.bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to update or cancel their own bookings
CREATE POLICY "Users can update their bookings" ON public.bookings
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow users to delete their bookings (optional)
CREATE POLICY "Users can delete their bookings" ON public.bookings
  FOR DELETE USING (auth.uid() = user_id);

-- 2. Orders Table for Stripe Payments
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  booking_id UUID REFERENCES public.bookings(id),
  stripe_session_id TEXT UNIQUE,
  amount NUMERIC,
  currency TEXT DEFAULT 'INR',
  status TEXT, -- e.g., pending/paid/failed
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Row Level Security for orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own orders
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to create their own orders
CREATE POLICY "Users can create order" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own orders
CREATE POLICY "Users can update order" ON public.orders
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow users to delete their own orders
CREATE POLICY "Users can delete order" ON public.orders
  FOR DELETE USING (auth.uid() = user_id);
