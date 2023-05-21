
import cal from './Operations'
import React, { useRef, useState } from 'react';


let lst = [];
for(let i=0;i<=9;i++){
    lst.push(i);
}
const buttons = lst.map(i => <button>{i}</button>);
function addSymbol(){

}
function CalC(){
    const inputRef = useRef<HTMLInputElement>(null);
    const symRef = useRef<HTMLButtonElement>(null);
    const [displayText, setDisplayText] = useState('');
    const addSymbolsToInput = (event:any) => {
        let inputValue = inputRef.current?.value;
        let symbol = event.target.id;
        setDisplayText(inputValue+''+symbol);
        console.log(inputValue+''+symbol)
    };
    const handleInputChange = (event: any) => {
        setDisplayText(event.target.value);
    }
    return (
        <>
        <h1 style={{color:"white"}}>Welcome to calc for pro's</h1>
        <form className="form" action="/doCal">
            <input id='query' type='text' ref={inputRef} value={displayText} onChange={handleInputChange}/><br/><br/>
            <input type='submit' placeholder="="></input>
            <button onClick={cal}>Calculate</button>
        </form>
        <div className='keyPad'>
            {buttons}
            <button id='+' onClick={addSymbolsToInput}>+</button>
            <button id='-' onClick={addSymbolsToInput}>-</button>
            <button id='/' onClick={addSymbolsToInput}>/</button>
            <button id='%' onClick={addSymbolsToInput}>%(mod)</button>
            <button>=</button><br />
            <button>convert dec to hex</button><br />
            <button>convert hex to dec</button><br />
            <button>convert dec to bin</button><br />
            <button>convert bin to dec</button><br />
            <button>generate random num</button><br />
        </div>
        </>
    );
}

export default CalC;