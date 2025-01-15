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
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="m-2 p-2 border border-gray-300"
                    >
                        <div className="text-sm text-slate-600">
                            <span>Posted On: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                        {/* <Link
                            href={`/posts/${post.id}`}
                            className="text-link font-bold text-blue-500"
                        >
                            Read More..
                        </Link> */}
                        <Link
                            href={route("posts.show", post)}
                            className="text-link font-bold text-blue-500"
                        >
                            Read More..
                        </Link>
                    </div>
                ))}
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
