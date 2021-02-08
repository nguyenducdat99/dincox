// import lstyle library
import './Copyright.scss';

// code function here
function Copyright(){
    return(
        <div className="copyright">
            <div className="wrapper">
                <div className="copyright-grid">
                    <div> </div>
                    <div className="copyright__social-network">
                        <a href="">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="copyright__author">
                        <p>
                            COPYRIGHTS © 2021 BY DINCOX. POWERED BY DINCOX
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Copyright;