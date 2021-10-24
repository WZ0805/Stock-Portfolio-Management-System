import {  Button, Container, IconButton, makeStyles, Paper, Tooltip, Typography } from '@material-ui/core'
import { useState } from 'react';
import SearchBar from './SearchBar';
import Performance from './Performance';
import {gainers,losers} from './Fakedata';

import ListRoundedIcon from '@material-ui/icons/ListRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container:{
    paddingTop:theme.spacing(12),
    // borderRight:'1px solid #ece7e7',
    height:'100vh',
  },
  search:{
    position:'relative',
    height:'8%'
  },
  headText: {
    fontFamily: "Bungee",
    fontSize: theme.spacing(4),
    color: "#FF954A",
    marginLeft: theme.spacing(1),
  },
  text: {
    fontFamily: "Bungee",
    marginLeft: theme.spacing(2),
    // color:"#555"
  },
  portList:{
    display:'flex',
    marginBottom:theme.spacing(5),

    // justifyContent:'space-between',
    // borderBottom:'6px solid #555',

  },
  portButton:{
    //up right down left
    padding:'0px 5px 0px 5px',
    width:'fit-content',
    borderBottom:'3px solid #555',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    // borderBottom:'6px solid #555',
    borderRadius:'4px',
    marginLeft: theme.spacing(2),
    '&:hover': {
      boxShadow: theme.shadows[3],
      cursor: 'pointer'
    },

  },
  portText:{
    fontFamily: "Bungee",
    marginLeft: theme.spacing(0.5),
    fontSize:theme.spacing(1),
  },

  icon:{
    backgroundColor:'#eef1f2',
    padding:'0 3px 0px 0px',
    borderRadius:'4px',
  },
  addButton:{
    marginLeft: 'auto',

  },
  portContent:{
    padding: theme.spacing(2),
    width:'100%'
  },
  portContentInfo:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding: theme.spacing(2),
  }
}))

const FeedHomepage =({})=>{
  const classes = useStyles();
  return (
    <>
    <Container className={classes.container}>
      
      <div className={classes.search} >
        <SearchBar data={gainers} />
      </div>

      <Performance data={gainers} gainers />
      <Performance data={losers}  /> 

    </Container>
    </>
  )
}

const FeedProtofolios = () => {
  const classes = useStyles();
  const [portNum, setPortNum] = useState(1);
  let isEmpty = true;
  return (
    <>
    <Container className={classes.container}>
      <Container >
        <Typography className={classes.headText} gutterBottom>Total Gain/Loss</Typography>
        <Typography variant='h5' className={classes.text} gutterBottom>+$63.2</Typography>
      </Container>

      <Container >
        <Typography className={classes.headText} gutterBottom>My Portfolios</Typography>

        <div className={classes.portList}>
          <Paper className={classes.portButton} variant='outlined'>
        
            <ListRoundedIcon className={classes.icon} fontSize='small' />
            <Typography className={classes.portText}>Portfolio1</Typography>

          </Paper>

          <Paper className={classes.portButton} variant='outlined'>
          
            <ListRoundedIcon className={classes.icon} fontSize='small' />
            <Typography className={classes.portText}>Portfolio2</Typography>

          </Paper>
          <Paper className={classes.portButton} variant='outlined'>
            
            <ListRoundedIcon className={classes.icon} fontSize='small' />
            <Typography className={classes.portText}>Portfolio3</Typography>

          </Paper>



           <Button className={classes.addButton} color='primary' >
              <AddRoundedIcon fontSize='small'/>
              <Typography className={classes.portText}>New</Typography>
          </Button>

      </div>


      <Paper variant='outlined' className={classes.portContent}>
        <Typography className="portContentHeader" variant='subtitle2'>
          Portfolio1
          <Tooltip title='Rename'>
              <CreateOutlinedIcon className={classes.addButton} />
          </Tooltip>
          <Tooltip title='Delete'>
              <DeleteOutlinedIcon className={classes.addButton} />
          </Tooltip>

          <Tooltip title='Add To Portifolio'>
              <AutorenewIcon className={classes.addButton} />
          </Tooltip>


        </Typography>
        <Container className={classes.portContentInfo} >
          <img src='images/empty.png' alt='' style={{width:'27%'}}/>
          <Typography variant='subtitle2'>Nothing in this portfolio</Typography>
          <Button  color='primary' >
              <AddRoundedIcon fontSize='small'/>
              <Typography className={classes.portText}>Add investments</Typography>
          </Button>
        </Container>
      </Paper>








        {/* <img src='images/empty.png' alt='' /> */}



      </Container>

    </Container>
    </>
  )

}
const FeedStock = () => {
  const classes = useStyles();
  return (
    <>
    <Container className={classes.container}>
      FeedStock
    </Container>
    </>
  )

}


export default function Feed({stock,portfolio,homepage}) {
  return (
    <>
    {stock ? <FeedStock /> :'' }
    {portfolio ? <FeedProtofolios /> :'' }
    {homepage ? <FeedHomepage />:''}
    </>
    
  )
}

