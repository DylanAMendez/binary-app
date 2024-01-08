

const BinaryToDecimal = ({ valueDecimal, onChangeDecimal, valueBinary, onChangeBinary }) =>
{
    return (
        <>

            <h1 className="my-12 text-2xl text-white pb-2 ">Binario a Decimal</h1>

            <div className="flex flex-col gap-3 items-center">

                <label>Binary:</label>
                <input
                    type="tel"
                    value={valueBinary}
                    onChange={onChangeBinary}
                    placeholder="(bin)"
                    className="sm:w-72 rounded-lg lg:w-1/4 pt-1.5  mx-1 text-base text-center text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-blue-300 focus:outline-none focus:ring-0 "
                />

                <label>Decimal:</label>
                <input
                    type="tel"
                    value={valueDecimal}
                    onChange={onChangeDecimal}
                    placeholder='(bin) = (dec)'
                    readOnly
                    style={{
                        background: "#000000",
                        color: "#1c1"
                    }}
                    className="sm:w-72 rounded-lg lg:w-1/4 pt-2 mx-1 text-base text-center  border-0 border-b-2  appearance-none border-gray-600 focus:border-green-700 focus:outline-none focus:ring-0"
                />

            </div>

        </>
    )
}

export default BinaryToDecimal