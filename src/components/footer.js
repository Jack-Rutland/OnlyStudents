import Link from 'next/link';

const Footer = () => (
<div className="text-white bg-dark">
    <Link href="#"><p style={footerP}>About Us</p></Link>
    <p style={footerP}>|</p>
    <Link href="#"><p style={footerP}>Contact Us</p></Link>
</div>
);


const footerP = {
    display: 'inline-block',
    marginRight: '1%',
    marginLeft: '1%'
};
export default Footer;