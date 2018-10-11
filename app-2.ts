import { Action } from '../01-redux-basic/ngrx-false/ngrx';
import { incrementadorAction, decrementadorAction, resetAction } from './contador/contador.actions';


function Reducer (state = 10, action: Action ) { 
    // if(action.type === 'INCREMENTAR') { 
    //     return state += 1;
    // }
    // return state;

    switch(action.type) { 
        
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR': 
            return state / action.payload;     
    
        case 'RESET': 
            return state = 0;

        default: 
            return state; 
    }
}

console.log('Funcion de reducer carpetas =>', Reducer(10, incrementadorAction));
console.log(Reducer(10, decrementadorAction));
console.log(Reducer(10, resetAction));
