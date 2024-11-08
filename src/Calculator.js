
import React, { useState } from "react";
import CalculatorScreen from "./CalculatorScreen";
import { evaluate } from "mathjs";
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
    const [expression, setExpression] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);
    const onButtonClick = (event) => {
        const number = event.target.innerText;

        if (number === "ON") {
            setCanSubmit(true);
        } else if (number === "C") {
            setExpression("");
        } else if (canSubmit && expression === "Error") {
            setExpression(number);
        } else if (canSubmit && number !== "=") {
            setExpression((prev) => prev + number);
        } else if (canSubmit && number === "=") {
            calculateResult();
        }
    };

    const calculateResult = () => {
        try {
            const evalResult = evaluate(expression);
            setExpression(evalResult);
        } catch (error) {
            setExpression("Error");
        }
    };

    const buttonRows = [
        ["7", "8", "9", "C"],
        ["4", "5", "6", "/"],
        ["1", "2", "3", "*"],
        ["0", ".", "=", "+"],
        ["ON","^", "-"]
    ];

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-3 bg-dark text-light" style={{ width: "300px", borderRadius: "20px" }}>
                <CalculatorScreen value={expression} />
                <div className="mt-3">
                    {buttonRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="d-flex justify-content-around mb-2">
                            {row.map((btn, idx) => (
                                <button
                                    key={idx}
                                    className="btn btn-warning rounded-circle p-0"
                                    onClick={onButtonClick}
                                    style={{ width: "50px", height: "50px", fontSize: "18px", lineHeight: "50px" }}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
