import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Leitos from './pages/leitos/Leitos'
import LeitosForm from './pages/leitos/LeitosForm'
import Fichas from './pages/pacientes/Fichas'
import FichaForm from './pages/pacientes/FichasForm'
import Responsaveis from './pages/responsaveis/Responsaveis'
import ResponsavelForm from './pages/responsaveis/ResponsavelForm'

export default () => {
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fichas" component={Fichas} />
          <Route exact path="/fichas/create" component={FichaForm} />
          <Route exact path="/fichas/:id/edit" component={FichaForm} />
          <Route exact path="/leitos" component={Leitos} />
          <Route exact path="/leitos/create" component={LeitosForm} />
          <Route exact path="/leitos/:id/edit" component={LeitosForm} />
          <Route exact path="/responsaveis" component={Responsaveis} />
          <Route exact path="/responsaveis/create" component={ResponsavelForm} />
          <Route exact path="/responsaveis/:id/edit" component={ResponsavelForm} />
        </Switch>
      </BrowserRouter>


    </>
  )
}