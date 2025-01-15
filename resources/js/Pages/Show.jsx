import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    const route = useRoute();

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route("posts.destroy", post));
    }

    return (
        <>
            <div>
                <h1 className="title text-black text-center font-bold text-[50px] m-2">
                    Show Post ID {post.id}
                </h1>
            </div>

            <div className="px-28">
                <div className="m-2 p-2 border border-gray-300">
                    <div className="text-sm text-slate-600">
                        <span>Posted On: </span>
                        <span>
                            {new Date(post.created_at).toLocaleTimeString()}
                        </span>
                    </div>
                    <p className="font-medium">{post.body}</p>
                    <div className="flex items-center justify-end gap-2">
                        <form onSubmit={submit}>
                            <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                                Delete
                            </button>
                        </form>

                        {/* <Link
                            href={`/posts/${post.id}/edit`}
                            className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                        >
                            Edit
                        </Link> */}
                        <Link
                            href={route('posts.edit', post)}
                            className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
