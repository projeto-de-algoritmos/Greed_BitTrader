import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom"

// Pages
import { Bank } from '../Pages/Bank';
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
      <Switch>
        <Route path="/banco" element={<Bank />} />
      </Switch>
    </BrowserRouter>
  )
}

export {
  Routes
}