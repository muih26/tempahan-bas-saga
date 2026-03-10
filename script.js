const URL = "https://script.google.com/macros/s/AKfycbxadg3jzotgg2cyTAoO8sJnlbWZs0LfNAbsNWnevVMMCEaA8uvKwmc7kpwOwuqBHlcwxQ/exec";

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

alert("Tempahan berjaya!")

})

}

function loadDashboard(){

fetch(URL)

.then(res=>res.json())

.then(data=>{

let table=""

data.forEach(row=>{

table+=`
<tr>

<td>${row.nama}</td>
<td>${row.tarikh}</td>
<td>${row.aktiviti}</td>
<td>${row.pemandu}</td>
<td>${row.kenderaan}</td>

</tr>
`

})

document.getElementById("dataTempahan").innerHTML=table

})

}

function downloadPDF(){

window.print()

}
