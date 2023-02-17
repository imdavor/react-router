import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getItems } from '../services/data';

const Shop = () => {
    // initciajlizacija
    const [items, stateItems] = useState([]);

    // dogodi se component did mount i sada idemo po podatke
    // hook // dogodio se render i sl. useEffect to hvata // ()=>{} callback func
    // [] (dependency lista) da se pokrene samo jedanput ovo ide prazno na mounting
    useEffect(() => {
        stateItems(getItems);
    }, []);

    return (
        <>
            <h1>Shop page</h1>
            {items.map((item) => (
                <Link key={item.id} to={'/shop/' + item.id}>
                    <h2>{item.name}</h2>
                </Link>
            ))}
            <Outlet />
        </>
    );
};

export default Shop;
