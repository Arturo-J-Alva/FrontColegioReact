import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

//importar componentes
import ScrollToTop from './globalComponents/ScrollToTop'
import Login from './pages/login'
//import Home from './pages/home'
import Error404 from './pages/404'

import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions'
import CursosAlumnos from './pages/cursosAlumnos'
import Loading from './globalComponents/loading'
import Header from './globalComponents/Header'
import ModulosAlumnos from './pages/modulosAlumnos'
import LeccionesAlumnos from './pages/leccionesAlumnos'

//import Global from './services/Global'
const { SaveLogin } = loginActions

class Routes extends Component {

    async UNSAFE_componentWillMount() {
        if (localStorage.getItem('TOKENJWT')) {
            this.props.SaveLogin(true)
        } else {
            this.props.SaveLogin(false)
        }

    }

    RoutesLogic = () => {
        const LoginState = this.props.loginReducer.Login
        const UserType = this.props.loginReducer.Tipo
        console.log('LoginState:', LoginState)
        console.log('UserType:', UserType)
        if (LoginState === true) {
            switch (UserType) {
                case 'alumno':
                    return <Switch>
                        <Route exact path="/" render={() => <Redirect to='/cursosAlumnos' />} />
                        <Route exact path="/cursosAlumnos" component={CursosAlumnos} />
                        <Route exact path="/login" render={() => <Redirect to='/cursoAlumnos' />} />
                        <Route exact path="/moduloAlumnos/:idcurso" component={ModulosAlumnos} />
                        <Route exact path="/leccionAlumnos/:idmodulo" component={LeccionesAlumnos} />
                        <Route exact path="/*" component={Error404} />
                    </Switch>
                case 'profesor':
                    return <React.Fragment>

                    </React.Fragment>
                case 'tutor':
                    return <React.Fragment>

                    </React.Fragment>
                default:
                    break;
            }
        } else if (LoginState === false) {
            return <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/*" render={() => <Redirect to='/login' />} />
            </Switch>
        } else {
            const JWT = localStorage.getItem("TOKENJWT")
            const TIPO = localStorage.getItem("TIPO")
            if (JWT === null || JWT === undefined || TIPO === null || TIPO === undefined) {
                this.props.SaveLogin(false)
            } else {
                this.props.SaveLogin(true)
            }
            return (
                <Switch><Loading /></Switch>
            )
        }
    }

    render() {
        //console.log('this.props',this.props)
        const LoginState = this.props.loginReducer.Login
        //console.log(LoginState)
        return (
            <BrowserRouter>
                {LoginState && <Header />}
                <ScrollToTop />
                {this.RoutesLogic()}
            </BrowserRouter>
        )
    }
}

const mapStateToProps = ({ auxReducer, loginReducer, dataUserReducer }) => {
    return { auxReducer, loginReducer, dataUserReducer }
}

const mapDispatchToProps = {
    SaveLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
