'use client';
import { Tweet } from 'react-tweet';

export function VideoEmbedCode({ video }) {
  // VIMEO
  if (video.url.includes('vimeo.com')) {
    // Extract Vimeo video ID
    const match = video.url.match(/vimeo\.com\/(?:.*\/)?(\d+)/);
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
  if (video.url.includes('youtube.com') || video.url.includes('youtu.be')) {
    const id = video.url.split('?v=')[1];

    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <iframe
          // width="full"
          // height="full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
          className="aspect-video w-full"
        ></iframe>
      </div>
    );
  }

  // TWITTER / X
  if (video.url.includes('twitter.com' || video.url.includes('x.com'))) {
    const id = video.url.split('status/')[1];

    console.log(id);

    return <Tweet id={id} />;
  }

  if (video.url.includes('instagram.com')) {
    // INSTAGRAM EMBED CODE HERE
    return <></>;
  } else {
    return (
      <div className="relative h-0 overflow-hidden rounded-xl pb-[56.25%] shadow-md">
        <img src={video.thumbnail} alt="No embeddable video" width="full" />
        {/* <iframe
                  src={`https://player.vimeo.com/video/724972964?h=59d1872ce3&autoplay=0`}
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute left-0 top-0 h-full w-full"
                ></iframe> */}
      </div>
    );
  }
}
