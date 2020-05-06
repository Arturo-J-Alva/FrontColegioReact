import React from 'react'
import {NavLink} from "react-router-dom"

const index = () => {
    return (
        <div className="footer">
        <div className="container">
            <div uk-grid=''>
                <div className="uk-width-1-3@m">
                    <NavLink to="/home.html" className="uk-logo">
                        {/* <!-- logo icon --> */}
                        <i className="uil-graduation-hat"> </i>
                        UDAXEN
                    </NavLink>
                    <p className="footer-description"> UDAXEN es tu universidad virtual donde podrás 
                    formarte en Network Marketing ¡Sueña y emprende!</p>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                    <div className="footer-links pl-lg-8">
                        <h5>Explorar </h5>
                        <ul>
                            <li><NavLink to="/#"> Cursos Basicos </NavLink></li>
                            <li><NavLink to="/#"> Cursos Intermedios </NavLink></li>
                            <li><NavLink to="/#"> Afiliate </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                    <div className="footer-links pl-lg-8">
                        <h5> Cuenta </h5>
                        <ul>
                            <li><NavLink to="/#"> Perfil </NavLink></li>
                            <li><NavLink to="/#"> Configuraciones </NavLink></li>
                            <li><NavLink to="/#"> Proyectos </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="uk-width-expand@s uk-width-1-2">
                    <div className="footer-links pl-lg-8">
                        <h5> Recursos</h5>
                        <ul>
                            <li><NavLink to="/#"> Contactos </NavLink></li>
                            <li><NavLink to="/#"> Politicas de Privacidad </NavLink></li>
                            <li><NavLink to="/#."> Terminos de Uso </NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="uk-grid-collapse" uk-grid=''>
                <div className="uk-width-expand@s uk-first-column">
                    <p>© 2020 <strong>Braindtic S.A.C.</strong>. All Rights Reserved. </p>
                </div>
                <div className="uk-width-auto@s">
                    <nav className="footer-nav-icon">
                        <ul>
                            <li><NavLink to="/#"><i className="icon-brand-facebook"></i></NavLink></li>
                            <li><NavLink to="/#"><i className="icon-brand-dribbble"></i></NavLink></li>
                            <li><NavLink to="/#"><i className="icon-brand-youtube"></i></NavLink></li>
                            <li><NavLink to="/#"><i className="icon-brand-twitter"></i></NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    )
}

export default index
