import React from 'react';
import './App.css';
import Button from "./components/Button";
import Product from "./components/Product";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import Tile from "./components/Tile";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>

                {/*Buttons*/}
                <Button
                    disabled={false}
                    text="to the collection"
                />
                <Button
                    disabled={false}
                    text="shop all bags"
                />
                <Button
                    disabled={true}
                    text="pre-orders"
                />
            </nav>

            {/*Producten*/}
            <main>
                <Product
                    span="Best Seller"
                    image={bag_1}
                    product="The handy bag"
                    price="€400"
                />
                <Product
                    span="Best Seller"
                    image={bag_2}
                    product="The stylish bag"
                    price="€250"
                />
                <Product
                    span="New collection"
                    image={bag_3}
                    product="The simple bag"
                    price="€300"
                />
                <Product
                    span="New collection"
                    image={bag_4}
                    product="The trendy bag"
                    price="€150"
                />
            </main>

            {/*Tiles*/}
            <footer>
                <Tile
                    title="THE BRAND"
                    textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est eum exercitationem itaque libero magni, mollitia perferendis quam voluptate voluptatum."
                    textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est eum exercitationem itaque libero magni, mollitia perferendis quam voluptate voluptatum."
                />
                <Tile
                    image={brand}
                />
                <Tile
                    image={our_story}
                />
                <Tile
                    title="OUR STORY"
                    textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est eum exercitationem itaque libero magni, mollitia perferendis quam voluptate voluptatum."
                    textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis est eum exercitationem itaque libero magni, mollitia perferendis quam voluptate voluptatum."
                />
            </footer>
        </>
    );
}

export default App;



