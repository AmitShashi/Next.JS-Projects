async function getNote(noteId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);


    return (
        <div className="h-max w-max p-5 m-auto text-center flex flex-col items-center">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Title: {note.title}</h2>
                <hr className="my-4" />
                <h5 className="text-gray-100">{note.content}</h5>
            </div>
        </div>

    )
}