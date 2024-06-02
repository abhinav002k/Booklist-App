import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContexts";

function BookFrom() {
    const{dispatch}=useContext(BookContext);
    const[title,setTitle]=useState('')
    const[author,setAuthor]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author }});
        setTitle('')
        setAuthor('')
    }




    return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter the Book title </label>
      <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>

      <label htmlFor="author">Enter the Book author </label>
      <input type="text" name="author" id="author" onChange={(e)=>setAuthor(e.target.value)} value={author}/>

      <input type="submit" value="Add Book"/>
    </form>
  );
}
export default BookFrom;
