'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Video } from '../types/types';
import Link from 'next/link';

type VideoLibraryProps = {
  allLikes: Video[];
};

export default function VideoLibrary({ allLikes }: VideoLibraryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const likes = allLikes;
  const [filteredLikes, setFilteredLikes] = useState(likes);

  function handleControlClick(likeURL: string) {
    window.open(likeURL);
  }

  function handleClick(likeID: string) {
    const params = new URLSearchParams(searchParams);
    params.set('videoID', likeID);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <div className="flex w-full bg-gray-900">
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
                  //
                  // Cmd-Click to open URL in new tab, or click to open in app.
                  onClick={(e) => {
                    if (e.ctrlKey || e.metaKey)
                      return handleControlClick(like.url);
                    handleClick(like.id);
                  }}
                />
              </div>
              <h3 className="p-4 text-lg font-bold text-white">{like.name}</h3>
              <h4 className="px-4 text-white">by {like.author}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
