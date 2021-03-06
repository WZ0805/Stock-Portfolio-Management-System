import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  table: {
    // marginTop:  '0.5rem',
    // width:"100%"
  },
  text: {
    fontFamily: 'Bungee',
    fontSize: '1.2rem',
    color: '#FF954A',
    marginTop: '1rem',
    // marginLeft: theme.spacing(1),
  },
  color: {
    backgroundColor: (props) => (props.gainers ? '#e1f2e7' : '#fee5e3'),
    padding: '3px 10px',
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignContent: 'center',
    color: (props) => (props.gainers ? 'green' : '#a50e0e'),
    maxWidth: 'fit-content',
  },
  rows: {
    '&:hover': {
      backgroundColor: '#eef2f2',
      transition: 'all 0.3s ease-out',
      cursor: 'pointer',
    },
  },
  positive:{
    color:'green'
  },
  negative: {
    color:'#a50e0e'
  }
}))

export default function Performance({ data, gainers }) {
  const classes = useStyles({ gainers })
  let history = useHistory()
  const handleClick = (event) => {
    let id = event.currentTarget.id
    let name = event.currentTarget.getAttribute('name')
    window.stockName = name
    history.push(`/stock/${id}`)
  }
  return (
    <React.Fragment>
      {!data && <></>}
      {data && (
        <TableContainer className={classes.table}>
          <div className={classes.text}>{gainers ? 'Gainers' : 'Losers'}</div>
          <Table className={classes.table} size='small'>
            <TableBody>
              {data.map((stock) => (
                <TableRow
                  key={stock.symbol}
                  className={classes.rows}
                  id={stock.stockId}
                  name={stock.company}
                  onClick={handleClick}
                >
                  <TableCell style={{ width: '60%' }}>
                    <div>
                      <Typography variant='subtitle2'>
                        {stock.symbol}
                      </Typography>
                      <Typography variant='subtitle2'>
                        {stock.company}
                      </Typography>
                      {/* <Button>{stock.symbol}</Button>
                    {stock.company} */}
                    </div>
                  </TableCell>
                  <TableCell align='left'>{`$${stock.price}`}</TableCell>
                  {gainers ? (
                    <TableCell align='right' className={classes.positive}>{`+${stock.change}`}</TableCell>
                  ) : (
                    <TableCell align='right' className={classes.negative}>{`${stock.change}`}</TableCell>
                  )}

                  <TableCell align='right'>
                    <div className={classes.color}>
                      {gainers ? (
                        <ArrowUpwardIcon fontSize='small' />
                      ) : (
                        <ArrowDownwardIcon fontSize='small' />
                      )}
                      {`${stock.changePercentage}%`}
                    </div>
                  </TableCell>
                  {/* <TableCell align='right'>
                    <Tooltip title='Add To Portifolio'>
                      <IconButton>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  )
}
