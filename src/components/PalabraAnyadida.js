export const PalabraAnyadida = (props) => {
  const { palabra } = props;
  return palabra.lenguaje ? (
    <li data-lenguaje="si">{palabra.palabra}</li>
  ) : (
    <li>{palabra.palabra}</li>
  );
};
