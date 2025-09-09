'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Video } from '../types/types';

type VideoLibraryProps = {
  allLikes: Video[];
};

export default function VideoLibrary({ allLikes }: VideoLibraryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const likes = allLikes;
  const [filteredLikes, setFilteredLikes] = useState(likes);
  const [searchText, setSearchText] = useState('');

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(searchText);

    // ERROR CATCHING
    if (!searchText || searchText === '') {
      setFilteredLikes(likes);
      return;
    }

    function likeMatchesSearch(like: Video) {
      if (like.author.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (like.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (
        like.notes &&
        like.notes.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return true;
      } else if (like.url.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (
        like.tags &&
        like.tags.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return true;
      } else if (like.yearPublished.includes(searchText)) {
        return true;
      } else {
        return false;
      }
    }

    const newLikes = likes.filter(likeMatchesSearch);

    // FORM SUBMIT FUNCTION
    setFilteredLikes(newLikes);
  }

  return (
    <div>
      <div className="w-full grid bg-gray-900 py-2 justify-items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-1/2 m-1 outline-1 outline-gray-600 rounded-md"
        >
          <input
            name="textInput"
            id="textInput"
            type="text"
            placeholder="Search"
            value={searchText || ''}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-1"
          />
        </form>
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
