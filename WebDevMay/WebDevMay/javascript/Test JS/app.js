// const getValueInput = () =>{
//     let inputValue = document.getElementById("temperature").value; 
//     document.getElementById("valueInput").innerText = inputValue >=20 ? "My advice: don't wear a coat":"My advice: wear a coat"; 
//   }

  function getValueInput() {
  let inputValue = document.getElementById("temperature").value;
  document.getElementById("valueInput").innerText = inputValue >= 20 ? "My advice: don't wear a coat" : "My advice: wear a coat";
}