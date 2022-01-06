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
        <p className="contact-invite">Click to visit, and if you like any you can reach out to me</p>
            </div>

            <div>
          <section className="main-projects-section">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://vbobby.netlify.app/" target="_blank" rel="noreferrer"><img
                    src="https://vbobby.netlify.app/images/profilepic.jpg" alt="vbobby"
                    className="w-100"
                  /></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://mama-garage.netlify.app" target="_blank" rel="noreferrer"><img
                    src="https://mama-garage.netlify.app/assets/img/about_img.png" alt="mama garage"
                    className="w-100"
                  /></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://pa-pet.netlify.app" target="_blank" rel="noreferrer"><img
                    src="https://pa-pet.netlify.app/static/media/product-08%20(2).2daaedb0.jpg" alt="pa pet"
                    className="w-100"
                  /></a>
                  </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://kevinzepwa.netlify.app/" target="_blank" rel="noreferrer"><img
                    src="https://kevinzepwa.netlify.app/images/profile-3.jpeg" alt="portfolio"
                    className="w-100"
                  /></a>
                  </div>
              </div>
              
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://card-pro.netlify.app/"><img
                    src="https://card-pro.netlify.app/logo512.png" alt="card pro"
                    className="w-100"
                  /></a>
                  </div>
              </div>

              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <a href="https://yua-app.netlify.app/" target="_blank" rel="noreferrer"><img
                    src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="your website here"
                    className="w-100"
                  /></a>
                  </div>
              </div>
            </div>
          </section>
        </div>
        </div>
      </main>
    )
}



