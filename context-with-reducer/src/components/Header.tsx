import { usePosts } from "@/contexts/PostContext";
import { useState } from "react"

export const Header = () => {
    const postCtx = usePosts();

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.dispatch({
                type: 'add',
                payload: {
                    title: titleInput,
                    body: bodyInput
                }
            });
            setTitleInput('');
            setBodyInput('');
        }

    }

    return (
        <header>
            <h1 className="text-center m-6 text-4xl">Create a story</h1>

            <div className="flex flex-col gap-3 border-gray-400 my-4">
                <input
                    type="text" 
                    placeholder="Write a title"
                    className="bg-amber-50 border border-gray-300 p-2 text-black text-xl"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <textarea
                    placeholder="Write a body"
                    className="bg-amber-50 h-64 border border-gray-300 p-2 text-black text-xl"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}
                ></textarea>
                <button 
                    className="bg-blue-500 p-3 text-white rounded-md"
                    onClick={handleAddButton}
                >Add</button>
            </div>
        </header>
    )
}