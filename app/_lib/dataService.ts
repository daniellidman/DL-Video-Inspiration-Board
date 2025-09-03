import { supabase } from './supabase';
import { DatabaseVideo, Video } from '../types/types';

function mapDbVideo(v: DatabaseVideo): Video {
  return { ...v, id: String(v.id), yearPublished: String(v.yearPublished) };
}

export async function getLikes(): Promise<Video[]> {
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

  return data?.map(mapDbVideo) ?? [];
}
