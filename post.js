


function validation(){
    var first=document.getElementById("validationCustom01").value;
    var regName = (/^[a-zA-Z]/);
    if(regName.test(first)){

         document.getElementById("validationCustom01").style.border= "1px solid green";
        //  alert("valid username");
    }  
    else{
        document.getElementById("validationCustom01").style.border= "1px solid red";
        document.getElementById("validationCustom01").focus();
        // alert("incorrect")
        return false;
    }

    
    var secondn=document.getElementById("validationCustom02").value;
    if(regName.test(secondn)){
        document.getElementById("validationCustom02").style.border="1px solid green";
        
    }else{
        document.getElementById("validationCustom02").style.border="1px solid red";
        document.getElementById('validationCustom02').focus();
        // alert("incorrect")
        return false;
    }


    var gmail=document.getElementById("Email1").value;
    // alert("incorrect")

    // var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if(gmail==""){
        document.getElementById("Email1").style.border="1px solid red";
        document.getElementsById("Email1").focus();
        return false;

    }
    else{
        document.getElementById("Email1").style.border="1px solid green";
        // alert("correct");

    }


    var phno=document.getElementById("typePhone").value;
    var phoneno =(/^[7-9][0-9]{9}/);
    if(phoneno.test(phno)){
        document.getElementById("typePhone").style.border="1px solid green";
        
    }else{
        document.getElementById("typePhone").style.border="1px solid red";
        document.getElementById('typePhone').focus();
        // alert("")
        return false;
    }



    var usern=document.getElementById("username").value;
    // var nameRegex = (/^[a-zA-Z\-]+$/);
    if(regName.test(usern)){
        document.getElementById("username").style.border="1px solid scagreen";
        
    }else{
        document.getElementById("username").style.border="1px solid red";
        document.getElementById('username').focus();
        // alert("incorrect")
        return false;
    }



    // var pass=document.getElementById("").value;
    // var passw=  (/^[A-Za-z]\w{7,14}/);
    //     if(passw.test(pass)){
    //     document.getElementById("password").style.border="1px solid green";
        
    // }else{
    //     document.getElementById("password").style.border="1px solid red";
    //     document.getElementById("password").focus();
    //     // alert("incorrect")
    //     return false;
    // }


    var dob=document.getElementById("date").value;
    if(dob==""){
        document.getElementById("date").style.border="1px solid red";
        document.getElementById("date").focus();
        return false;

    }else{
        document.getElementById("date").style.border="1px solid green";
           
    }


    var qlfc=document.getElementById("Qualification").value;
    if( qlfc!=""){
        document.getElementById("Qualification").style.border="1px solid green";

    }else{
        document.getElementById("Qualification").style.border="1px solid red";
            document.getElementById("Qualification").focus();
            // alert("incorrect")
            return false;
    }


    var adrs=document.getElementById("homename").value;
    if(adrs!=""){
        document.getElementById("homename").style.border="1px solid green";
        // alert("correct");
        

    }else{
        document.getElementById("homename").style.border="1px solid red";
            document.getElementById("homename").focus();
            // alert("incorrect")
            return false;
    }


    var city=document.getElementById("city").value;
    if(city!=""){
        document.getElementById("city").style.border="1px solid green";
        // alert("correct");
        

    }else{
        document.getElementById("city").style.border="1px solid red";
            document.getElementById("city").focus();
            // alert("inczorrect")
            return false;
    }


    var pinno=document.getElementById("pin").value;
    if(pinno!=""){
        document.getElementById("pin").style.border="1px solid green";
        // alert("correct");
        

    }else{
        document.getElementById("pin").style.border="1px solid red";
            document.getElementById("pin").focus();
            // alert("incorrect")
            return false;
    }


   if (true){

    // document.getElementById("staticBackdrop").style.display="none";
    // document.getElementByClassName("modal-backdrop").style.display="none";


   }

   reload();

};

// class="modal-backdrop fade show"























const post=document.getElementById("main");



post.addEventListener('submit',function(e){
    e.preventDefault();
    
    var imagefile=document.getElementById("formFile").value;


    var salutation=document.getElementById("user").value;
    
    var first=document.getElementById("validationCustom01").value;
    
    var last=document.getElementById("validationCustom02").value;

    var gmail=document.getElementById("Email1").value;

    var phNo=document.getElementById("typePhone").value;

    var username=document.getElementById("username").value;

    var password=document.getElementById("password").value;

    var dobirth=document.getElementById("date").value;
    var dformat=formatchange(dobirth);

    function formatchange(dob){
        const array=dob.split("-");
        let day=array[0];
        let month=array[1];
        let year=array[2];

        let dateformat=year + "-" + month + "-" + day;
        return dateformat;


    
    }
   



    var rbton=document.getElementsByClassName("Gender");
    for (i=0 ; i<rbton.length ;i++){      
        if(rbton[i].checked)
            var gender=rbton[i].value;
        console.log(gender)
    }

    var qualification=document.getElementById("Qualification").value;
    
    var address=document.getElementById("homename").value;

    var country=document.getElementById("Country").value;

    var state=document.getElementById("state").value;

    var city=document.getElementById("city").value;

    var pin=document.getElementById("pin").value;


    



    console.log(imagefile,salutation , first ,last , gmail ,phNo , dformat , gender,address,country,state,city,pin,username,password,qualification);
    console.log(dformat);

 const details={
    imgfile:imagefile,
    salutation:salutation,
    firstName:first,
    lastName:last,
    email:gmail,
    phone:phNo,
    dob: dformat,
    gender:gender,
    address: address,
    country:country,
    state:state,
    city:city,
    pin:pin,
    username:username,
    password:password,
    qualifications:qualification,


 }

 fetch("http://localhost:3000/employees",{
    method:'post', headers:{
        'content-type':'application/json'
    },
    
    body:JSON.stringify(details)

   

 })


 .then(res => res.json())
 .then(data=>{
    console.log(data);

    refresh();

 })
 console.log(details);

})



// ==================================for validation==================================//



















