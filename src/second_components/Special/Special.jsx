import { useContext } from "react";
import { assetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(assetContext)
    return (
        <div>
            <h4>Special</h4>
            <p>has: {asset} </p>
            <p>Also has: {gift} </p>
        </div>
    );
};

export default Special;