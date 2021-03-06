import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import Login from '@/pages/login'
import Index from '@/pages'
import Wallet from '@/pages/wallet'
import Promotion from '@/pages/modules/promotion'
import Settings from '@/pages/modules/settings'
import StoreFront from '@/pages/modules/management'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import 'moment/locale/zh-cn'

let oldLocation: any = null
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffb000',
    },
  },
})
const BasicRoute = (props: any) => {
  const { location, history } = props
  let classNames = ''
  if (history.action === 'PUSH') {
    classNames = 'forward-from-right'
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-to-right'
  }
  oldLocation = location
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <TransitionGroup
          className="router-wrapper"
          childFactory={child => React.cloneElement(child, { classNames })}
        >
          <CSSTransition timeout={500} key={location.pathname}>
            <Switch location={location}>
              <Route path="/login" component={Login} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/management" component={StoreFront} />
              <Route path="/promotion" component={Promotion} />
              <Route path="/settings" component={Settings} />
              <Route path="/" component={Index} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default withRouter(BasicRoute)
