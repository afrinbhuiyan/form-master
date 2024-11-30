import useInputState from "../../Hooks/useInputState";

const Hookform = () => {
    // const [name, handleNameChange] = useInputState('Rojoni')
    const emailState = useInputState('afrin@pagolni.go')
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('hi i am afrin', name)
        console.log('Helleoo alpin', emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} > 
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;