import React,{useState} from "react";
import Products from "./components/mahsulot/Products";
import Second from "./components/secondPage/main/Second"
import Third from "./components/thirdPage/main/Third"
import {Routes,Route,BrowserRouter} from "react-router-dom";
function App() {

    const [card, setCard] = useState([
            {
                image: "https://leds-c4.com/sites/default/files/migrate/images/storage/subfamilies/351/slider/1610878955-organic-table-05.jpg",
                title: "Modern lamp study",
                price: "$258",
            },
            {
                image: "https://cdn-images.article.com/products/SKU16612/2890x1500/image65927.jpg",
                title: "Modern lamp study",
                price: "$258",
            },
            {
                image: "https://static.turbosquid.com/Preview/2015/11/01__11_08_21/03_lamp_night.jpgbe4bf335-1bb3-41af-9f6a-1c695d2df001Large.jpg",
                title: "Classic lamp",
                price: "$425",
            },
            {
                image: "https://www.techinn.com/f/13822/138221937/xiaomi-mi-smart-alarm-clock.jpg",
                title: "Clock cute",
                price: "$331",
            },

        ]
    )
  return(
      <BrowserRouter>
          <Routes>
            <Route path={"/"}  element={<Products card={card}/>}></Route>
            <Route path={"/second"} element={<Second/>}></Route>
            <Route path={"/third"} element={<Third setCard={setCard}/>}></Route>
        </Routes>
      </BrowserRouter>
  )

}

export default App;
