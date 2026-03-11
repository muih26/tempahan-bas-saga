function hantarTempahan(){

let kenderaan=[];
let pemandu=[];


if(document.getElementById("bas").checked){
kenderaan.push("Bas");
}

if(document.getElementById("coaster").checked){
kenderaan.push("Coaster");
}

if(document.getElementById("van").checked){
kenderaan.push("Van");
}


if(document.getElementById("faizal").checked){
pemandu.push("En. Faizal");
}

if(document.getElementById("nuri").checked){
pemandu.push("En. Nuri");
}


if(kenderaan.length==0){

alert("Sila pilih kenderaan");

return;

}


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
tarikhPulang:document.getElementById("tarikhPulang").value,

masaPergi:document.getElementById("masaPergi").value,
masaBalik:document.getElementById("masaBalik").value,

kenderaan:kenderaan.join(", "),
pemandu:pemandu.join(", ")

};


fetch("https://script.google.com/macros/s/AKfycbwrdgim3pmI1lo2CXzxRPqSu5sNpyzaFqsgdiX6gciEmM8yRQgSOZCEs1BhEmr8AY3YrA/exec",{

method:"POST",
mode:"no-cors",
body:JSON.stringify(data)

})

.then(()=>{

alert("Tempahan berjaya dihantar");

document.getElementById("borangTempahan").reset();

setTimeout(function(){

window.location.href="dashboard.html";

},1000);

});

}

