import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Route } from 'react-router-dom'
import ShopAssistant from './shopAssistant'
import RedEnvelope from './redEnvelope'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Route path="/promotion/shopAssistant" component={ShopAssistant} />
      <Route path="/promotion/redEnvelope" component={RedEnvelope} />
    </div>
  )
}
