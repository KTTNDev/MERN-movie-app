import React from 'react'

// พวก method ต่างๆจาก dom ถ้าใช้ก็ให้เอามาเพิ่มในนี้ด้วย เช่นพวก  Switch Route 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { NavBar } from '../component'

// มา import ด้วย 
import { MoviesList, MoviesInsert, MoviesUpdate } from  '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return (
    <Router>
      <NavBar />
      {/* มาเพิ่มตรงนี้ ให้มัน Route หา Pages */}
      <Switch>
        <Route path="/movies/list" exact component= {MoviesList} />
        <Route path="/movies/create" exact component= {MoviesInsert} />
        <Route path="/movies/update/:id" exact component= {MoviesUpdate} />
      </Switch>
    </Router>
    // เสร็จเเล้วไปสร้าง pages ต่อ...
  )
}

export default App