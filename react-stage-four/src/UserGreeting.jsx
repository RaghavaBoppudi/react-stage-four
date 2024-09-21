function UserGreeting(props){

//if the user is logged in, print a message, else print another. You can use an if statement:
// if(props.isLoggedIn){
//   return(<h2>Welcome back, {props.username}</h2>)
// }else{
//   return(<h2>Welcome User, please log in to Continue</h2>)
// }

//or you can use the ternary operator as such:
// return(props.isLoggedIn ? <h2 className="welcome-message">Welcome back, {props.username}</h2> : <h2 className="login-message">Welcome User, Please log in to continue</h2>)
//returns first h2 element is condition is true, else returns the next h2 element.
// the above can be consisely written as follows:

const welcomeMessage = <h2 className="welcome-message">Welcome back, {props.username}</h2>
const loginMessage = <h2 className="login-message">Welcome User, Please log in to continue</h2>

return(props.isLoggedIn ? welcomeMessage : loginMessage);

}

//It is generally good practice to set PropTypes if you are using Props so as to prevent entering conflicting data types.
//For that, YOU NEED to import PropTypes from prop-types.
import PropTypes from 'prop-types';

//Now define proptype using key: value pairs
UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

//Also define default props as a fallback in case a prop isn't defined.
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest"
}

export default UserGreeting