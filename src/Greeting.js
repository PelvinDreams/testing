

function Greating(props) {
  const isLoggedIn = true;

  if(isLoggedIn) {
    return <h1>Welcome {props.username}!</h1>;
  } else {
    return <h1>Please sign in</h1>;
  }
}


export default Greating; 