import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log("se envia");
    console.log(userInfo);
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Sofía Gonzales"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="sofiagonzales@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="099606325"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <button>Comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
