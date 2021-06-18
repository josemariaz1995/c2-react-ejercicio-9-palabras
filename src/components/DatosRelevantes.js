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
  const palabrasRepetidas = palabrasAnyadidas.map((palabra) => {
    if (palabra.lenguaje) {
      return palabra.palabra;
    }
  });
  const palabrasSinRepetir = palabrasRepetidas.filter((palabra, i, array) => {
    if (array.indexOf(palabra) === i) {
      return palabra;
    }
  });
  console.log(palabrasSinRepetir);
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
          Contiene {palabrasSinRepetir.length} lenguaje/s de programación
          <ul>
            {palabrasSinRepetir.map((palabra) => (
              <li>{palabra}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};
