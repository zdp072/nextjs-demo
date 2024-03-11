//http://localhost:3000/comments
//请求一个后端评论接口并加载评论数据

import { useState } from "react";

function CommentsPage() {
    //使用useState钩子来声明一个名为comments的状态变量，并使用setComments函数来更新它。初始值为空数组
    const [comments, setComments] = useState([]);

    const [comment, setComment] = useState("");

    //这里定义了一个名为fetchComments的异步函数，用于从API获取评论数据
    const fetchComments = async () => {
        try {
            const resp = await fetch("/api/comments");
            const data = await resp.json();
            if (Array.isArray(data)) {
                setComments(data);
            } else {
                console.error("Comments data is not an array");
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const submitComment = async () => {
        try {
            const resp = await fetch("/api/comments", {
                method: "POST",
                body: JSON.stringify({ comment }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await resp.json();
            console.log(data);
            // 更新comments状态变量
            setComments((prevComments) => [...prevComments, data]);
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    const deleteComment = async (commentId) => {
        const resp = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE",
        });
        const data = await resp.json();
        fetchComments();
    };

    return (
        <>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={submitComment}>提交评论</button>
            <button onClick={fetchComments}>加载评论</button>
            <hr />
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        {comment.id} {comment.text}
                        <button onClick={() => deleteComment(comment.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </>
    );
}

export default CommentsPage;
