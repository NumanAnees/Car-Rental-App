const initialData = {
  cars: [],
};

export const carsReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS": {
      return {
        ...state,
        cars: action.payload,
      };
    }

    default:
      return state;
  }
};
