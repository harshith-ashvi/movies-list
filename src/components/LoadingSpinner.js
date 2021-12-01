import React from "react";
import loading from "./../assets/loading.gif"

const LoadingSpinner = (props) => {
    return (
        <div>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default LoadingSpinner