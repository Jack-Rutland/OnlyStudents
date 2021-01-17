import Link from 'next/link';

const Sidebar = () => (
    <div style = {sidebarStyle} className="bg-info">
        <ul>
            <li style={liStyle}>
                <Link href="/profile-page"><a>
                Profile
                </a></Link>
            </li>
            <li style={liStyle}>
                <Link href="/profile-page"><a>
                Classes
                </a></Link>
            </li>
            <li style={liStyle}>
                <Link href="/profile-page"><a>
                Feed
                </a></Link>
            </li>
            <li style={liStyle}>
                <Link href="/profile-page"><a>
                Calander
                </a></Link>
            </li>
        </ul>
    </div>
);


const sidebarStyle = {
        height: '200%',
        width: '10%',
        float: 'left',
        zIndex: '1',
        top: '0',
        left: '0',
        backgroundColor: '#111',
        overflow: 'hidden',
        paddingTop: '20px',
        marginLeft: '0'

}

const liStyle = {
    paddingTop: '25px',
    paddingLeft: '-50px',
    textDecoration: 'none',
    fontSize: '25px',
    color: '#818181',
    display: 'block'
};
export default Sidebar