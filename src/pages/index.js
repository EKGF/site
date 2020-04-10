import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
// import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const IndexPage = () => {

  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch(id) {
      case "features":
        setFeatures(!features)
        break;
      case "info":
        setInfo(!info)
        break
      default:
        break
    }
  }

  return(
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>Join the EKG Foundation at the Columbia Knowledge Graph Conference May 6-7, 2020</h1>
          <h5>
            Blah
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List
        component="nav"
        className={classes.root}
      >
      <ListItem id="features" button onClick={() => handleClick("features")}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Features" />
        {features ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!features} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink className={classes.nested} href="/ontology-publishing">
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Ontology Publishing" />
          </ListItemLink>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Github Repository" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Measurement Criteria" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("info")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
        {info ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!info} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Maturity Criteria" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Business Case" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Building Community" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </Layout>
  )
}

export default IndexPage