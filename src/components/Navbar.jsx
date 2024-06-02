import { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";

function Navbar(){
    const { books }=useContext(BookContext);
    
    return(
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have {books.length} Books to get through...</p>
        </div>
    );
}

export default Navbar;