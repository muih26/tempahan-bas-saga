function checkKenderaan(){

var k = document.getElementById("kenderaan").value

if(k=="Lain-lain"){
document.getElementById("lain").style.display="block"
}
else{
document.getElementById("lain").style.display="none"
}

}


function hantar(){

var pemandu=[]

if(document.getElementById("faizal").checked)
pemandu.push("En. Faizal")

if(document.getElementById("nuri").checked)
pemandu.push("En. Nuri")


var data={

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
kenderaanLain:document.getElementById("kenderaanLain").value,

pemandu:pemandu.join(", ")

}


fetch("https://script.google.com/macros/s/AKfycbxadg3jzotgg2cyTAoO8sJnlbWZs0LfNAbsNWnevVMMCEaA8uvKwmc7kpwOwuqBHlcwxQ/exec",{

method:"POST",
body:JSON.stringify(data)

})

.then(res=>res.json())

.then(res=>{

alert("Tempahan berjaya dihantar!")

})

}
