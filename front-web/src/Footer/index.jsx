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
                <a>
                    <YouTubeIcon></YouTubeIcon>
                </a>

                <a>
                    <LinknIcon></LinknIcon>
                </a>

                <a >
                    <InstagramIcon></InstagramIcon>
                </a>
            </div>
        </footer>    

    )
}


export default Footer