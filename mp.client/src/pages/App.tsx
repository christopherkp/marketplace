import '../shared/css/App.css';
import Marketplace from '../components/MarketplaceComponent.tsx'
import ItemInformation from '../components/ItemInformation.tsx'
import User from '../components/User.tsx'
import { Route, Routes } from 'react-router'
import Header from '../components/Header.tsx'
import Home from '../components/Home.tsx'
import { BrowserRouter } from 'react-router';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/marketplace/:id" element={<ItemInformation />} />
                    <Route path="/marketplace/user/:userid" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;