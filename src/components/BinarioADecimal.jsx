
import { useState } from "react";
import BinaryToDecimal from "../utils/BinaryToDecimal"


const BinarioADecimal = () =>
{
    const [decimalInput, setDecimalInput] = useState('');
    const [binaryResult, setBinaryResult] = useState('');


    const handleDecimalChange = (event) =>
    {
        const newDecimalValue = event.target.value;
        setDecimalInput(newDecimalValue);
        const decimalValue = parseInt(newDecimalValue, 10);

        const binaryValue = isNaN(decimalValue) ? 'NaN' : decimalValue.toString(2);
        setBinaryResult(binaryValue);
    };


    const handleBinaryChange = (event) =>
    {
        const newBinaryValue = event.target.value
        setBinaryResult(newBinaryValue)


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
            <BinaryToDecimal
                valueBinary={binaryResult}
                valueDecimal={decimalInput}

                onChangeBinary={handleBinaryChange}
                onChangeDecimal={handleDecimalChange}
            />

        </>
    )
}

export default BinarioADecimal
