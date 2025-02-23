import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "./components/UserContext"; 
import Login from "./components/Login"; 

const App: React.FC = () => {
  return (
    <UserProvider>
     <Router>
      <Navbar />
      <div style={{ padding: "25px" }}>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      <Footer />
     </Router>
    </UserProvider>
  );
};

export default App;
