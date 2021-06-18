import PropTypes from "prop-types";

export const PalabraAnyadida = (props) => {
  const { palabra, borrarPalabras } = props;
  return (
    <li
      data-lenguaje={palabra.lenguaje ? "si" : "no"}
      onClick={() => borrarPalabras(palabra)}
    >
      {palabra.palabra}
    </li>
  );
};

PalabraAnyadida.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    lenguaje: PropTypes.bool.isRequired,
  }),
  borrarPalabras: PropTypes.func.isRequired,
};
