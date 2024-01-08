

import { useState } from "react";
import DecimalToBinary from '../utils/DecimalToBinary'

const DecimalABinario = () =>
{
    const [decimalInput, setDecimalInput] = useState('');
    const [binaryResult, setBinaryResult] = useState('');

    // Controlar input decimal
    const handleDecimalChange = (event) =>
    {
        const newDecimalValue = event.target.value;
        setDecimalInput(newDecimalValue);
        const decimalValue = parseInt(newDecimalValue, 10);

        const binaryValue = isNaN(decimalValue) ? 'NaN' : decimalValue.toString(2);
        setBinaryResult(binaryValue);
    };

    // Controlar input binario
    const handleBinaryChange = (event) =>
    {
        const newBinaryValue = event.target.value
        setBinaryResult(newBinaryValue)

        // valor ingresado es un número binario válido
        if (!/^[01]*$/.test(newBinaryValue)) {
            setDecimalInput('NaN');
            return;
        }

        const binaryValue = parseInt(newBinaryValue, 2);

        const decimalValue = isNaN(binaryValue) ? 'NaN' : binaryValue.toString(10);
        setDecimalInput(decimalValue)
    }


    return (
        <>

            <DecimalToBinary
                valueBinary={binaryResult}
                valueDecimal={decimalInput}

                onChangeBinary={handleBinaryChange}
                onChangeDecimal={handleDecimalChange}
            />

        </>
    )
}

export default DecimalABinario