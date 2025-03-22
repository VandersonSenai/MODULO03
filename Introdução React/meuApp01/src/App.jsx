// import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecComponent from './components/SecComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Images from './components/Images'
import MeuCSS from './components/MeuCSS/MeuCSS'
import MyCSS from './components/MyCSS'
import Varia from './component/Varia'
import { ListRender } from './component/ListRender'


function App() {

  return (
    <>
      {/* <FirstComponent/>
      <MyCSS/>
      <MeuCSS/>
      <p className='testeClasse'>Texto Escrito no APP</p>
      <SecComponent/>
      <TemplateExpressions/> 
      <Events/>
      <Varia/>
      <Images/>*/}
      <hr />
      <ListRender/>

      <hr />
    </>
  )
}

export default App
