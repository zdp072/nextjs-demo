//组件级样式，nextjs支持css modules，它使用name.module.css这种命名惯例

import styles from "../styles/About.module.css";
import Footer from "../components/Footer";

function About() {
    //return <h1 className="btn btn-primary">关于</h1>;

    return <div className={styles.highlight}>关于页面</div>;
}

export default About;

//About页面自定义页面，只需要页脚，不要页眉
About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    );
};
