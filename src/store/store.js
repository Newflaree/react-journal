import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
  compose 
} from "redux";
import thunk from 'redux-thunk'
// Reducers
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose();

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

export const store = createStore( 
  reducers,
  composeEnhancers(
    applyMiddleware( thunk )
  )
);
