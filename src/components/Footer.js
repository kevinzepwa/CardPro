import React from "react";

export default function Footer(props){
    return (
        <footer className={props.darkTheme ? "bg-dark text-center text-white" : "bg-light text-center text-dark"}>
              {/* Grid container */}
            <div className="container p-4 pb-0">
                {/* Section: Social media */}
            <section className="mb-4">
                {/* Reddit */}
                <a
                    className="btn-reddit"
                    href="https://www.reddit.com/"
                    ><i className="fa fa-reddit"></i>
                </a>

                  {/* Facebook */}
                <a
                    className="btn-facebook"
                    href="https://www.facebook.com/"
                    ><i className="fa fa-facebook"></i>
                </a>

              {/* Twitter */}
            <a
                    className="btn-twitter"
                    href="https://www.twitter.com/"
                    ><i className="fa fa-twitter"></i>
                </a>

              {/* Linkedin */}
            <a
                    className="btn-linkedin"
                    href="https://www.linkedin.com/"
                    ><i className="fa fa-linkedin"></i>
                </a>

               {/* Github */}
            <a
                    className="btn-github"
                    href="https://www.github.com/"
                    ><i className="fa fa-github"></i>
                </a>
            {/* YouTube */}
            <a
                    className="btn-youtube"
                    href="https://www.youtube.com/"
                    ><i className="fa fa-youtube"></i>
                </a>

            {/* SnapChat */}
            <a
                    className="btn-snapchat"
                    href="https://www.snapchat.com/"
                    ><i className="fa fa-snapchat"></i>
                </a>
            </section>
            </div>
            {/* Footer text & Copyright */}
            <div className="footer-text">
                ©  2021
                <a className="footer-text-colored" href="https://www.google.com/"> dev_Kev</a>
            </div>
        </footer>
    )
}

