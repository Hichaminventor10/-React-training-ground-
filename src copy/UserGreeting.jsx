import PropTypes from 'prop-types';

function UserGreeting(props) {
 
const Welcomemessage =  <h1 className="Welcome-message">Welcome back, <span>{props.username}!</span></h1>

const Loginprompt = <h1 className="Login-prompt" >Please sign up.</h1>

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}



UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
};

return (props.isLoggedIn ? (Welcomemessage) : (Loginprompt));

}
export default UserGreeting;

