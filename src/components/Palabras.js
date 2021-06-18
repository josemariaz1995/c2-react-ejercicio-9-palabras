import PropTypes from "prop-types";
/* eslint-disable react/react-in-jsx-scope */
export const Palabras = (props) => {
  const { palabra, anyadirPalabra, setIdNuevo } = props;
  // eslint-disable-next-line no-extra-boolean-cast
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
