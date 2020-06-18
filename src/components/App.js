import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
import GifListContainer from "../containers/GifListContainer"


const App = () => {
  return (
    <div>
        < NavBar color='blue' title="Giphy Search" />
        <div>
        <GifListContainer />
    </div>
    </div>
  )
}

export default App
