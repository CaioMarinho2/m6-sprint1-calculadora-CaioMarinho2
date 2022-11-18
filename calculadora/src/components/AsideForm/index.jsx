import { useContext } from "react";
import { apiResponseContext } from "../../providers/ApiResponseProvider";
import "./index.css";

function AsideForm() {
  const { responseApi } = useContext(apiResponseContext);

  return (
    <div className="backgroundReceipInformation">
      <h2>VOCÊ RECEBERÁ:</h2>
      <hr />

      <p className="receiptInformation">
        Amanhã: <strong>R${responseApi["1"].toFixed(2)} </strong>
      </p>
      <p className="receiptInformation">
        Em 15 dias: <strong>R${responseApi["15"].toFixed(2)} </strong>
      </p>
      <p className="receiptInformation">
        Em 30 dias: <strong>R${responseApi["30"].toFixed(2)} </strong>
      </p>
      <p className="receiptInformation">
        Em 90 dias: <strong>R${responseApi["90"].toFixed(2)} </strong>
      </p>
    </div>
  );
}

export default AsideForm;
