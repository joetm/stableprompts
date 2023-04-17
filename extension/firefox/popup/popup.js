document.getElementById("input-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const exampleInput = document.getElementById("example-input").value;
  // Do something with the input values
  console.log("Example input:", exampleInput);
});
