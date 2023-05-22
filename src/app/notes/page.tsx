import Link from "next/link";
import PocketBase from 'pocketbase';
import CreateNote from "./[id]/CreateNote";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 1,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNotes() {


  const db = new PocketBase('http://127.0.0.1:8090');

  // fetch a paginated records list
  const data = await db.collection('notes').getList(1, 50);


  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="grid grid-cols-3 gap-4">
      <h1 className="col-span-3 text-4xl font-bold text-gray-100 text-center">Notes</h1>
      {notes?.map((note) => (
        <div key={note.id} className="col-span-1">
          <Note note={note} />
        </div>
      ))}
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content } = note || {};

  return (
    <div className="border border-gray-500 p-3 m-3 h-80">
      <Link className="border border-gray-500 p-3 h-full flex flex-col justify-between rounded-lg transition duration-300 hover:bg-gray-700" href={`/notes/${id}`}>
        <h2 className="text-3xl text-gray-200 font-semibold py-3">{title}</h2>
        <hr className="my-2 border-gray-300" />
        <p className="text-gray-100 text-lg mt-2 flex-grow">{content}</p>
      </Link>
    </div>

  );
}
