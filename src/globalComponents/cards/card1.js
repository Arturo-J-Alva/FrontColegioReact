import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import moment from 'moment'
import 'moment/locale/es'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({creado,id,imagen,nivel,profesores,nombre,IrAlModulo}) {
  const classes = useStyles();

  const TimeToDate = (x) => {
    const y = new Date(Number(x))
    return moment(y).format('LL')
}

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={imagen}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Profesores: {profesores.map(prof =>( prof.nombre + ' ' +prof.apellido + ' - ')).slice(0,-2)}
            {
                profesores.map((prof,i) => {
                    if(i!==(profesores.length-1)) return prof.nombre + ' ' +prof.apellido + ' - '
                    else return prof.nombre + ' ' +prof.apellido
                })
            }
            <br/>
            Nivel: {nivel.nombre} <br/>
            Creado: {TimeToDate(creado)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={()=>IrAlModulo(id)}>
          Ver módulos
        </Button>
      </CardActions>
    </Card>
  );
}