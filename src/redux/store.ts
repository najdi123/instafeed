import { legacy_createStore as createStore, combineReducers, AnyAction } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postReducer, { PostState, PostActionTypes } from './reducers/postReducer';

// Define rootReducer with explicit types
const rootReducer = combineReducers({
    posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    // Explicitly define whitelist/blacklist or other config options if necessary
};

const persistedReducer = persistReducer<RootState, AnyAction>(persistConfig, rootReducer as any);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
