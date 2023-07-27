// let viewdetails= new URLSearchParams(document.location.search);
// let id=viewdetails.get('id');
// console.log(id);
// alert(id);


function update(id){
    // alert(id);

    fetch(`http://localhost:3000/employees/${id}`,{
        method:"GET",

    })

    .then(res => res.json())
    .then(employe =>{
        // alert(employe);
        // const empdetails=document.getElementById("formupdate");

        document.getElementById("user").value=employe.salutation;
        
        document.getElementById("validation01").value=employe.firstName;

        document.getElementById("validation02").value=employe.lastName;

        document.getElementById("exampleInputEmail1").value=employe.email;

        document.getElementById("typephone").value=employe.phone;

        document.getElementById("Username").value=employe.username;

        document.getElementById("Password").value=employe.password;


        // document.getElementById("date").value=employe.dob;
  
        document.getElementsByTagName("name").value=employe.gender;

        document.getElementById("qualification").value=employe.qualifications;


        document.getElementById("form7Example4").value=employe.address;

        document.getElementById("Country").value=employe.country;

        document.getElementById("state").value=employe.state;

        document.getElementById("City").value=employe.city;

        document.getElementById("pinno").value=employe.pin;

        var dobf=document.getElementById("date").value=employe.dob;
        // alert(dobf);


    //     var datee=employe.dob;
    //     // console.log(datee);
    //     var dformat=formatchange(datee);
    // // console.log(dformat);
    //     function formatchange(dob){
    //         // alert(dob);
    //         const array=dob.split("-");
    //         let dd=array[0];
    //         let mm=array[1];
    //         let yyyy=array[2];
    
    //         let dateformat=dd + "-" + mm + "-" + yyyy;
    //         return dateformat;
    //     }

    //     return dformat;


    //    document.getElementById("date").value=dformat;

    })

    




    var upobject=document.getElementById("formupdate")
    upobject.addEventListener('submit',function(e){
        e.preventDefault();

        // alert("formupdate");

        let upobj={
        salutation:document.getElementById("user").value,
        firstName:document.getElementById("validation01").value,
        lastName:document.getElementById("validation02").value,
        email:document.getElementById("exampleInputEmail1").value,
        phone:document.getElementById("typephone").value,


        dob:document.getElementById("date").value,

 




        
        gender:document.getElementsByTagName("name").value,

        username:document.getElementById("Username").value,

        password:document.getElementById("Password").value,

        qualifications:document.getElementById("qualification").value,




        address:document.getElementById("form7Example4").value,
        country:document.getElementById("Country").value,
        state:document.getElementById("state").value,
        city:document.getElementById("City").value,
        pin:document.getElementById("pinno").value,


        }
        console.log(upobj);
        // alert(upobj);

        fetch(`http://localhost:3000/employees/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",

            
        },

        body:JSON.stringify(upobj),





    })

    .then(res => res.json())
        .then(employe =>{console.log(employe)

            refresh();

        })
   
        document.getElementById("edit").style.display="grid";


    });



}




// empdetails.addEventListener('submit',function(e){
//     e.preventDefault();


//     alert("working");


    


// })





        


        


    

