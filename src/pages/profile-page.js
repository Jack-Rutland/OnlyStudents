import UserLayout from '../components/user-layout';
import Image from 'next/image';
import Link from 'next/link';

function Profile({ user_info }) {

    return (
    <div>   
    <UserLayout>
        <div style={hozAlign} className="jumbotrom bg-primary">
            <div style={leftSideStyle}>
                    <Image
                        style = {profileImage}
                        src = {user_info.profile_picture}
                        alt = {user_info.name}
                        width = {400}
                        height = {400}
                    />
                    <h1>{user_info.name}</h1>
            </div>
            <div style={rightSideStyle}>
                <h3>User Bio</h3>
                <p>{user_info.bio}</p>
            </div>
        </div>
        <div style={wumbotron} className="jumbotron my-0 ">
                <h1>Import from Google Classroom</h1>
                <Link href="onlystudents.tech/authorize"><button className="btn btn-success">Connect Google Classroom</button></Link>
        </div>
    </UserLayout>
    </div>
    );
}

export async function getServerSideProps(ctx) {
    const res = await fetch("https://www.google.com");
    //const user_info = await res.json()
        const user_info = {
            profile_picture: "/person-icon.png",
            name: "First Last",
            bio: "This is a test bio!"
        }

    return {
                props : { user_info }
            }
}

const block = {
    display: 'block',
    height: 'auto'
};

const leftSideStyle = {
    fontSize: '150%',
    textAlign: 'center',
    padding: '2%',
    margin: '0',
    width: '35%',
    color: 'black',
    height: 'auto'
};

const profileImage = {
    width: '400px',
    height: '400px',
    objectFit: 'cover',
    border: '5px solid black'
};

const rightSideStyle = {
    fontSize: '150%',
    margin: '0',
    float: 'right',
    width: '60%',
    paddingTop: '0',
    marginTop: '-20%'
};

const hozAlign = {
    width: '100%',
    overflow: 'hidden'
};

const wumbotron = {
    borderRadius : 0
};

export default Profile;
