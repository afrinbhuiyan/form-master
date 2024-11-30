import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Alexa' && <Friend></Friend> }
            </section>
        </div>
    );
};

export default Cousin;