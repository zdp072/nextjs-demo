//动态路由，带[]的文件会被认为是动态路由
//localhost:3000/book/1

import { useRouter } from "next/router"

function BookDetail() {
    const router = useRouter();
    const bookId = router.query.bookId;
    return <h1>书籍{bookId}的详情页</h1>
}

export default BookDetail