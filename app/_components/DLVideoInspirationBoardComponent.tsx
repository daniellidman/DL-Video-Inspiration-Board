'use client';

import { useState } from 'react';
import Image from 'next/image';
import VideoDetails from './VideoDetails';
import VideoLibrary from './VideoLibrary';

function DLVideoInspirationBoardComponent({ allLikes }) {
  const [selectedVideo, setSelectedVideo] = useState();
  // const likes = allLikes;
  // const [filteredLikes, setFilteredLikes] = useState(likes);

  const handleClick = (video) => {
    setSelectedVideo(video);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoLibrary allLikes={allLikes} />
      {/* VIDEO LIBRARY */}

      {/* <div className="flex w-full bg-gray-900">
        <button>
          <Image
            src="/filter.png"
            alt="Sort Icon"
            width={30}
            height={30}
            className="my-2 ml-5"
          />
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-2">
        {filteredLikes.map((like) => {
          return (
            <div className="relative h-64 w-64 flex-grow" key={like.id}>
              <div className="hover:opacity-10">
                <Image
                  src={like.thumbnail ? like.thumbnail : '/tempThumb.jpg'}
                  fill
                  className="z-10 w-full object-cover"
                  alt={like.name}
                  onClick={() => handleClick(like)}
                />
              </div>
              <h3 className="p-4 text-lg font-bold text-white">{like.name}</h3>
              <h4 className="px-4 text-white">by {like.author}</h4>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default DLVideoInspirationBoardComponent;
