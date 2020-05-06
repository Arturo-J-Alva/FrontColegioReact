import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useMutation, gql } from '@apollo/client'
import Swal from 'sweetalert2'
import { useDispatch/* ,useSelector */ } from "react-redux";
import { SaveLogin, SaveTipo } from "../../actions/loginActions";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AUTENTICAR_ALUMNO = gql`
    mutation autenticarAlumno($input:AutenticarInput!){
  autenticarAlumno(input:$input){
    token
    usuario{
      nombre
      apellido
      email
      tipo
      id
      nivel{
        id
        nombre
        cronograma
      }
    }
  }
}
`

const AUTENTICAR_PROFESOR = gql`
    mutation autenticarProfesor($input:AutenticarInput!){
  autenticarProfesor(input:$input){
    token
  }
}
`
const AUTENTICAR_TUTOR = gql`
    mutation autenticarTutor($input:AutenticarInput!){
  autenticarTutor(input:$input){
    token
  }
}
`

const Login = (props) => {
    const classes = useStyles();
    const [SelectAlumno, setSelectAlumno] = useState('btn-danger')
    const [SelectProf, setSelectProf] = useState('btn-outline-danger')
    const [SelectTutor, setSelectTutor] = useState('btn-outline-danger')
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    //const [mensaje, setmensaje] = useState(null)
    const [autenticarAlumno] = useMutation(AUTENTICAR_ALUMNO)
    const [autenticarProfesor] = useMutation(AUTENTICAR_PROFESOR)
    const [autenticarTutor] = useMutation(AUTENTICAR_TUTOR)
    const dispatch = useDispatch();

    const ObtenerToken = async (e) => {
        e.preventDefault()
        try{
            if(SelectAlumno==='btn-danger'){
                const { data } = await autenticarAlumno({
                    variables: {
                        input: {
                           password, email
                        }
                    }
                })
                console.log(data.autenticarAlumno)
                const {autenticarAlumno:{usuario:{nombre,apellido,tipo,id,nivel},usuario,token} } = data
                localStorage.setItem('NOMBRE', nombre)
                localStorage.setItem('APELLIDO', apellido)
                localStorage.setItem('EMAIL', usuario.email)
                localStorage.setItem('TIPO', tipo)
                localStorage.setItem('IDUSER', id)
                localStorage.setItem('NIVELID', nivel.id)
                localStorage.setItem('NIVEL', nivel.nombre)
                localStorage.setItem('TOKENJWT',token)
                console.log('nivel:',nivel)
                dispatch(SaveLogin(true))
                dispatch(SaveTipo(tipo))
                props.history.push('/cursosAlumnos')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Bienvenido ${nombre} ${apellido}`,
                showConfirmButton: false,
                timer: 2500
              })
            }
            
            if(SelectTutor==='btn-danger'){
                const { data } = await autenticarTutor({
                    variables: {
                        input: {
                           password, email
                        }
                    }
                })
                console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tutor logeado',
                showConfirmButton: false,
                timer: 1500
              })
            }

            if(SelectProf==='btn-danger'){
                const { data } = await autenticarProfesor({
                    variables: {
                        input: {
                           password, email
                        }
                    }
                })
                console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profesor logeado',
                showConfirmButton: false,
                timer: 1500
              })
            }
        }catch(e){
            console.log(e)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: e.message.replace('GraphQL error: ', ''),
                showConfirmButton: false,
                timer: 2500
              })
        }
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Elige el tipo de usuario y logéate
                    </Typography> 
                    <div>
                        <button className={'my-3 mx-3 btn ' + SelectAlumno}
                            onClick={() => {
                                setSelectAlumno('btn-danger')
                                setSelectProf('btn-outline-danger')
                                setSelectTutor('btn-outline-danger')
                            }} > Alumno </button>
                        <button className={'my-3 mx-3 btn ' + SelectProf}
                            onClick={() => {
                                setSelectAlumno('btn-outline-danger')
                                setSelectProf('btn-danger')
                                setSelectTutor('btn-outline-danger')
                            }}> Profesor </button>
                        <button className={'my-3 mx-3 btn ' + SelectTutor}
                            onClick={() => {
                                setSelectAlumno('btn-outline-danger')
                                setSelectProf('btn-outline-danger')
                                setSelectTutor('btn-danger')
                            }}> Tutor </button>
                    </div>
                    {/* <Typography component="h1" variant="h5">
                        {SelectAlumno === 'btn-danger' && 'ALUMNO'}
                        {SelectProf === 'btn-danger' && 'PROFESOR'}
                        {SelectTutor === 'btn-danger' && 'TUTOR'}
                    </Typography> */}
                    <form className={classes.form} onSubmit={ObtenerToken}>
                        <TextField
                            type='email'
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Ingrese su correo"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
