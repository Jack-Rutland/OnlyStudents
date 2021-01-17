import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/"><a className="navbar-brand">OnlyStudents</a></Link>
        <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link" href="#">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/register_educator"><a className="nav-link" href="#">For Educators</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/register_student"><a className="nav-link" href="#">For Students</a></Link>
                </li>
            </ul>
            <Link href="/login"><button className="btn-primary btn mr-3">Log In</button></Link>
            <button className="btn-success btn mr-5">Register</button>

        </div>
    </nav>
);

export default Navbar;