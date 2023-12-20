const initialState = {
  product: [],
  basket: [],
  favorite: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_TO_BASKET":
      let foundProduct = state.basket.find((el) => el.id === action.payload.id);
      if (foundProduct) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === foundProduct.id ? { ...el, count: el.count + 1 } : 1
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }],
        };
      }
    case "ADD_TO_FAVORITE":
      let foundFavorite = state.favorite.find(
        (el) => el.id === action.payload.id
      );
      if (foundFavorite) {
        return {
          ...state,
          favorite: state.favorite.map((el) =>
            el.id === foundFavorite.id
              ? { ...el, quantity: el.quantity + 1 }
              : 1
          ),
        };
      } else {
        return {
          ...state,
          favorite: [...state.favorite, { ...action.payload, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};
