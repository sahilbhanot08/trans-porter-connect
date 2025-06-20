// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pigtesjbrdggjppuuzgz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZ3Rlc2picmRnZ2pwcHV1emd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MjQ3MjcsImV4cCI6MjA2NTUwMDcyN30.KFFKPY9G8S-JEKq_H-0bONDxGmoVnMcFVi-M1zfQ6Os";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

declare global {
  interface Window {
    supabase: typeof supabase;
  }
}
window.supabase = supabase;
