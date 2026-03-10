const URL = "https://script.google.com/macros/s/AKfycbxaEm7o8hIe--aTlcw44V7sn_ulfQuOm8Y03z04veoqX__XHzrkWsHHd18S53hSjzOi/exec";

function hantar(){

let pemandu=[]

if(document.getElementById("faizal").checked)
pemandu.push("En. Faizal")

if(document.getElementById("nuri").checked)
pemandu.push("En. Nuri")

let data={

nama:document.getElementById("nama").value,
tarikh:document.getElementById("tarikhPergi").value,
aktiviti:document.getElementById("aktiviti").value,
pemandu:pemandu.join(", "),
kenderaan:document.getElementById("kenderaan").value

}

fetch(URL,{
method:"POST",
body:JSON.stringify(data)
})

.then(res=>res.json())
.then(res=>{
alert("Tempahan berjaya dihantar!")
})

}



function generatePDF(){

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let nama=document.getElementById("nama").value
let aktiviti=document.getElementById("aktiviti").value
let tempat=document.getElementById("tempat").value
let tarikh=document.getElementById("tarikhPergi").value
let masaPergi=document.getElementById("masaPergi").value
let masaBalik=document.getElementById("masaBalik").value
let jawatan=document.getElementById("jawatan").value
let kenderaan=document.getElementById("kenderaan").value

let pemandu=[]

if(document.getElementById("faizal").checked)
pemandu.push("En. Faizal")

if(document.getElementById("nuri").checked)
pemandu.push("En. Nuri")

doc.setFontSize(16)
doc.text("PERMOHONAN KENDERAAN SEKOLAH",20,20)

doc.setFontSize(12)

doc.text("Sekolah : SM Sains Alor Gajah",20,30)

doc.text("Nama Pemohon : "+nama,20,50)
doc.text("Jawatan : "+jawatan,20,60)

doc.text("Tujuan : "+aktiviti,20,80)
doc.text("Tempat : "+tempat,20,90)

doc.text("Tarikh Perjalanan : "+tarikh,20,110)
doc.text("Masa Pergi : "+masaPergi,20,120)
doc.text("Masa Balik : "+masaBalik,20,130)

doc.text("Kenderaan : "+kenderaan,20,150)
doc.text("Pemandu : "+pemandu.join(", "),20,160)

doc.text(" ",20,190)
doc.text("_________________________",20,200)
doc.text("Tandatangan Pemohon",20,210)

doc.text("_________________________",120,200)
doc.text("Pengesahan Pentadbir",120,210)

doc.save("borang_tempahan_bas.pdf")

}


