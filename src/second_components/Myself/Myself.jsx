import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h4>Myself</h4>
            <section className="flex">
                <Special asset={asset} ></Special>
            </section>
        </div>
    );
};

export default Myself;