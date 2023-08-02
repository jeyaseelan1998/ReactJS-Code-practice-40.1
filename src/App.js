// import {Route, Redirect, Switch} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </div>
)

export default App
