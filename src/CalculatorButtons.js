import React from "react";

function CalculatorButtons({buttonRows,onButtonClick}) {

    return (
        <div className="mt-3">
            {buttonRows.map((row, rowIndex) => (
                <div key={rowIndex} className="d-flex justify-content-around mb-2">
                    {row.map((btn, idx) => (
                        <button
                            key={idx}
                            className="btn btn-warning rounded-circle p-0"
                            onClick={onButtonClick}
                            style={{width: "50px", height: "50px", fontSize: "18px", lineHeight: "50px"}}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )


}

export default CalculatorButtons;