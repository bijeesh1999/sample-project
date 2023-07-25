console.log("good mornning");


fetch("http://localhost:3000/employees")

.then((res)=>res.json())
.then((employees)=>{
    console.log((employees))
    const table = document.getElementById("EmpTable");
    table.innerHTML = "";


    var i=1;
    employees.forEach((employ) => {

    var id=employ.id;

        const elements=table.insertRow();
        var sino=elements.insertCell();
        sino.innerHTML=i;


        var name=elements.insertCell();
        name.innerHTML=employ.firstName +" "+ employ.lastName; 


        var gmail=elements.insertCell();
        gmail.innerHTML=employ.email;



        var phoneno=elements.insertCell();
        phoneno.innerHTML=employ.phone;
        

        var gender=elements.insertCell();
        gender.innerHTML=employ.gender;

        var state=elements.insertCell();
        state.innerHTML=employ.state;
         
        var country=elements.insertCell();
        country.innerHTML=employ.country;



        

        // var dots=elements.insertCell();
        // dots.innerHTML=`
        // <button class="dropdown" id="dropdownMenuButton1"" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></button>
        // <div id="rud"class="dropdown-menu>
        // <button class="action" onclick="view();"><i class="fa fa-sharp fa-light fa-eye" id="buttonDropdown_action"></i>view</button>
        // <button class="action" onclick="edit();"><i class="fa fa-sharp fa-light fa-pen" id="buttonDropdown_action"></i>edit</button>
        // <button class="action" onclick="delete()";><i class="fa fa-sharp fa-light fa-trash" id="buttonDropdown_action"></i>delete</button>
        // </div>`;
     
     var dots=elements.insertCell();  
     dots.innerHTML=`   
        <button class="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
        </button>
        <ul class="dropdown-menu "id="boot" aria-labelledby="dropdownMenuButton1">
            <button class="action"><a class="link" href="http://127.0.0.1:5501/form.html?id=${id}" target="_blank"><i class="fa fa-sharp fa-light fa-eye" id="buttonDropdown_action" ></i>view</a></button>


            <button class="action" data-bs-toggle="modal" data-bs-target="#viewempmodal" onclick="update('${id}')"><i class="fa fa-sharp fa-light fa-pen" id="buttonDropdown_action"></i>edit</button>



            <button class="action" onclick="deldet('${employ.id}')"><i class="fa fa-sharp fa-light fa-trash" ></i>delete</button>
        </ul>`


      

        i++;
    });




})


// function button(){
//     document.querySelector('#rud').style.display="flex";
// }
// function button(event){
//     targetElement = event.target.nextElementSibling;
//     targetElement.classList.toggle("selected");
// }



function deldet(id){
    

    document.getElementById("popup").style.visibility="visible";
    // document.getElementById("popup").style.trasition="1";
    // document.getElementById("shade").style.visibility="visible";
    // return id;




//     fetch(`http://localhost:3000/employees/${id}`,{
//         method:"DELETE",

// })

return id;


}

function deleting(id){


    alert(id);

}

// alert(va);


// function delet(va){
// // id=`${va}`;
// alert(id);
// //     // alert(id);
// //     document.getElementById("popup").style.visibility="hidden";
// //     // alert("employee deleted succesfully");


    

// //     // document.innerHTML="";
// }

function cancel(){
    

    document.getElementById("popup").style.visibility="hidden";
    // document.getElementById("shade").style.visibility="visible";
    
}