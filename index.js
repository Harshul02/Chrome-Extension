let myLeads=["www.awesome.com", "www.epiclead.com", "www.greatlearn.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
})

for(let i=0; i<myLeads.length; i++)
{
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}
