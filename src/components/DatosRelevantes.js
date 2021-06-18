export const DatosRelevantes = (props) => {
  const { palabrasAnyadidas } = props;

  const numeroCaracteres = palabrasAnyadidas.reduce(
    (contador, palabra) => palabra.palabra.length + contador,
    0
  );
  const longitudMedia =
    Math.round(
      (numeroCaracteres === 0 && palabrasAnyadidas.length === 0
        ? 0
        : numeroCaracteres / palabrasAnyadidas.length) * 100
    ) / 100;
  const palabrasRepetidas = palabrasAnyadidas
    .map((palabra) => {
      if (palabra.lenguaje) {
        return palabra.palabra;
      }
      return "";
    })
    .filter((palabra, i, array) => {
      if (array.indexOf(palabra) === i) {
        return palabra;
      }
      return "";
    });
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
          Contiene {palabrasRepetidas.length} lenguaje/s de programación
          <ul>
            {palabrasRepetidas.map((palabra) => (
              <li key={palabra}>{palabra}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
