import { useContext } from "react";
import { assetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(assetContext)
    return (
        <div>
           <h4>Friend</h4> 
           <p>has: {gift} </p>
        </div>
    );
};

export default Friend;