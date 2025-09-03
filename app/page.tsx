import { getLikes } from './_lib/dataService';
import VideoDetails from './_components/VideoDetails';
import VideoLibrary from './_components/VideoLibrary';
import { Video } from './types/types';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const videoID = searchParams?.videoID ?? '';
  const allLikes: Video[] = await getLikes();

  const selectedVideo = allLikes.find((vid) => vid.id == videoID);

  return (
    <div>
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoLibrary allLikes={allLikes} />;
    </div>
  );
}
