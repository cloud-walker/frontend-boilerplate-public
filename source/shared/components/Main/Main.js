import React from 'react'
import {Match, Miss} from 'react-router'
import Home from 'shared/pages/Home'
import Styleguide from 'shared/pages/Styleguide'
import NotFound from 'shared/pages/NotFound'

const Component = () =>
  <div>
    <Match exactly pattern="/" component={Home}/>
    <Match pattern="/styleguide" component={Styleguide}/>
    <Miss component={NotFound}/>
  </div>

Component.displayName = 'Main'

export default Component
