import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <Myself asset={asset} ></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;