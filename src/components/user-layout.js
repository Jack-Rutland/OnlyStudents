import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const UserLayout = (props) => (
    <div>
        <Head>
            <title>OnlyStudents</title>
            <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/slate/bootstrap.min.css"/>
        </Head>
        <div style={upperPage} className="bg-info">
        <Sidebar/>
        <div style={pageDiv}>
        <Navbar/>
        {props.children}
        </div>
        </div>
        <Footer/>
    </div>
);

const pageDiv = {
    width: '90%',
    float: 'right',
    height: 'auto'
};

const upperPage = {
    width: '100%',
    height:  '200%',
    overflow: 'hidden'
};

export default UserLayout;