import React from "react";


export default function Main(props){
    return (
        <main className={props.darkTheme ? "dark" : ""}>
            <div className="main-top-div">
                <h1 className="main--title">This is Me in a Nutshell</h1>
                <ul className="main--facts">
                    <li>I am Kevin, a full stack software developer</li>
                    <li>I connect with the world through lines of code</li>
                    <li>I am an apt student</li>
                    <li>I am versatile</li>
                    <li>I am open to new ideas and opportunities</li>
                </ul>
            </div>
            <div className="main-bottom-div">
                {/* Grid container */}
                <div>
        <h3 className="projects-invite-title">Here are some of my recent exciting Projects</h3>
        <p className="contact-invite">Click to visit, and if you like any you can reach out to me <a href="#">here</a></p>
            </div>

            <div>
                <section className="main-projects-section">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://pa-pet.netlify.app/static/media/product-08%20(2).2daaedb0.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://vbobby.netlify.app/images/profilepic.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mama-garage.netlify.app/assets/img/about_img.png"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/fluid/city/114.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/fluid/city/116.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/fluid/city/117.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
              </div>
        

            </div>
          </section>
        </div>
        </div>
                        
        {/* </main> */}
        </main>
    )
}



