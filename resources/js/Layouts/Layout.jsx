import { Head, Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-slate-800 shadow-md">
                <nav className="max-w-screen-lg mx-auto flex items-center justify-between p-5">
                    <Link
                        className="nav-link text-slate-200 hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="nav-link text-slate-200 hover:bg-slate-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        href="/posts/create"
                    >
                        Create
                    </Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
