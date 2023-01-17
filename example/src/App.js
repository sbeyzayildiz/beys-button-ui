import React from 'react'

import { BeysButton } from 'beys-button-ui'
import 'beys-button-ui/dist/index.css'

const App = () => {
  return <div>
    <br></br>
    <BeysButton text="Default Button" />
    <br></br>
    <BeysButton type="primary" text="Primary Button" />
    <br></br>
    <BeysButton type="dashed" text="Dashed Button" />
    <br></br>
    <BeysButton type="text" text="Text Button" />
    <br></br>
    <BeysButton type="link" text="Link Button" />
  </div> 
}

export default App
