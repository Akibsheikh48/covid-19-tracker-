import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer">
            <h3>Copyright © 2020 AKIB, INC. </h3>
            <a href='https://instagram.com/akibsheikh1?igshid=1n35acwkvzx00' className="insta__icon">
                <InstagramIcon />
            </a>
            <a href='https://twitter.com/akibsheikh48?s=03' className="twitter__icon">
                <strong><TwitterIcon /></strong>
            </a>
            <a href='https://github.com/Akibsheikh48' className="git__icon">
                <GitHubIcon />
            </a>
            
        </div>
    )
}

export default Footer
