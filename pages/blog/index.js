//嵌套路由，访问blog根路径会指向blog目录下的index页面
//http://localhost:3000/blog

import Link from 'next/link'

function Blog() {
    return (
        <div>
            <Link href="/">回到主页</Link>
            <h1>博客</h1>
        </div>
    )
}

export default Blog