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
              (palabra) =>
                !!palabra.lenguaje && (
                  <li key={palabra.id}>{palabra.palabra}</li>
                )
            )}
          </ul>
        </li>
      </ul>
    </section>
  );
};
