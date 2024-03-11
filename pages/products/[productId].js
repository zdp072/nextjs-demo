
//增量静态再生成ISR

import { useRouter } from "next/router";

//动态参数访问
function Product({ product }) {
    const router = useRouter();

    //当fallback设置为true时，请求到一个不存在的页面时，会返回以下页面
    if (router.isFallback) {
        return <h1>加载中</h1>;
    }

    return (
        <>
            <h2>
                {product.id}、{product.title} 、{product.price}
            </h2>
            <p>{product.description}</p>
        </>
    );
}

//getStaticProps函数自动接收context参数
export async function getStaticProps(context) {
    //把context包装成一个params对象
    const { params } = context;
    const resp = await fetch(
        `http://localhost:4000/products/${params.productId}`
    );
    const data = await resp.json();

    //如果数据不存在，返回 404 页面
    if (!data.id) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product: data,
        },
        revalidate: 60,
    };
}

//getStaticPaths函数告诉nextjs，productId为路径中的productId，路径参数值的范围为1、2、3
export async function getStaticPaths() {
    const resp = await fetch("http://localhost:4000/products");
    const data = await resp.json();
    const paths = data.map((product) => {
        return {
            params: { productId: `${product.id}` },
        };
    });

    //fallback可能得值：false、true、blocking
    return {
        paths: paths,
        fallback: true,
    };
}

export default Product;
