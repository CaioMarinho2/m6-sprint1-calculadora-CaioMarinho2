import "./index.css";

function FormCalculator() {
  return (
    <div className="backgroundCalculator">
      <h1>Simule sua Antecipação</h1>
      <form>
        <div className="formsContainer">
          <label>Informe o valor da venda*</label>
          <input />
        </div>
        <div className="formsContainer">
          <label>Em quantas parcelas*</label>
          <input />
          <p className="maximumInstallments">Máximo de 12 parcelas</p>
        </div>
        <div className="formsContainer">
          <label>Informe o percentual de MDR*</label>
          <input />
        </div>
      </form>
    </div>
  );
}
export default FormCalculator;
