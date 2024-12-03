import { CDN_URL } from "../utils/constant";    

const RestaurantCard =(props) =>{
    const {resData} =props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        costForTwo
    }=resData?.info


    return(
        <div className="res-card">
            <img alt="imgFood"
             src={CDN_URL+cloudinaryImageId}
             className="cardimg"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{sla?.slaString} Minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
      
    
}

export default RestaurantCard;