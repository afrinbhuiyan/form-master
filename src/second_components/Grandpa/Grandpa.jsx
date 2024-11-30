import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const assetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'Diamond';
    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <p>net money: {money} </p>
            <MoneyContext.Provider value={[money, setMoney]} >
                <assetContext.Provider value="gold" >
                    <section className="flex">
                        <Father asset={asset} ></Father>
                        <Uncle asset={asset} ></Uncle>
                        <Aunty></Aunty>
                    </section>
                </assetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and explore it
 * 2. add provider for the context with a value. value could be anything
 * 3. useContext to access value in the context API
 */