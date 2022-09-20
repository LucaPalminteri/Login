import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://drfupqvahraezlgomcuv.supabase.co', 
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZnVwcXZhaHJhZXpsZ29tY3V2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MzY5MjIzNywiZXhwIjoxOTc5MjY4MjM3fQ.TcpGhtzI5Wt-sLoZ_H2fhzFA2kXKt4KfbxH2ljz0TKg');
export {supabase}