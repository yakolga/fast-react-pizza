import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function updateItemQuantity({id, currentQuantity}) {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>+</Button>
        </div>
    )
}

export default updateItemQuantity;