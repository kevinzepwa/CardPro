import React from "react";

export default function Nav(props){
    return (
    <nav className={props.darkTheme ? "navbar navbar-dark bg-dark navbar-expand-lg fixed-top" : "navbar navbar-light bg-light navbar-expand-lg fixed-top"}>
        
    <a href="https://kevinzepwa.netlify.app/" className="navbar-brand"><img src="logo512.png" alt="My-Logo" className="nav-logo_icon" /></a>

        <h4 className="nav-logo_text">dev.Kev</h4>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icons"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
                <li className="navbar-item">
                    <a href="#!" class="nav-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="https://kevinzepwa.netlify.app/" className="nav-link" target="_blank" rel="noreferrer">About Me</a>
                </li>
            </ul>
            <div 
                className="toggler" 
            >
                <p className="toggler-light">Light</p>
                <div 
                    className={props.darkTheme ? "dark-toggler-slider" : "toggler-slider"}
                    onClick={props.toggleTheme}
                >
                    <div className={props.darkTheme ? "dark-toggler-slider-circle" : "toggler-slider-circle"}></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </div>
    </nav>
    )
}



