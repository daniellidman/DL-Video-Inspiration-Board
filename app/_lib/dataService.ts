import { supabase } from './supabase';

export async function getLikes() {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error(error);
    throw new Error(
      'Likes could not be loaded. Maybe the supabase database is paused?'
    );
  }

  return data;
}
