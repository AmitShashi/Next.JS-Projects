import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Next.js 13.4 - Note App</h1>
        <Link href="/notes">
          <button className="text-gray-800 bg-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out transform hover:scale-105">
            Create Notes
          </button>
        </Link>
      </div>
    </div>
  );
}
