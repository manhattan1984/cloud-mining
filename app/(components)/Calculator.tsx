import React from 'react'

const Calculator = () => {
    return (
        <div className='flex flex-col p-2 h-[50vh] justify-center gap-4'>
            <div className="text-2xl">Mining Calculator</div>
            <p>Your profit is based on cryptocurrency current value and mining hash rate. (Hashrate Converter)</p>
            <div className="flex flex-col gap-2 w-1/2">
                <input className='p-1 border' type="text" />
                <input className='p-1 border' type="text" />
            </div>
        </div>
    )
}

export default Calculator