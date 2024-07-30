var res= fetch("https://emojihub.yurace.pro/api/all")
res.then((data)=>{
    return data.json()
}).then((data1)=>foo(data1)).catch((error)=>console.log(error))

var container = document.createElement("div");
container.className ="container";

var row = document.createElement("div");
row.className = "row";
 
function foo(data1){
    console.log(data1);
     for(var i=0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML=`<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Smiley</h5>
      <p class="card-text">${data1[0].category}</p>
      <p class="card-text">${data1[0].group}</p>
      <p class="card-text">${data1[0].htmlCode}</p>
      <p class="card-text">${data1[0].name}</p>
      <p class="card-text">${data1[1].category}</p>
      <p class="card-text">${data1[1].group}</p>
      <p class="card-text">${data1[1].htmlCode}</p>
      <p class="card-text">${data1[1].name}</p>
      <p class="card-text">${data1[4].category}</p>
      <p class="card-text">${data1[4].group}</p>
      <p class="card-text">${data1[4].htmlCode}</p>
      <p class="card-text">${data1[4].name}</p>
      <p class="card-text">${data1[4].unicode}</p>

      
    



    </div>
  </div>
`

  
  row.append(col);
  container.append(row);
  document.body.append(container);   
}
}
