import axios from "axios";

const consultarAPI = async (url) => {
  const resultado = await axios.get(url);
  return resultado;
};

export default consultarAPI;
