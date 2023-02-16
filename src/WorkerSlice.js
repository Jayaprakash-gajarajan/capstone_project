import { createSlice } from "@reduxjs/toolkit";

export const Worker = createSlice({
  name: "worker",
  initialState: {
    items: [ {
        "no":1,
        "name":"Jayaprakash.G",
        "role":"full stack developer",
        "image":"https://tse3.mm.bing.net/th?id=OIP.L9b3gYNQIuJby9bGrrV3BgAAAA&pid=Api&P=0",
        "project":"Web App",
        "status":"Active",
        "end_date":"12-2-2023"
      },
      {
        "no":2,
        "name":"kamalesh.T",
        "role":"junior developer",
        "image":"https://tse2.mm.bing.net/th?id=OIP.5WRSGFl3y6BuPOp3sqsZjAHaIJ&pid=Api&P=0",
        "project":"Web site",
        "status":"Active",
        "end_date":"15-2-2023"
      },
      {
        "no":3,
        "name":"Sakthivel S",
        "role":"Backend developer",
        "image":"https://tse2.mm.bing.net/th?id=OIP.KaslBAJqT34oAwE3NFm5EgAAAA&pid=Api&P=0",
        "project":"Create a new Server",
        "status":"Active",
        "end_date":"10-2-2023"
      }
    ],
    isOrderPlaced: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      console.log(action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.items.push(product);
    },
    checkIsAdded: (state, action) => {
      // const itemsCopy = [...state?.items];
      // console.log(action.payload);
      // return itemsCopy?.filter((item) => item._id === action.payload).length > 0
      //   ? true
      //   : false;
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  checkIsAdded,
  removeProduct,
  incrementByQuantity,
} = Worker.actions;

export default Worker.reducer;