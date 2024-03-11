//创建第一个API localhost:3000/api
//需要在api目录下创建

import { comments } from "../../../data/comments";

export default function handler(req, resp) {
    if (req.method === "GET") {
        resp.status(200).json(comments);
    }

    if (req.method === "POST") {
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment,
        };
        comments.push(newComment);
        resp.status(201).json(newComment);
    }
}
