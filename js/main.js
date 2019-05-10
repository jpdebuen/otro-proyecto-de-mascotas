$("#submit-button").click(()=>{
  let name = $("#pet-name").val();
  let description = $("#pet-description").val();
  let photo = $("#pet-photo").val();
  let petObject = {name,description,photo};
  console.log(petObject);
  addPet(petObject);
})

$("#cancel-form-button").click(()=>{
  $("#pet-name").val("");
  $("#pet-description").val("");
  $("#pet-photo").val("");
})

/*método get*/
function getData(){
  $.ajax({
      url: "https://jquerycrud-ed8dc.firebaseio.com/jorge.json",
      type: "GET",
      success: function(response){
          printData(response)
      }
  });
}

/*método post*/
function addPet(petObject){
  $.post( "https://jquerycrud-ed8dc.firebaseio.com/jorge.json", 
  JSON.stringify(petObject), 
  function( data ) {
    getData();
  }, "json");
}

function updateData(){
    $.ajax({
       url: 'https://jquerycrud-ed8dc.firebaseio.com/jorge/-LeJgLYcUIR1OwHL49pW.json',
       type: 'PUT',
       data: JSON.stringify(postObject),
       success: function(response) {
         console.log(response)
       }
    });
}

function deleteData(){
    $.ajax({
       url: `https://jquerycrud-ed8dc.firebaseio.com/jorge/-LeUODJvpgbZDej8N8IE.json`,
       type: 'DELETE',
       success: function(response) {
         console.log(response)
       }
    });
}

function printData(dataToPrint) {
  $.each(dataToPrint,(key,value)=>{
    console.log(`key ${key}, value ${value}, name ${value.name}, description: ${value.description}`)
    $(".cards-wrapper").append(
        `<div class="col col-sm-6 col-md-4 mb-4">
          <div class="card">
            <img src="${value.photo}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${value.name}</h5>
              <p class="card-text">${value.description}</p>
              <a href="#" class="btn btn-primary">¡Adoptar!</a>
            </div>
          </div>
        </div>`
      )
  })
}