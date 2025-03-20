import { useState } from 'react'
import './App.css'
import FirstComponent from '../components/FirstComponent'
import SecComponent from '../components/SecComponent'
import TemplateExpressions from '../components/TemplateExpressions'
import Events from '../components/Events'
import Images from '../components/Images'
import MeuCSS from '../components/MeuCSS/MeuCSS'
import MyCSS from '../components/MyCSS'


function App() {

  return (
    <>
      <MyCSS/>
      <MeuCSS/>
      <p className='testeClasse'>Texto Escrito no APP</p>
      {/* <FirstComponent/>
      <SecComponent/>
      <TemplateExpressions/> */}
      <Events/>
      <Images/>

    </>
  )
}

export default App
