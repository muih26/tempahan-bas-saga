const URL="https://script.google.com/macros/s/AKfycby6wnDHTMcQpyQnEHbwqtX5jbj45z_vvORbYQa7MdOQDUcs7I5bYYQaHcEK7lJGBzgdRg/exec";

function hantarTempahan(){

var data={

tarikhMohon:new Date().toISOString(),

aktiviti:document.getElementById("aktiviti").value,
tempat:document.getElementById("tempat").value,

nama:document.getElementById("nama").value,
jawatan:document.getElementById("jawatan").value,

pelajarLelaki:document.getElementById("lelaki").value,
pelajarPerempuan:document.getElementById("perempuan").value,
guru:document.getElementById("guru").value,

tarikhPergi:document.getElementById("tarikhPergi").value,
tarikhPulang:document.getElementById("tarikhPulang").value,

masaPergi:document.getElementById("masaPergi").value,
masaBalik:document.getElementById("masaBalik").value,

kenderaan:document.querySelector('input[name="kenderaan"]:checked')?.value || "",
kenderaanLain:document.getElementById("kenderaanLain").value,

pemandu:document.querySelector('input[name="pemandu"]:checked')?.value || ""

};


fetch(URL,{

method:"POST",
body:JSON.stringify(data)

})
.then(res=>res.json())
.then(res=>{

alert("Tempahan berjaya dihantar");

window.location.href="dashboard.html";

})
.catch(err=>{

alert("Tempahan gagal");

});

}
