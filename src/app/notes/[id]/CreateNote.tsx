'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const router = useRouter();

    const create = async () => {

        await fetch(
            'http://127.0.0.1:8090/api/collections/notes/records', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content
            }),
        });
        setContent("");
        setTitle("");
        router.refresh();
    }

    return (
        <form className="border p-5 m-5 h-80 text-gray-300" onSubmit={create} style={{ backgroundColor: "#121212", borderRadius: "10px" }}>
            <h3 className="text-gray-200 text-lg font-semibold mb-4">Create a new Note</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                className="w-full border border-gray-300 text-gray-100 bg-gray-500 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />

            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-28 border border-gray-300 text-gray-100 bg-gray-500 rounded-md px-3 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
            />

            <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
            >
                Create Note
            </button>
        </form>

    );
}