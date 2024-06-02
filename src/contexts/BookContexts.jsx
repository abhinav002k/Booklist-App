import { createContext, useReducer, useState } from 'react'
import {v4 as uuid} from 'uuid'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider= (props)=>{

      const [books,dispatch]=useReducer(BookReducer,[
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
      ])
      
      return(
        <BookContext.Provider value={{books,dispatch}}> 
            {props.children}
        </BookContext.Provider>
      )
}

export default BookContextProvider;