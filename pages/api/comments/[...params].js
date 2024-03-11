//守卫路由
//http://localhost:3000/api/comments/one

export default function handler(req, resp) {
    const params = req.query.params;
    resp.status(200).json(params);
}
