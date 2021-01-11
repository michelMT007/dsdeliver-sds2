import './style.css';
import { ReactComponent as YouTubeIcon} from './youtube.svg';
import { ReactComponent as LinknIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import React from 'react';
function Footer(){

    return(
        <footer className="main-footer">
            App desenvolvido duarante a 2 ed. do evento Semana DevSuperior
            <div>
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon></YouTubeIcon>
                </a>

                <a href="https://www.linkedin.com/school/devsuperior//" target="_new">
                    <LinknIcon></LinknIcon>
                </a>

                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon></InstagramIcon>
                </a>
            </div>
        </footer>    

    )
}


export default Footer