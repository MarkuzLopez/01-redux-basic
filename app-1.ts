 /// Acciones
 
 interface Action  { 
     type: string; 
     payload?: any;    
 }

//  const incrementadorAction:  Action = { 
//     type: 'INCREMENTAR' --> pass => mark02032018.
//  }

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

        default: 
            return state; 
    }
}

/// usar  el reducer

const incrementadorAction: Action = { 
    type: 'INCREMENTAR'
};

console.log('funcion reducer ++', Reducer(10, incrementadorAction));

const decrementadorAction: Action = { 
    type: 'DECREMENTAR'
}

console.log('funcion reducer --', Reducer(10, decrementadorAction));

const multiplicarAction: Action = { 
    type: 'MULTIPLICAR',
    payload: 2
}

console.log('funccion reducer **', Reducer(10, multiplicarAction));

const dividirAction: Action = { 
    type: 'DIVIDIR',
    payload: 2
}

console.log('Division / ', Reducer(10, dividirAction));