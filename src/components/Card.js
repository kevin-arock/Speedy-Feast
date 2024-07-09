const Card = ({res})=>{
    // const {
    //     name,
    //     id,
    //     cloudinaryImageId,
    //     cuisines,
    //     avgRating
    // } = res?.info;
    return(
        <div className="card" >
            
            <img className="cimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.info.cloudinaryImageId+".jpg"} alt="food"/>
            
            
            <div className="info">
                <h4>{res.info.name}</h4>
                <h5>{res.info.avgRating} {res.info.sla.slaString}</h5>
                <h6>{res.info.cuisines.join(", ")}</h6>
            </div>
        </div>
    )
}


export default Card;