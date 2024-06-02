import { createContext, useEffect, useReducer, useState } from 'react'
import {v4 as uuid} from 'uuid'
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider= (props)=>{

      const [books,dispatch]=useReducer(BookReducer,[],()=>{
        const localData=localStorage.getItem('books')
        return localData?JSON.parse(localData):[]
      })

      useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
      },[books])
      
      return(
        <BookContext.Provider value={{books,dispatch}}> 
            {props.children}
        </BookContext.Provider>
      )
}

export default BookContextProvider;