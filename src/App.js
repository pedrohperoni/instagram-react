import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js"
import Main from "./Components/Main.js";
import Sidebar from "./Components/Sidebar.js"

function App() {
  return (
    <>
      <Header />
      <div className="corpo">
         <Main />
         <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
