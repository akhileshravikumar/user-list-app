import React from "react";
import Button from "../../Utils/Button";
import './Error.css'

const Error = ({ setFlag }) => {
    return (<div className="backdrop">
        <div className="modal">
            <header className="header" >
                <h2>Error</h2>
            </header>
            <div className="content">
                <p>Invalid input given. Please Check</p>
                <div className="actions" onClick={() => { setFlag(false) }} >
                    <Button value="Okay" />
                </div>
            </div>

        </div>

    </div>)
}

export default Error;