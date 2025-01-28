import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";
import React, { useState } from "react";

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashMsg, setFlashMsg] = useState(flash.message);
    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <Head title={component} />
            <h1 className="title text-black text-center font-bold text-[50px] m-2">
                Hello World
            </h1>

            {flashMsg && <p className="text-green-500">{flashMsg}</p>}

            <div className="px-4 sm:px-8 md:px-16 lg:px-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.data.map((post) => (
                        <div
                            key={post.id}
                            className="rounded-lg shadow-custom border-gray-300 p-4 bg-white"
                        >
                            <div className="text-sm text-slate-600 mb-2">
                                <span>Posted On: </span>
                                <span>
                                    {new Date(
                                        post.created_at
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="font-medium text-gray-800 mb-4 line-clamp-3">
                                {post.body}
                            </p>
                            {/* <a
                                href={`/posts/${post.id}`}
                                className="inline-block text-white bg-primary hover:bg-primary hover:shadow-hoverHighlight font-bold py-2 px-4 rounded-lg transition duration-200"
                            >
                                Read More
                            </a> */}

                            <a
                                href={route("posts.show", post)}
                                className="inline-block text-white bg-primary hover:bg-primary hover:shadow-hoverHighlight font-bold py-2 px-4 rounded-lg transition duration-200"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-10 ml-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active
                                    ? "bg-blue-500 text-white"
                                    : "text-blue-500"
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-600"
                        ></span>
                    )
                )}
            </div>
        </>
    );
}
