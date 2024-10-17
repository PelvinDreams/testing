function MyForm() {

  const handleSubmit = (event) => {
    event.preventDefault();  // Correct spelling
    console.log("Form Submitted");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
  
export default MyForm;
