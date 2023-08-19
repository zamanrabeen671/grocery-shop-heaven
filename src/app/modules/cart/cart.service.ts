import { AuthUser } from "../../interfaces/common";
import { ICart } from "./cart.interface";
import { Cart } from "./cart.model";
// import { IHeroMasterData } from "./heroMasterData.interface";
// import { HeroMasterData } from "./heroMasterData.model";

const getCartItemsByUserId = async (user: AuthUser): Promise<ICart[]> => {
    const result = await Cart.find({ userId: user.userId })
        .populate('productId');

    return result;
}

const addCartItem = async (cartItem: ICart, user: AuthUser): Promise<ICart> => {
    const result = new Cart({ ...cartItem, userId: user.userId })

    result.save();
    return result;
}

const deleteCartItem = async (
    id: string
): Promise<ICart | null> => {
    const result = await Cart.findByIdAndDelete(id);
    return result;
};


export const CartService = {
    getCartItemsByUserId,
    addCartItem,
    deleteCartItem
}