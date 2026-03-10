function hantar(){

let pemandu=[]

if(document.getElementById("faizal").checked)
pemandu.push("En. Faizal")

if(document.getElementById("nuri").checked)
pemandu.push("En. Nuri")

let data={

tarikhMohon:document.getElementById("tarikhMohon").value,
aktiviti:document.getElementById("aktiviti").value,
tempat:document.getElementById("tempat").value,
nama:document.getElementById("nama").value,
jawatan:document.getElementById("jawatan").value,

lelaki:document.getElementById("lelaki").value,
perempuan:document.getElementById("perempuan").value,
guru:document.getElementById("guru").value,

tarikhPergi:document.getElementById("tarikhPergi").value,
masaPergi:document.getElementById("masaPergi").value,
masaBalik:document.getElementById("masaBalik").value,

kenderaan:document.getElementById("kenderaan").value,
pemandu:pemandu.join(", ")

}

fetch("https://script.google.com/macros/s/AKfycbxvokDAbgA9mp9Sevt2Q5F5alnyJjwW7Jftq2zpxoSguOf2u787Sgka2CD7zZVRN658VA/exec",{

method:"POST",
body:JSON.stringify(data)

})

.then(res=>res.json())

.then(res=>{

alert("✅ Tempahan anda berjaya dihantar!");

document.querySelector("form").reset();

})

}

