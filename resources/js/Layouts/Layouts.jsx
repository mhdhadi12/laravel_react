import { Link } from "@inertiajs/react";

export default function Layouts({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/create">
                        create
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
