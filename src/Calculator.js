
import React, { useState } from "react";
import CalculatorScreen from "./CalculatorScreen";
import { evaluate } from "mathjs";
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorButtons from "./CalculatorButtons";

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
                <CalculatorButtons buttonRows={buttonRows} onButtonClick={onButtonClick} />
            </div>
        </div>
    );
}

export default Calculator;
