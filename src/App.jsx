import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Shopitem from './pages/ShopItem';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='shop' element={<Shop />}>
                        <Route path='shop/:id' element={<Shopitem />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
