import { useState } from "react";
import "@fontsource/montserrat";
import { Palabras } from "./components/Palabras";
import { PalabraAnyadida } from "./components/PalabraAnyadida";
import { palabras } from "./data/palabras";
import { AnyadirPalabra } from "./components/AnyadirPalabra";
import { DatosRelevantes } from "./components/DatosRelevantes";
function App() {
  const [palabrasCuadro, setPalabra] = useState(palabras);
  const [palabrasAnyadidas, setPalabrasAnyadidas] = useState([]);
  const [idNuevo, setIdNuevo] = useState(0);
  const anyadirPalabra = (palabra) => {
    setPalabrasAnyadidas([...palabrasAnyadidas, { ...palabra, id: idNuevo }]);
    setIdNuevo(idNuevo + 1);
  };
  const borrarPalabras = (palabras) => {
    setPalabrasAnyadidas(
      palabrasAnyadidas.filter((palabra) => palabras.id !== palabra.id)
    );
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
              <PalabraAnyadida
                key={palabra.id}
                palabra={palabra}
                borrarPalabras={borrarPalabras}
              />
            ))}
        </ul>
      </section>
      <section className="crear-palabras">
        <form className="form-palabras">
          <AnyadirPalabra />
        </form>
      </section>
      <DatosRelevantes palabrasAnyadidas={palabrasAnyadidas} />
    </>
  );
}

export default App;
