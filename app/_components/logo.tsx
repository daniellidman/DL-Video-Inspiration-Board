import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="m-6 text-3xl font-bold text-white">
        🎬 DL Video Inspiration Board
      </h1>
    </Link>
  );
}
