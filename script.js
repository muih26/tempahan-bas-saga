const URL="https://script.google.com/macros/s/AKfycby6wnDHTMcQpyQnEHbwqtX5jbj45z_vvORbYQa7MdOQDUcs7I5bYYQaHcEK7lJGBzgdRg/exec";

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
