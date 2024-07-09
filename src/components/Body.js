import Card from "./Card";
import Footer from "./Footer";
import { useState, useEffect } from "react";
const Body = ()=>{
    const [rest,setRes] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const res = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        console.log(data);
        // console.log(data.data.cards.card.card.gridElements.infoWithStyle.restaurants);
        if(data.data.cards[2].card.card.gridElements != undefined){

            setRes(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        }else{
            setRes(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        console.log(data.data.cards[2].card.card.gridElements == undefined);
        // setRes(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        console.log(rest);
    }
    return(
        <>
        <div className="bod">
            <h2>Whats on your mind?</h2>
            <div className="restros">
            {
                rest.map(obj=><Card key={obj.info.id} res={obj}/>)
            }
            

            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Body;
