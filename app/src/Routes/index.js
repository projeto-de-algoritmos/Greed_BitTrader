import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

// Pages
import { Home } from '../Pages/Home';
import { ShopPage } from '../Pages/Shop';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      <Switch>
        <Route path="/loja" element={<ShopPage />} />
      </Switch>

    </BrowserRouter>
  )
}

export {
  Routes
}