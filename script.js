// ===============================
// SISTEM TEMPAHAN BAS SAGA
// SM SAINS ALOR GAJAH
// ===============================


// Papar ruangan jika pilih kenderaan lain
function checkKenderaan(){

var kenderaan = document.getElementById("kenderaan").value

if(kenderaan === "Lain-lain"){

document.getElementById("lain").style.display = "block"

}else{

document.getElementById("lain").style.display = "none"

}

}



// Hantar tempahan ke Google Sheets
function hantar(){

// ambil pemandu
var pemandu = []

if(document.getElementById("faizal").checked){
pemandu.push("En. Faizal")
}

if(document.getElementById("nuri").checked){
pemandu.push("En. Nuri")
}



// bina data tempahan
var data = {

tarikhMohon : document.getElementById("tarikhMohon").value,
aktiviti : document.getElementById("aktiviti").value,
tempat : document.getElementById("tempat").value,
nama : document.getElementById("nama").value,
jawatan : document.getElementById("jawatan").value,

lelaki : document.getElementById("lelaki").value,
perempuan : document.getElementById("perempuan").value,
guru : document.getElementById("guru").value,

tarikhPergi : document.getElementById("tarikhPergi").value,
masaPergi : document.getElementById("masaPergi").value,
masaBalik : document.getElementById("masaBalik").value,

kenderaan : document.getElementById("kenderaan").value,
kenderaanLain : document.getElementById("kenderaanLain").value,

pemandu : pemandu.join(", ")

}



// URL GOOGLE APPS SCRIPT
var url = "https://script.google.com/macros/s/AKfycbxadg3jzotgg2cyTAoO8sJnlbWZs0LfNAbsNWnevVMMCEaA8uvKwmc7kpwOwuqBHlcwxQ/exec"



// hantar ke Google Sheet
fetch(url, {

method: "POST",

body: JSON.stringify(data),

headers:{
"Content-Type":"application/json"
}

})

.then(response => response.json())

.then(result => {

alert("Tempahan bas berjaya dihantar!")

// reset borang selepas hantar
document.querySelectorAll("input").forEach(input => input.value="")

})

.catch(error => {

alert("Ralat menghantar tempahan")

console.log(error)

})

}
