import { useEffect, useState } from "react";

export const DatosRelevantes = (props) => {
  const { palabrasAnyadidas } = props;

  const [numeroCaracteres, setNumeroCaracteres] = useState(0);
  const [longitudMedia, setLongitudMedia] = useState(0);
  useEffect(() => {
    setNumeroCaracteres(
      palabrasAnyadidas.reduce(
        (contador, palabra) => palabra.palabra.length + contador,
        0
      )
    );
    setLongitudMedia(
      Math.round((numeroCaracteres / palabrasAnyadidas.length) * 100) / 100
    );
  }, [numeroCaracteres, palabrasAnyadidas]);

  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{palabrasAnyadidas.length}</span>
        </li>
        <li>
          Nº de caracteres <span>{numeroCaracteres}</span>
        </li>
        <li>
          Longitud media <span>{longitudMedia}</span>
        </li>
        <li>
          Contiene 2 lenguaje/s de programación
          <ul>
            {palabrasAnyadidas.map(
              (palabra) => !!palabra.lenguaje && <li>{palabra.palabra}</li>
            )}
          </ul>
        </li>
      </ul>
    </section>
  );
};
