import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'Rafsan'} asset={asset} ></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;