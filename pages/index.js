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
                <Link href="/login"><button style={homepageForStyle} className="btn btn-danger my-5">
                        <h1>
                        For Educators
                        </h1>
                        <Image
                            style={buttonPNG}
                            src="/schoolhouse-icon.png"
                            alt=""
                            width = {50}
                            height = {50}
                        />
                    </button></Link>
                    <Link href="/register_student"><button style={homepageForStyle} className="btn btn-success my-5">
                        <h1>
                        For Students
                        </h1>
                        <Image
                            style={buttonPNG}
                            src="/person-icon.png"
                            alt=""
                            width = {50}
                            height = {50}
                        />
                    </button></Link>
            </div>
        </div>
        <div style={autoHeight} className="jumbotron bg-light jumbotronNoMargin" >
            <div style={rightSideText}>
                <Image
                src="/classroom-image.jpg"
                alt="Picture of a classroom"
                width = {800}
                height = {500}
            /></div>
            <div style={rightSideText}>
            <h1>Same classroom...<br/><i className="display-1">All online!</i></h1><br/><br/>
            <p style={largerText}>
                Our inivative technology enables Universities and Mentors
                to create and publish classes with assignments, announcements,
                and many more unique types of posts.<br/>
                Additionally, our service allows students to subscribe to class feeds,
                as well as import their existing classes from other sites (such as
                Google Classroom!).

            </p>
            </div>
        </div>
    </Layout>
    
);

const forButtonWrapper = {
    textAlign: 'center',
    overflow: 'hidden'
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

const rightSideText = {
    color: '#000000',
    float: 'left',
    textAlign: 'left',
    display: 'inline-block',
    width: 'auto',
    marginRight: '5%',
    width : '40%'
};

const autoHeight = {
    overflow: 'hidden'
};

const largerText = {
    fontSize: '150%'
};

const buttonPNG = {
    backgroundColor :'transparent',
    display: 'inline-block',
    background: 'none',
    float: 'right'
};



export default Index;