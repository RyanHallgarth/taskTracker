import PropTypes from "prop-types";
import Button from "./Button.js";

/* 
    Instead of passing in 'props', props is destructured to pass in
    individual properties. Otherwise, I'd have to write props.title, props.showAdd ect.
    
*/
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      {/* 
        -title is being defined and passed into Header from defaultProps below 
        -Button component is being rendered
        with 3 props being passed in: color, text, & onClick
        
        */}
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

/* Just an example of how to set default props.  Would usually just type
'Task Tracker' in the <h1> and not pass 'title' in as a prop. */
Header.defaultProps = {
  title: "Task Tracker",
};

/* propTypes is used to constrain variable types, could be useful
in larger applications for debugging */
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
