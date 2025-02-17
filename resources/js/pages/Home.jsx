import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <h1 className="title">Home hadi</h1>

            <div>
                {posts.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div>
                            <span className="text-blue-600"> Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleString()}
                            </span>
                        </div>
                        <p className="font-medium"> {post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
