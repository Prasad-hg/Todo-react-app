import { useState } from "react";

export default function LikeButton(){
    let [click,setclick] = useState(false);
    let [count , setCount] = useState(0);
    let tooggle =()=>{
        setclick(!click);
        setCount(count+1);
    }

    let styles  = {color:"red"};
    return(
        <div>
            <p>Likes count is {count}</p>
            <p onClick={tooggle}>
                {click?(<i className="fa-solid fa-heart" style={styles}></i>):( <i className="fa-regular fa-heart"></i>)}
                {/* <i className="fa-regular fa-heart"></i> */}
            </p>
        </div>
    )
}