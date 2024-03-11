//getStaticPaths

import Link from "next/link";

function PostList({ posts }) {
    //const {posts} = p;
    return (
        <>
            <h1>帖子列表1</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <h2>
                                {post.id}、{post.title}
                            </h2>
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default PostList;

export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    return {
        props: {
            posts: data,
        },
    };
}
