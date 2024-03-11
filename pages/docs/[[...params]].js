//守卫路由（catch-all): 捕获前缀为docs任意路径的URL
//localhost:3000/docs/context/feature

import { useRouter } from "next/router";

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params.length);
    if (params.length === 2) {
        return (
            <h1>
                查看目录{params[0]}的{params[1]}文档
            </h1>
        );
    }
    return <h1>我的文档</h1>;
}

export default Doc;
