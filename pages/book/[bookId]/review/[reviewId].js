//动态嵌套路由
//localhost:3000/book/1/review/1

import { useRouter } from "next/router";

function Review() {
    const router = useRouter();
    const { bookId, reviewId } = router.query;
    return (
        <h1>
            书籍详情{bookId}的评论{reviewId}
        </h1>
    );
}

export default Review;
