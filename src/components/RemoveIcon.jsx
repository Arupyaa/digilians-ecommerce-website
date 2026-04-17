import trashIcon from "../assets/trash.svg"
function RemoveIcon({ onRemove }) {
    return (
        <div onClick={onRemove} className="justify-self-end flex gap-2 items-center hover:cursor-pointer hover:underline hover:decoration-2 hover:decoration-red-600">
            <img src={trashIcon} alt="trash icon" />
            <span className="text-red-600">Remove</span>
        </div>
    )
}

export default RemoveIcon;