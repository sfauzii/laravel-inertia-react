import { Head, useForm, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Create({ post }) {
    const route = useRoute();
    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();

        // put(`/posts/${post.id}`);
        put(route("posts.update", post));
    }

    return (
        <>
            <Head title="Edit Post" />
            <div className="max-w-md mx-auto p-4 mt-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Edit new Posts
                </h1>

                <div className="flex flex-col">
                    <form onSubmit={submit} className="flex flex-col space-y-4">
                        <textarea
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                        {errors.body && (
                            <p className="text-red-500"> {errors.body}</p>
                        )}
                        <button
                            className="primary-btn mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            disabled={processing}
                        >
                            Edit Post
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
