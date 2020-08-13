import React from 'react';
import { Logo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <Logo
                    width="140px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
            © Copyright IPL, BCCI 2020. All Rights Reserved.
            </div>
            
        </footer>
    );
};

export default Footer;