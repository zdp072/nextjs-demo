//根路径路由，访问地址：http://localhost:3000

//链接导航，访问地址：http://localhost:3000/blog

//应用启动命令：yarn dev

import Link from 'next/link'
import {useRouter} from 'next/router'

function Home() {

    const router = useRouter();
    const handleClick = () => {
        router.push('/book')
    }

    return (
        <div>
            <h1>主页</h1>
            <Link href="/blog">博客</Link>
            <br/>
            <br/>
            <Link href="/book">书籍</Link>
            <br/>
            <br/>
            <button onClick={handleClick}>下单</button>
            <br/>
            <br/>
            <Link href="/posts">帖子列表</Link>
        </div>
    )
}

export default Home;