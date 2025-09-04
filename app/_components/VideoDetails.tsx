import { VideoEmbedCode } from './VideoEmbedCode';
import Link from 'next/link';
import { Video } from '../types/types';

type VideoDetailsProps = {
  selectedVideo: Video | undefined;
};

export default async function VideoDetails({
  selectedVideo,
}: VideoDetailsProps) {
  const video = selectedVideo;

  if (!selectedVideo || video == undefined) {
    return <></>;
  }

  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      <div className="m-5">
        <div className="w-full rounded-md">
          <VideoEmbedCode videoURL={video.url} videoThumb={video.thumbnail} />
        </div>
      </div>
      <div className="m-5 overflow-scroll text-wrap break-words text-white">
        <h1 className="text-2xl font-bold">{video.name}</h1>
        <h2 className="mb-1 mt-1 text-lg font-semibold">{video.author}</h2>
        <Link
          href={video.url ? video.url : ''}
          target="_blank"
          className="mb-10 text-sm text-blue-200 underline"
        >
          {video.url}
        </Link>
        <p className="mb-10 mt-2 text-xs">{video.yearPublished}</p>
        <h2 className="mt-10 text-lg font-semibold">Notes</h2>
        <p className="mb-10 text-xs">{video.notes}</p>
      </div>
    </div>
  );
}
