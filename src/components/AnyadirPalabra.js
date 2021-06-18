import { useEffect, useState } from "react";

export const AnyadirPalabra = (props) => {
  const { anyadirAlCuadro } = props;
  const [nuevaPalabra, setNuevaPalabra] = useState("");
  const [veces, setVeces] = useState("");
  const [lenguaje, setLenguaje] = useState(false);
  const [datosRellenados, setDatosRellenados] = useState(true);
  useEffect(() => {
    setDatosRellenados(true);
    if (nuevaPalabra !== "" && veces !== "") {
      setDatosRellenados(false);
    }
  }, [nuevaPalabra, veces]);
  const submit = (e) => {
    e.preventDefault();
    anyadirAlCuadro(nuevaPalabra, veces, lenguaje);
  };
  return (
    <form className="form-palabras" onSubmit={submit}>
      <div className="form-grupo">
        <input
          type="text"
          placeholder="Nueva palabra"
          onChange={(e) => setNuevaPalabra(e.target.value)}
          required
        />
      </div>
      <div className="form-grupo">
        <select onChange={(e) => setVeces(e.target.value)} required>
          <option value="" hidden>
            Máximo de veces
          </option>
          <option value="0">Sin límite</option>
          <option value="1">1 vez</option>
          <option value="2">2 veces</option>
          <option value="3">3 veces</option>
        </select>
      </div>
      <div className="form-grupo">
        <label>
          <input
            type="checkbox"
            onChange={(e) => setLenguaje(e.target.checked)}
          />
          Es un lenguaje de programación
        </label>
      </div>
      <div className="form-grupo">
        <button type="submit" disabled={datosRellenados}>
          Crear
        </button>
      </div>
    </form>
  );
};
