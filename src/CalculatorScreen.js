
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function CalculatorScreen({ value }) {
    return (
        <input
            className="form-control bg-dark text-light text-end fs-4"
            value={value}
            readOnly
            style={{ height: "60px", marginBottom: "10px" }}
        />
    );
}

export default CalculatorScreen;
