import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import CadastroVideo from './pages/cadastro/video'
import pagina404 from './pages/Error404'
import CadastroCategoria from './pages/cadastro/categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={Home} exact />
      <Route path = "/cadastro/video" component ={CadastroVideo} exact />
      <Route path = "/cadastro/categoria" component ={CadastroCategoria} exact />
      <Route component = {pagina404} />
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);


