

import FooterComponent from "./component/FooterComponent"
import ListBookComponent from "./component/ListBookComponent"
import "./App.css"
import HeaderComponent from "./component/HeaderComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BookForm from "./component/AddBook"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
   <Routes>
    {/* http://localhost:3000 */}
    <Route path="/" element={ <ListBookComponent/>}></Route>
    {/* http://localhost:3000/books */}
    <Route path="/books" element={ <ListBookComponent/>}></Route>
    {/* http://localhost:3000/add-book */}
    <Route path="/add-book" element={<BookForm/>}></Route>
    <Route path="/update-book/:id" element={<BookForm />} />



   </Routes>
   <FooterComponent/>
   </BrowserRouter>
    </>
  )
}

export default App
