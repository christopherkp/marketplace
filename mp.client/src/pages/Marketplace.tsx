import '../shared/css/App.css';
import MarketplaceComponent from '../components/MarketplaceComponent.tsx'
import ItemInformation from '../components/ItemInformation.tsx'
import User from '../components/User.tsx'
import { Route, Routes } from 'react-router'
import Header from '../components/Header.tsx'
import Home from '../components/Home.tsx'
import { BrowserRouter } from 'react-router';
import { useState } from 'react';

function Marketplace() {
    return (
        <MarketplaceComponent/>
    );
}

export default Marketplace;