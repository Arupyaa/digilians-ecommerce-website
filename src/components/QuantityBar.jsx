function QuantityBar({ quantity, handleQuantity }) {
    function increase() {
        if (quantity < 100) {
            handleQuantity(prev => prev + 1)
        }
    }
    function decrease() {
        if (quantity > 1) {
            handleQuantity(prev => prev - 1)
        }
    }
    return (
        <div className="flex">
            <button className="font-bold bg-transparent hover:bg-neutral-100 h-10 w-10 border-y border-l" onClick={() => { decrease() }}>-</button>
            <div className="h-10 w-10 flex justify-center items-center border">{quantity}</div>
            <button className="font-bold bg-transparent hover:bg-neutral-100 h-10 w-10 border-y border-r" onClick={() => { increase() }}>+</button>
        </div>
    )
}

export default QuantityBar;