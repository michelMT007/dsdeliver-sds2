import './style.css';
import { ReactComponent as YouTubeIcon} from './youtube.svg';
import { ReactComponent as LinknIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import React from 'react';
function Footer(){

    return(
        <footer className="main-footer">
            Desenvolvido por Michel Dev
            <div>
                <a href="https://www.youtube.com" target="_new">
                    <YouTubeIcon></YouTubeIcon>
                </a>

                <a href="https://www.linkedin.com/" target="_new">
                    <LinknIcon></LinknIcon>
                </a>

                <a href="https://www.instagram.com" target="_new">
                    <InstagramIcon></InstagramIcon>
                </a>
            </div>
        </footer>    

    )
}


export default Footer