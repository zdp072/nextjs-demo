//带有动态参数的SSR : http://localhost:3000/news/sports

function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>
                和分类<i>{category}</i>相关的新闻
            </h1>
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

export default ArticleListByCategory;

//从context中可以获取到文件名[category].js中的category
export async function getServerSideProps(context) {
    //在Next.js中，解构是一种从对象或数组中提取数据的方法
    //const params = context.params
    //const category = params.category
    const { params, req, res, query } = context;
    res.setHeader("Set-Coookie", ["name=bobo"]);
    const { category } = params;

    const resp = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await resp.json();
    return {
        props: {
            articles: data,
            category: category,
        },
    };
}
