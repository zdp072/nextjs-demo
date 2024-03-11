//动态路由
//localhost:3000/book

//应用内的路由可以使用Link标签，应用外的路由使用a标签

import Link from 'next/link'

function BookList({bookId = 100}) {
    return (
        <div>
            <Link href="/">回到主页</Link>
            <h2>
                <Link href="/book/1">书籍1</Link>
            </h2>
            <h2>
                <Link href="/book/2">书籍2</Link>
            </h2>
            <h2>
                <Link href="/book/3" replace>书籍3</Link>
            </h2>
            <h2>
                <Link href={`/book/${bookId}`}>书籍{bookId}</Link>
            </h2>
        </div>
    )
}

export default BookList