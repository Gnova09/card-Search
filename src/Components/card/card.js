import React from "react";

const Card_list = () =>{
    
}
const Card = ({id, name, email})=>{
   
    return(
        <div className="cont_card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="placehodler" src={`https://robohash.org/${id}200x200`}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>

    );
}
export default Card;