'use client'

import ScrollToTop from 'react-scroll-to-top';
import MyIcon from './MyIcon';

const Footer = () => {
    return (
        <div>
             <ScrollToTop smooth top={1000} component={<MyIcon />} />
            <h1>footer</h1>
        </div>
    );
};

export default Footer;