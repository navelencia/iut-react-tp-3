import './CalculatorKeys.css';

function CalculatorKeys ({ onButtonPressed }) {

    function buttonPressed(key) {
        if (onButtonPressed) onButtonPressed(key);
    }

    return (
    <table className="buttons">
        <tbody>
            <tr>
            <td><button onClick={() => buttonPressed('AC')}>AC</button></td>
            <td><button className='disabled' onClick={() => buttonPressed('PLUSMINUS')}>+/-</button></td>
            <td><button className='disabled' onClick={() => buttonPressed('%')}>%</button></td>
            <td><button onClick={() => buttonPressed('/')}>÷</button></td>
            </tr>
            <tr>
            <td><button onClick={() => buttonPressed(7)}>7</button></td>
            <td><button onClick={() => buttonPressed(8)}>8</button></td>
            <td><button onClick={() => buttonPressed(9)}>9</button></td>
            <td><button onClick={() => buttonPressed('*')}>×</button></td>
            </tr>
            <tr>
            <td><button onClick={() => buttonPressed(4)}>4</button></td>
            <td><button onClick={() => buttonPressed(5)}>5</button></td>
            <td><button onClick={() => buttonPressed(6)}>6</button></td>
            <td><button onClick={() => buttonPressed('-')}>-</button></td>
            </tr>
            <tr>
            <td><button onClick={() => buttonPressed(1)}>1</button></td>
            <td><button onClick={() => buttonPressed(2)}>2</button></td>
            <td><button onClick={() => buttonPressed(3)}>3</button></td>
            <td><button onClick={() => buttonPressed('+')}>+</button></td>
            </tr>
            <tr>
            <td colSpan="2"><button onClick={() => buttonPressed(0)}>0</button></td>
            <td><button className='disabled' onClick={() => buttonPressed(',')}>,</button></td>
            <td><button onClick={() => buttonPressed('=')}>=</button></td>
            </tr>
        </tbody>
      </table>
    )
}

export default CalculatorKeys;