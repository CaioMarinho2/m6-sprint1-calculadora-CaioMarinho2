import "./App.css";
import FormCalculator from "./components/FormCalculator";
import AsideForm from "./components/AsideForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <main className="App-header">
        <section>
          <FormCalculator />
          <AsideForm />
        </section>
      </main>
    </>
  );
}

export default App;
