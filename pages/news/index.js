//使用getServerSideProps实现SSR
//getServerSideProps只会运行在服务器端
//getServerSideProps必须返回一个对象，这个对象必须包含一个props键，它的值夜必须是一个对象
//getServerSideProps会在每次请求时运行

import Link from "next/link";

function NewsArticleList({ articles }) {
    return (
        <>
            <h1>新闻列表</h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id}、{article.title}、{article.category}
                        </h2>
                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export async function getServerSideProps() {
    const resp = await fetch("http://localhost:4000/news");
    const data = await resp.json();
    return {
        props: {
            articles: data,
        },
    };
}

export default NewsArticleList;
