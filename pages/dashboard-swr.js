//使用swr实现客户端数据的获取
//yarn add swr

import useSWR from "swr";

//定义异步获取数据的函数fetcher
const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
};

function DashboardSWR() {
    const { data, error } = useSWR("dashboard", fetcher);

    if (error) return "出错了";
    if (!data) return "加载中";

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    );
}

export default DashboardSWR;
