import {Store, createStore} from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

/// es una constante que recibe una funcion
const store: Store = createStore(contadorReducer);

store.subscribe( ()=> { 
    console.log('Subscribe un observable => ', store.getState());
})

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
