import PropTypes from "prop-types";

/* 
    -color and text are being passed from Header component
    -onClick is being passed from App.js to Header, then to Button
    -style is in-line css, the backgroundColor is set to a variable
    that is determined in Header, making the color dynamic 
*/
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steeleblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
