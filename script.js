function hantar(){

let pemandu=[];

if(document.getElementById("faizal").checked){
pemandu.push("En. Faizal");
}

if(document.getElementById("nuri").checked){
pemandu.push("En. Nuri");
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

kenderaan:document.getElementById("kenderaan").value,
pemandu:pemandu.join(", ")

};

fetch("https://script.google.com/macros/s/AKfycbxEo_Zz5jdZCaLZigjbestPtdlwc4mEEKKqo9BmbAcTOGQFN53H0IDSY0p3H78MuPfmNw/exec",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

.then(response=>response.json())

.then(res=>{

alert("✅ Tempahan berjaya dihantar!");

document.getElementById("borangTempahan").reset();

setTimeout(function(){

window.location.href="dashboard.html";

},1500);

})

.catch(error=>{
console.log(error);
});

}

