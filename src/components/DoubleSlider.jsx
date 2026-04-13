function DoubleSlider({ minValue, setMinValue, maxValue, setMaxValue, absoluteMin, absoluteMax }) {
    return (
        <div className="w-full px-2 py-4">
            {/* Overlapping sliders track */}
            <div className="relative h-6 flex items-center">
                <input
                    id="fromSlider"
                    type="range"
                    value={minValue}
                    min={absoluteMin}
                    max={absoluteMax}
                    onChange={(e) => setMinValue(e.target.value)}
                    className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none z-20
                               [&::-webkit-slider-thumb]:pointer-events-auto
                               [&::-webkit-slider-thumb]:appearance-none
                               [&::-webkit-slider-thumb]:w-5
                               [&::-webkit-slider-thumb]:h-5
                               [&::-webkit-slider-thumb]:rounded-full
                               [&::-webkit-slider-thumb]:bg-white
                               [&::-webkit-slider-thumb]:border-2
                               [&::-webkit-slider-thumb]:border-indigo-500
                               [&::-webkit-slider-thumb]:cursor-pointer
                               [&::-webkit-slider-thumb]:shadow-sm
                               [&::-moz-range-thumb]:pointer-events-auto
                               [&::-moz-range-thumb]:w-5
                               [&::-moz-range-thumb]:h-5
                               [&::-moz-range-thumb]:rounded-full
                               [&::-moz-range-thumb]:bg-white
                               [&::-moz-range-thumb]:border-2
                               [&::-moz-range-thumb]:border-indigo-500
                               [&::-moz-range-thumb]:cursor-pointer"
                />
                <input
                    id="toSlider"
                    type="range"
                    value={maxValue}
                    min={absoluteMin}
                    max={absoluteMax}
                    onChange={(e) => setMaxValue(e.target.value)}
                    className="absolute w-full h-1 appearance-none bg-gray-200 rounded-full pointer-events-none z-10
                               [&::-webkit-slider-thumb]:pointer-events-auto
                               [&::-webkit-slider-thumb]:appearance-none
                               [&::-webkit-slider-thumb]:w-5
                               [&::-webkit-slider-thumb]:h-5
                               [&::-webkit-slider-thumb]:rounded-full
                               [&::-webkit-slider-thumb]:bg-white
                               [&::-webkit-slider-thumb]:border-2
                               [&::-webkit-slider-thumb]:border-indigo-500
                               [&::-webkit-slider-thumb]:cursor-pointer
                               [&::-webkit-slider-thumb]:shadow-sm
                               [&::-moz-range-thumb]:pointer-events-auto
                               [&::-moz-range-thumb]:w-5
                               [&::-moz-range-thumb]:h-5
                               [&::-moz-range-thumb]:rounded-full
                               [&::-moz-range-thumb]:bg-white
                               [&::-moz-range-thumb]:border-2
                               [&::-moz-range-thumb]:border-indigo-500
                               [&::-moz-range-thumb]:cursor-pointer"
                />
            </div>

            {/* Min / Max inputs */}
            <div className="flex justify-between gap-4 mt-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="fromInput" className="text-xs text-gray-500 font-medium">Min</label>
                    <input
                        id="fromInput"
                        type="number"
                        value={minValue}
                        min={absoluteMin}
                        max={absoluteMax}
                        onChange={(e) => setMinValue(e.target.value)}
                        className="w-24 px-2 py-1.5 text-sm border border-gray-300 rounded-md
                                   focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-col gap-1 items-end">
                    <label htmlFor="toInput" className="text-xs text-gray-500 font-medium">Max</label>
                    <input
                        id="toInput"
                        type="number"
                        value={maxValue}
                        min={absoluteMin}
                        max={absoluteMax}
                        onChange={(e) => setMaxValue(e.target.value)}
                        className="w-24 px-2 py-1.5 text-sm border border-gray-300 rounded-md
                                   focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                    />
                </div>
            </div>
        </div>
    );
}

export default DoubleSlider;