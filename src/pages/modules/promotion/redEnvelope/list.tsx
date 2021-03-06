import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import NavBar from '@/components/NavBar'
import { RedEnvelopeListData } from '@/config/list'
import RedEnvelopeList from './components/RedEnvelopeList'
// import Fab from '@material-ui/core/Fab'
// import AddIcon from '@material-ui/icons/Add'

// const useStyles = makeStyles({
//   fab: {
//     position: 'fixed',
//     bottom: 50,
//     right: 30,
//     color: '#fff',
//   },
// })
export default () =>
  // const classes = useStyles()
  (
    <React.Fragment>
      <NavBar title="红包列表" goBack rightBtn={{ label: '发布红包', url: '/promotion/redEnvelope/publish' }} />
      <RedEnvelopeList list={RedEnvelopeListData} />
      {/* <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab> */}
    </React.Fragment>
  )
