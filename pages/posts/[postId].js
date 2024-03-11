import { useRouter } from "next/router";

//动态参数访问
function Post({ post }) {
    const router = useRouter();

    //当fallback设置为true时，请求到一个不存在的页面时，会返回以下页面
    if (router.isFallback) {
        return <h1>加载中</h1>;
    }

    return (
        <>
            <h2>
                {post.id}、{post.title}
            </h2>
            <p>{post.body}</p>
        </>
    );
}

//getStaticProps函数自动接收context参数
export async function getStaticProps(context) {
    //把context包装成一个params对象
    const { params } = context;
    const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await resp.json();

    return {
        props: {
            post: data,
        },
    };
}

//getStaticPaths函数告诉nextjs，postId为路径中的postId，路径参数值的范围为1、2、3
export async function getStaticPaths() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    const paths = data.map((post) => {
        return {
            params: { postId: `${post.id}` },
        };
    });

    //fallback可能得值：false、true、blocking
    return {
        paths: paths,
        fallback: false,
    };
}

export default Post;

/*
    要点：fallback=false
    1、从getStaticPaths返回的路径，会在构建时通过getStaticProps函数渲染为html
    2、任何不是从这个getStaticPaths返回的路径都会导致返回404页面

    使用场景：
    1、需要预渲染的路径较少
    2、帖子不多，且不需要经常添加新页面的博客站点
*/

/*
    要点：fallback=true
    1、由getStaticPath返回的路径，会在构建时由getStaticProps渲染为html
    2、构建时未生成的页面在运行时不会产生404页面，相反next.js会在第一次请求改路径的时候返回页面后备fallback版本
    3、在后台next.js会静态生成和请求路径向对应的html和json，包括运行getStaticProps
    4、完成后浏览器会接受到和路径对应的json，它将会被用于渲染带有props属性的页面，从用户的角度看，页面会从后备版本切换到完整版本
    5、同时next.js会跟踪已渲染的新页面列表，对同一路径的后续请求将直接返回生成的页面，就像其他在构建时渲染的页面一样

    使用场景：
    应用程序有大量依赖于数据的静态页面，比如大型电商网站
*/

/*
    要点：fallback=blocking
    1、由getStaticPaths返回的路径，会在构建时由getStaticProps渲染为html
    2、访问不再构建时生成的路径不会导致404页面，相反在第一次请求时nextjs会在服务端渲染页面，并返回生成的html
    3、在服务端渲染完成后，浏览器会接收到和请求路径对应的html，用户所看到的浏览器会从页面被请求到完整页面被加载，
    这中间没有加载中或者后备状态
    4、之后nextjs会跟踪新的预渲染的页面，对同一路径的后续请求，服务器会直接返回生成的页面，就像和构建时预渲染的页面一样
 */
