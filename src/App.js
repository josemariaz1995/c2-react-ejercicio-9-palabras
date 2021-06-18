import { useState } from "react";
import { Palabras } from "./components/Palabras";
import { PalabraAnyadida } from "./components/PalabraAnyadida";
import { palabras } from "./data/palabras";
function App() {
  const [palabrasCuadro, setPalabra] = useState(palabras);
  const [palabrasAnyadidas, setPalabrasAnyadidas] = useState([]);
  const [idNuevo, setIdNuevo] = useState(0);
  const anyadirPalabra = (palabra) => {
    setPalabrasAnyadidas([...palabrasAnyadidas, { ...palabra, id: idNuevo }]);
    setIdNuevo(idNuevo + 1);
  };
  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          {palabrasCuadro.map((palabra) => (
            <Palabras
              key={palabra.id}
              palabra={palabra}
              setIdNuevo={setIdNuevo}
              anyadirPalabra={anyadirPalabra}
            />
          ))}
        </ul>

        <ul className="resultado">
          {!!palabrasAnyadidas &&
            palabrasAnyadidas.map((palabra) => (
              <PalabraAnyadida key={palabra.id} palabra={palabra} />
            ))}
        </ul>
      </section>
      <section className="crear-palabras">
        <form className="form-palabras">
          <div className="form-grupo">
            <input type="text" placeholder="Nueva palabra" required />
          </div>
          <div className="form-grupo">
            <select required>
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
              <input type="checkbox" /> Es un lenguaje de programación
            </label>
          </div>
          <div className="form-grupo">
            <button type="submit" disabled>
              Crear
            </button>
          </div>
        </form>
      </section>
      <section className="info">
        <ul>
          <li>
            Nº de palabras <span>15</span>
          </li>
          <li>
            Nº de caracteres <span>74</span>
          </li>
          <li>
            Longitud media <span>5.32</span>
          </li>
          <li>
            Contiene 2 lenguaje/s de programación
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
