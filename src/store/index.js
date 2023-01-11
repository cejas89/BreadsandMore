import { combineReducers, createStore } from "redux";

// reducers
import CategoryReducer from "./reducers/category.reducers";
import BreadReducer from "./reducers/breads.reducers";


const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
})

export default createStore(RootReducer)