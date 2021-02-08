import React from "react";

function Wrapper(props) {
    return <main className={`wrapper${props.fluid ? '-fluid' : ''}`}>
        g{props.children}
    </main>;
}

export default Wrapper;