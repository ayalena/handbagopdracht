import React from "react";

function Button({ text, disabled }) {
    return (
        <button disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;