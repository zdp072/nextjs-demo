
//增量静态再生成ISR

import Link from "next/link";

function ProductList({products}) {
    return (
        <>
            <h1>产品列表</h1>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Link href={`products/${product.id}`}>
                            <h2>
                                {product.id}、{product.title}、{product.price}
                            </h2>
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </>
    );
}

export default ProductList;

//revalidate: 每隔一段时间重新生成ProductList页面，而不需要构建整个应用
export async function getStaticProps() {
    const resp = await fetch("http://localhost:4000/products");
    const data = await resp.json();
    return {
        props: {
            products: data,
        },
        revalidate: 60
    };
}
