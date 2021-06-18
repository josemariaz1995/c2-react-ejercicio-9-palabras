import PropTypes from "prop-types";
export const Palabras = (props) => {
  const { palabra, anyadirPalabra } = props;
  return (
    <li
      data-lenguaje={palabra.lenguaje ? "si" : "no"}
      onClick={() => anyadirPalabra(palabra)}
    >
      {palabra.palabra}
    </li>
  );
};

Palabras.propTypes = {
  palabra: PropTypes.shape({
    palabra: PropTypes.string.isRequired,
    lenguaje: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
