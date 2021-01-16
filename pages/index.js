import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image'

const Index = () => (
    <Layout>
        <div style={jumbotronNoMargin} className="jumbotron mt-5 jumbotronNoMargin">
            <h1 className="display-3">Welcome to OnlyStudents</h1>
            <p className="lead">Here, you can pay money for services</p>
            <h4 className="my-4">
                <p>To get started, please select one of the following options :</p>
            </h4>
            <div style={forButtonWrapper}>
                <Link href="/login"><button style={homepageForStyle} className="btn btn-danger my-5"><h1>For Educators</h1></button></Link>
                <Link href="/login"><button style={homepageForStyle} className="btn btn-success my-5"><h1>For Students</h1></button></Link>
            </div>
        </div>
        <div className="jumbotron bg-light jumbotronNoMargin" >
            <Image
                src="/images/classroom-image.jpg"
                alt="Picture of a classroom"
                width = {500}
                height = {500}
            />
        </div>
    </Layout>
);

const forButtonWrapper = {
    textAlign: 'center'
};

const homepageForStyle = {
    textAlign: 'center',
    fontSize: '250%',
    marginRight: '5%',
    padding: '2%',
    paddingRight: '10%',
    paddingLeft: '10%'
};

const jumbotronNoMargin = {
    margin: '0'
};

export default Index;