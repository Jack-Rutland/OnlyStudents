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
        <div>
        <Sidebar/>
        <div style={pageDiv}>
        <Navbar/>
        {props.children}
        </div>
        <Footer style={{zIndex:2}}/>
        </div>
    </div>
);

const pageDiv = {
    width: '88%',
    marginLeft: '160px',
    float: 'right'
};

export default UserLayout;