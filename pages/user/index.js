
//获取用户列表
//http://localhost:3000/user

import User from '../../components/user'

function UserList({ users }) {
    return (
        <div> 
            <h1>用户列表</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList

//getStaticProps静态站点生成，只在服务器端运行
//getStaticProps可通过fs模块访问文件系统，或者查询数据库
//getStaticProps只适用于预渲染，不能用于客户端数据获取
//getStaticProps必须返回一个对象，该对象必须包括一个props键，并且它的值也是对象
//getStaticProps是在build构建时运行的
export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json();
    return {
        props: {
            users: data
        }
    }
}