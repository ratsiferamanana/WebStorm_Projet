const button = document.querySelector('button');
const efface = document.getElementById("efface");
let ariary_value = document.getElementById("ariary");
let euro_value = document.getElementById("euro");


button.addEventListener('click', (e) => {

  if (ariary_value.value!=="" && euro_value.value==""){
      euro_value.value = ariary_value.value / 5000;
    e.preventDefault();


  }
  else if (euro_value.value!=="" && ariary_value.value==""){
      ariary_value.value = euro_value.value * 5000;
  }
  else alert("Champ vide 😥");

});

efface.addEventListener("click", (e) =>{
  ariary_value.value = "";
  euro_value.value = "";
})

const prompt = require("prompt-sync");
