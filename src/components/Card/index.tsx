import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Card as MUICard,
  Theme,
  Typography,
  createStyles,
  makeStyles
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Pet } from 'types'

export type CardProps = {
  pet: Pet
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 250
    },
    media: {
      height: 250,
      width: 250
    },
    content: {
      marginBottom: theme.spacing(0)
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
)

export default function Card({ pet }: CardProps) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <MUICard className={classes.root}>
      <CardHeader
        title={`Nome: ${pet.name}`}
        subheader={`Idade: ${pet.age}`}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia className={classes.media} image={pet.image} title={pet.name} />
      <CardContent className={classes.content}>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Expanda para ver mais detalhes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Mandar mensagem no Whatsapp">
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body1" color="textSecondary">
            Tipo: {pet.type}
          </Typography>
          <Typography paragraph variant="body1" color="textSecondary">
            Raça: {pet.breed}
          </Typography>
          <Typography paragraph variant="body1" color="textSecondary">
            Sexo: {pet.sex}
          </Typography>
          <Typography paragraph variant="body1" color="textSecondary">
            Descrição: {pet.description}
          </Typography>
        </CardContent>
      </Collapse>
    </MUICard>
  )
}
