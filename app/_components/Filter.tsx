'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // The function recieves a filter, which is defined in the onClick of each button.
  // First define a variable "params" using the URLSearchParams function.
  //Then set the keyword to match the filter. In this case, capacity.
  // Use a template literal to set and go to the new URL, and optionally add scroll:false to stop it from scrolling down the page to where you came from.
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set('videoID', filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  // Highlight which filter is currently active (done in a later step)
  const activeFilter = searchParams.get('capacity') ?? 'all';

  // Return 4 Button components (created at the bottom)
  return (
    <div className="flex border border-primary-800">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>

      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

// Button component, with conditional styles for showing the Active filter
function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
