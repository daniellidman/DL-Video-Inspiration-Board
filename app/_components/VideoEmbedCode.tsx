'use client';
import Image from 'next/image';
import { Tweet } from 'react-tweet';

export function VideoEmbedCode({
  videoURL,
  videoThumb,
}: {
  videoURL: string;
  videoThumb: string;
}) {
  // VIMEO
  if (videoURL.includes('vimeo.com')) {
    // Extract Vimeo video ID
    const match = videoURL.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
    if (!match) {
      throw new Error('Invalid Vimeo URL');
    }
    const vimeoId = match[1];

    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?h=59d1872ce3&autoplay=0`}
          frameBorder="0"
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  }

  // YOUTUBE
  if (videoURL.includes('youtube.com') || videoURL.includes('youtu.be')) {
    const id = videoURL.split('?v=')[1];

    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <iframe
          // width="full"
          // height="full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="aspect-video w-full"
        ></iframe>
      </div>
    );
  }

  // TWITTER / X
  if (videoURL.includes('twitter.com') || videoURL.includes('x.com')) {
    const id = videoURL.split('status/')[1];

    console.log(id);

    return <Tweet id={id} />;
  }

  if (videoURL.includes('instagram.com')) {
    // INSTAGRAM EMBED CODE HERE
    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <Image
          src="/tempThumb.jpg"
          fill
          className="z-10 w-full object-cover hover:opacity-30"
          alt="No embeddable video"
        />
        <p className="my-20 text-lg text-white text-center">
          No embeddable video
        </p>
      </div>
    );
  } else {
    console.log(videoThumb);
    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <Image
          src="/tempThumb.jpg"
          fill
          className="z-10 w-full object-cover hover:opacity-30"
          alt="No embeddable video"
        />
        <p className="my-20 text-lg text-white text-center">
          No embeddable video
        </p>
      </div>
    );
  }
}
