// Write all the code here

import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";



const Home = () => {return(<section>
    
    <div className='home'>
        <div>
            <h1>Burger Shop</h1>
            <p>Tastey burger</p>
        </div>
        <a > Explore Menu</a>
    </div>
    <div id="menu" >
        <h1>Menu</h1>
        <div>
    <MenuCard itemNum="1" burgerSrc= {burger1} price="100" title="Cheese Burger"> </MenuCard>
    <MenuCard itemNum="2" burgerSrc= {burger2} price="500" title=" veg Cheese Burger"></MenuCard>
    <MenuCard itemNum="3" burgerSrc= {burger3} price="1800" title="Cheese Burger French fries"> </MenuCard>
    </div>
    </div>
    </section>
   
    )
}



export default Home;
