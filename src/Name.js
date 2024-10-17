

function Name() {
  const names = ["name1", "name2", "name3"];

  return (
    <ul>
         {names.map(name => {
    return <li>{name}</li>;
  })}
  </ul>


  );
}

export default Name;