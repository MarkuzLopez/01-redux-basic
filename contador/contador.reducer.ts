import {Action} from '../ngrx-false/ngrx';

export function contadorReducer (state = 10, action: Action ) { 
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