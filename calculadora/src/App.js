import "./App.css";
import FormCalculator from "./components/FormCalculator";
import AsideForm from "./components/AsideForm";
function App() {
  return (
    <main className="App-header">
      <section>
        <FormCalculator />
        <AsideForm />
      </section>
    </main>
  );
}

export default App;
