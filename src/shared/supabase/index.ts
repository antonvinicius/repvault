import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://mwlcesqcgkuzewkkgyme.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bGNlc3FjZ2t1emV3a2tneW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODY1MzcsImV4cCI6MjA0NzM2MjUzN30.eePeYcE8AXAck3Yw3z0zFkcQ_yT0wYWce6ZwzyCHyUg'
)