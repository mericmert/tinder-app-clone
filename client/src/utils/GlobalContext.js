import React, {useEffect, useReducer, useState} from 'react';
import { createContext } from 'react';
import {Reducer} from './Reducer'
import Axios from 'axios';
import { setAuthorizationToken } from './setAuthToken';

const initial_state = {
    cards : [],
}


export const Context = createContext(initial_state);

localStorage.setItem('token','');

export default function GlobalContext({children}) {
    
    const [cards,dispatch] = useReducer(Reducer,initial_state)
    useEffect(()=>{
        Axios.get('http://localhost:5050/read')
        .then((res) =>{
            dispatch({type: "INITIAL_STATE", payload: res.data})
        })
    },[])

    const addCard = (card) =>{
        dispatch({type: "ADD", payload : card})
    }
    
    
    return (
    <Context.Provider value={{
        cards : cards.cards,
        addCard,
        }}>
        {children}
    </Context.Provider>
  );
}
