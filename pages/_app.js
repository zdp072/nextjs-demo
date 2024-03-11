//yarn add bootstrap 导入外部库bootstrap样式支持
//yarn add styled-components

//全局样式：在应用的_app.js文件中导入css文件

import "../styles/globals.css";
import "../styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {

    if(Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    }

    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
