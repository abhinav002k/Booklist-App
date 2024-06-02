import BookFrom from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContexts";

function App() {
  return (
    <>
      <div className="App">
        <BookContextProvider>
          <Navbar />
          <BookList/>
          <BookFrom/>
        </BookContextProvider>
      </div>
    </>
  );
}

export default App;
