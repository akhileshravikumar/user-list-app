import React from "react";
import ReactDOM  from "react-dom";
import Button from "../../Utils/Button";
import './Error.css'

const Error = ({ setFlag }) => {

    const Backdrop=()=>{
        return(<div className="backdrop" onClick={() => { setFlag(false) }}/>);
    }

    const Modal =()=>{
        return( <div className="modal">
        <header className="header" >
            <h2>Error</h2>
        </header>
        <div className="content">
            <p>Invalid input given. Please Check</p>
            <div className="actions" onClick={() => { setFlag(false) }} >
                <Button value="Okay" />
            </div>
        </div>

    </div>);
    }

    return (<>
        {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))};
        {ReactDOM.createPortal(<Modal/>, document.getElementById('overlay-root'))};
       
        </>)
}

export default Error;