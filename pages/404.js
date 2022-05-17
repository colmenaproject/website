import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import ErrorPage from "../components/404/ErrorPage";
import ToTop from "../components/Sections/ToTop";

const Custom404 = () => (

    <Layout 
        pageTitle="Colmena - Ooops..." 
        colorSchema="/assets/colors/green-colmena.css"
    >
        <Loader />
        <ErrorPage />
        <ToTop />

    </Layout>

)

export default Custom404;