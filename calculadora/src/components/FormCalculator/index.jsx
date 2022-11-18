import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { apiResponseContext } from "../../providers/ApiResponseProvider";
import { toast } from "react-toastify";
import * as yup from "yup";
import "./index.css";

function FormCalculator() {
  const { setResponseApi } = useContext(apiResponseContext);

  // Função para a validação dos dados do form
  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Valor deve ser um número")
      .required("Valor obrigatório")
      .min(1000, "Valor mínimo 1000")
      .max(100000000, "Valor máximo 100000000"),
    installments: yup
      .number()
      .typeError("Parcelas devem ser um número")
      .required("Parcelas Obrigatórias")
      .min(1, "Minimo uma Parcela")
      .max(12, "Número de parcelas acima do permitido"),
    mdr: yup
      .number()
      .typeError("MDR deve ser um número")
      .required("MDR Obrigatória")
      .min(0, "O MDR mínimo deve ser 0")
      .max(100, "O MDR máximo é 100"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  //função para pegar os dados do form, fazer a requisição na API e retornar a resposta para o cliente
  const onSubmitionFunction = (data) => {
    api
      .post("", data) //fazendo o post na api
      .then((data) => {
        setResponseApi(data.data); //setando a resposta para mostrar a resposta pro usuário
      })
      .catch((err) => {
        toast.error("Algo deu errado, tente novamente mais tarde!");
      });
  };

  return (
    <div className="backgroundCalculator">
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmitionFunction)}>
        <div className="formsContainer">
          <label>Informe o valor da venda*</label>
          <p className="errors">{errors.amount?.message}</p>
          <input {...register("amount")} />
        </div>
        <div className="formsContainer">
          <label>Em quantas parcelas*</label>
          <p className="errors">{errors.installments?.message}</p>
          <input {...register("installments")} />
          <p className="maximumInstallments">Máximo de 12 parcelas</p>
        </div>
        <div className="formsContainer">
          <label>Informe o percentual de MDR*</label>
          <p className="errors">{errors.mdr?.message}</p>
          <input {...register("mdr")} />
        </div>
        <button type="submit">Simular</button>
      </form>
    </div>
  );
}
export default FormCalculator;
