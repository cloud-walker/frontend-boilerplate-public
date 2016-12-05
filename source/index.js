import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router'
import Main from 'shared/components/Main'

const content = (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
)
const root = document.getElementById('root')

render(content, root)
