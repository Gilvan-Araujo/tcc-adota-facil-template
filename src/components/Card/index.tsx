import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Card as MUICard,
  Menu,
  MenuItem,
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
import NumberFormat from 'react-number-format'
import { Pet } from 'types'

import Slider from '@components/Slider'

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

const ITEM_HEIGHT = 48

export default function Card({ pet }: CardProps) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  // Menu-exclusive settings
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseWhatsapp = () => {
    window.open(pet.phoneContact, '_blank')
    setAnchorEl(null)
  }

  const handleCloseCollapse = () => {
    setExpanded(!expanded)
    setAnchorEl(null)
  }

  return (
    <MUICard className={classes.root}>
      <CardHeader
        title={`Nome: ${pet.name}`}
        subheader={`Idade: ${pet.age}`}
        action={
          <IconButton
            aria-label="mais configurações"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <MenuItem onClick={handleCloseWhatsapp}>Falar no whatsapp</MenuItem>
        <MenuItem onClick={handleCloseCollapse}>
          {expanded ? 'Menos' : 'Mais'} detalhes
        </MenuItem>
      </Menu>
      <CardMedia className={classes.media} image={pet.image} title={pet.name} />
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" component="p">
          Expanda para ver mais detalhes / Abra o menu para mais opções
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="mandar mensagem no whatsapp"
          disableRipple
          disableTouchRipple
          disableFocusRipple
        >
          <WhatsAppIcon />
        </IconButton>
        <Slider
          leftCommitted
          leftFunction={() => {
            window.open(pet.phoneContact, '_blank')
          }}
          middleFunction={() => {
            setExpanded(false)
          }}
          rightCommitted={false}
          rightFunction={() => {
            setExpanded(true)
          }}
        />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          aria-expanded={expanded}
          aria-label="mostrar mais"
          disableRipple
          disableTouchRipple
          disableFocusRipple
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
          <Typography paragraph variant="body1" color="textSecondary">
            Contato:{' '}
            <NumberFormat
              value={pet.phone}
              displayType="text"
              format="(##) # ####-####"
            />
          </Typography>
        </CardContent>
      </Collapse>
    </MUICard>
  )
}
