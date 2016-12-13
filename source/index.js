import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router'
import Main from 'shared/components/Main'

/**
 * Browser environment things (do not move from here):
 * - BrowserRouter
 */

const content = (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
)
const hook = document.getElementById('root')

render(content, hook)
