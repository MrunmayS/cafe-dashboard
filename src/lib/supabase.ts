import { createClient } from '@supabase/supabase-js';

// Fetched from Supabase MCP
const supabaseUrl = 'https://tmarqhmtbgtjwkyzjjfi.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtYXJxaG10Ymd0andreXpqamZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyODM4NDcsImV4cCI6MjA1OTg1OTg0N30.14j5VAQMT0nhNzqc0Y7-Fzb0lUTyfrbBBOtot8w8GEY";
// Create Supabase client with the fetched URL and API key
export const supabase = createClient(supabaseUrl, supabaseKey);
