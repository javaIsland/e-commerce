export const initialState = {
  cart: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //items exists
        newCart.splice(index, 1);
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
}
export default reducer;
