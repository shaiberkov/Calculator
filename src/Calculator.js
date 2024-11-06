import CalculatorScreen from "./CalculatorScreen";
import React, {useState} from "react";
import {evaluate} from "mathjs";

function Calculator() {
    const [expression, setExpression] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    const onButtonClick = (event) => {
        const number = event.target.innerText;
        if(number==="ON") {
            setCanSubmit(true);

        }
        if(number==="C"){
            setExpression("");

        }
        if(canSubmit && number !== "ON" && number !== "C") {
            setExpression((prev) => prev + number);
            if (number === "=") {
                calculateResult()
            }
        }
    }
    const calculateResult = () => {
        try {
            const evalResult = evaluate(expression);
            setExpression(evalResult);
        } catch (error) {
            setExpression("error");
        }
    };





    return(
        <div>
            <div className="Calculator">
                <CalculatorScreen value={expression}/>
            </div>
            <div>
                <button onClick={(event) => onButtonClick(event)}>7</button>
                <button onClick={(event) => onButtonClick(event)}>8</button>
                <button onClick={(event) => onButtonClick(event)}>9</button>
                <button onClick={(event) => onButtonClick(event)}>C</button>
                <button onClick={(event) => onButtonClick(event)}>ON</button>
            </div>
            <div>
                <button onClick={(event) => onButtonClick(event)}>4</button>
                <button onClick={(event) => onButtonClick(event)}>5</button>
                <button onClick={(event) => onButtonClick(event)}>6</button>
                <button onClick={(event) => onButtonClick(event)}>/</button>
                <button onClick={(event) => onButtonClick(event)}>+</button>
            </div>
            <div>
                <button onClick={(event) => onButtonClick(event)}>1</button>
                <button onClick={(event) => onButtonClick(event)}>2</button>
                <button onClick={(event) => onButtonClick(event)}>3</button>
                <button onClick={(event) => onButtonClick(event)}>*</button>
                <button onClick={(event) => onButtonClick(event)}>-</button>
            </div>
            <div>
                <button onClick={(event) => onButtonClick(event)}>0</button>
                <button onClick={(event) => onButtonClick(event)}>=</button>
            </div>

        </div>


    )


}

export default Calculator;