import React from "react";


interface PadProperties{
    onNumberClick: (num:number) => void;
    onOperationClick: (op:string) => void;
    onCalculate: () => void;
    onClear : () => void;
}

const Pad: React.FC<PadProperties> = ({onNumberClick, onOperationClick, onCalculate, onClear}) =>{
    return(
        <div className="pad"> 
            <div>
                {[1,2,3].map((num) => (
                    <button key="{num}" onClick={ () => onNumberClick(num)}>{num}</button>
                ))}
                <button key="clear"  onClick={ () => onClear()}>C</button>
            </div>
            <div>
                {[4,5,6].map((num) => (
                    <button key="{num}" onClick={ () => onNumberClick(num)}>{num}</button>
                ))}
                <button key="+"  onClick={ () => onOperationClick("+")}>+</button>
            </div>
            <div>
                {[7,8,9].map((num) => (
                    <button key="{num}" onClick={ () => onNumberClick(num)}>{num}</button>
                ))}
                <button key="-"  onClick={ () => onOperationClick("-")}>-</button>
            </div>
            <div>            
                <button key="/"  onClick={ () => onClear()}>   </button>
                <button key="0"  onClick={ () => onNumberClick(0)}>0</button>
                <button key="enter"  onClick={ () => onCalculate()}>Enter</button>
            </div>
        </div>    
    );
}

export default Pad;