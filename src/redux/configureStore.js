import {createStore, applyMiddleware, compose} from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {

    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    return createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    )

};

export default configureStore;