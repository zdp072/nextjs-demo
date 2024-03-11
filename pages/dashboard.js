
//客户端数据获取，根据加载状态渲染不同的内容

//useState和useEffect是2个钩子函数
//
import { useState, useEffect } from "react";

function Dashboard() {

    //使用useState创建一个名为isLoading的状态变量，并初始化为true。
    //同时创建一个名为setIsLoading的函数，用于更新isLoading的状态。
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    //useEffect用于在组件挂载时获取数据
    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false);
        }
        fetchDashboardData();
    }, []);

    if (isLoading) {
        return <h2>加载中</h2>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    );
}

export default Dashboard;
