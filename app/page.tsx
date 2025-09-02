import { getLikes } from './_lib/dataService';
import VideoDetails from './_components/VideoDetails';
import VideoLibrary from './_components/VideoLibrary';

export default async function Home({ searchParams }) {
  const videoID = searchParams?.videoID ?? '';
  const allLikes = await getLikes();

  const selectedVideo = allLikes.find((vid) => vid.id == videoID);

  return (
    <div>
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoLibrary allLikes={allLikes} />;
    </div>
  );
}
