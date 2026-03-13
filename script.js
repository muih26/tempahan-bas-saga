const URL="https://script.google.com/macros/s/AKfycby9vgJC313b5FQf5KxFBjmr1WteTF41M_ZYorPxs76cqnBWlJ6Vz7imw_Dx8_QwiQOSEw/exec";

function hantarTempahan(){

let data = {

nama: document.getElementById("nama").value,
aktiviti: document.getElementById("aktiviti").value,
tarikhPergi: document.getElementById("tarikhPergi").value,
tarikhPulang: document.getElementById("tarikhPulang").value,
kenderaan: document.getElementById("kenderaan").value,
pemandu: document.getElementById("pemandu").value

};

fetch(URL,{
method:"POST",
body:JSON.stringify(data)
})
.then(response=>response.text())
.then(data=>{

alert("Tempahan berjaya dihantar");

})
.catch(error=>{

alert("Tempahan gagal");

});

}


