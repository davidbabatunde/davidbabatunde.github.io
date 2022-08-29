import "./App.css";
import Footer from "./Footer";
import Timer from "./Timer";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h2>WE'RE LAUNCHING SOON!</h2>
      </div>
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
