import "./index.css";

function AsideForm() {
  return (
    <div className="backgroundReceipInformation">
      <h2>VOCÊ RECEBERÁ:</h2>
      <hr />
      
      <p className="receiptInformation">Amanhã:<strong>R$ </strong></p>
      <p className="receiptInformation">Em 15 dias:<strong>R$ </strong></p>
      <p className="receiptInformation">Em 30 dias:<strong>R$ </strong></p>
      <p className="receiptInformation">Em 90 dias:<strong>R$ </strong></p>
    </div>
  );
}

export default AsideForm;
