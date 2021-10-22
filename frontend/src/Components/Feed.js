import {  Container, makeStyles, Paper, Typography } from '@material-ui/core'
import { useState } from 'react';
import SearchBar from './SearchBar';
import Performance from './Performance';

const createData = (symbol, company, price, change, changePercentage) => {
  return { symbol, company, price, change, changePercentage };
}
const gainers = [
  createData('A26','Sinarmas Land Ltd', '$0.27', '5.88', '5.88%'),
  createData('UD3','Japfa Ltd', '$13.47', '+2.12', '4.68%'),
  createData('A27','Sinarmas Land Ltd', '$0.27', '5.88', '5.88%'),
  createData('UD2','Japfa Ltd', '$13.47', '+2.12', '4.68%'),
  createData('C09','City Developments Limited Fully Paid Ord. Shrs', '$9.72', '+5.88', '4.26%'),
];
const losers = [
  createData('NS8U','Hutchison Port Hldg Trust', '$0.27', '-8.43', '3.13%'),
  createData('J91U','ESR-REIT', '$13.47', '-2.12', '2.68%'),
  createData('NS9U','Hutchison Port Hldg Trust', '$0.27', '-8.43', '3.13%'),
  createData('J92U','ESR-REIT', '$13.47', '-2.12', '2.68%'),
  createData('E5H','Golden Agri-Resources Ltd', '$9.72', '-0.87', '1.89%'),
];

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
    // fontSize: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
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
  return (
    <>
    <Container className={classes.container}>
      <Container className={classes.papers}>
        <Typography className={classes.headText} gutterBottom>Total Gain/Loss</Typography>
        <Typography variant='h5' className={classes.text} gutterBottom>+$63.2</Typography>
      </Container>

      <Container className={classes.papers}>
        <Typography className={classes.headText} gutterBottom>My Portfolios</Typography>
        <Typography variant='h5' className={classes.text} gutterBottom>+$63.2</Typography>
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

