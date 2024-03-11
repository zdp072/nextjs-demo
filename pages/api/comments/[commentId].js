//动态API路由
//http://localhost:3000/api/comments/1

import { comments } from "../../../data/comments";

export default function handler(req, resp) {
    
    if (req.method === "GET") {
        const { commentId } = req.query;
        const comment = comments.find(
            (comment) => comment.id === parseInt(commentId)
        );
        resp.status(200).json(comment);
    }

    if (req.method === "DELETE") {
        const { commentId } = req.query;
        const deleteComment = comments.find(
            (comment) => comment.id === parseInt(commentId)
        );
        const index = comments.findIndex(
            (comment) => comment.id === parseInt(commentId)
        );
        comments.splice(index, 1);
        resp.status(200).json(deleteComment);
    }
}
