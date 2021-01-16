import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>OnlyStudents</title>
            <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        {props.children}
        <Footer/>
    </div>
    
);



export default Layout;