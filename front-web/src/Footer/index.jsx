import './style.css';

import { ReactComponent as LinknIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as GithubIcon} from './githuborange.svg';
import React from 'react';
function Footer(){

    return(
        <footer className="main-footer">
            Desenvolvido por Michel Dev
            <div>
                <a href="https://github.com/michelMT007" target="_new">
                <GithubIcon></GithubIcon>  
                    
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