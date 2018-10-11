//Acciones 

export interface Action { 
    type: string;
    payload?: any
}

// funcion de tipo generico dependiendo del dato que reciba: objeto, numero, string etc. debe ser igual a salida compo lo que reciba
export interface Reducer<I> { 
    (state: I, action: Action): I
    
}