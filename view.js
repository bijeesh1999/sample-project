let viewdetails= new URLSearchParams(document.location.search);
let id=viewdetails.get('id');
// console.log(id);
// alert("warning");


function viwempdetails(id){
    // alert("warning");

    fetch(`http://localhost:3000/employees/${id}`,{
        method:"GET",

    })


    
   






    .then(res => res.json())
    .then(employe =>{
        // console.log(employe);

       
        

        // alert(mmm);
        const empdetails=document.getElementById("employeedet");


       
    
        empdetails.innerHTML=`

        <div class="empdet">
        <div class="bgimg">
            <img src="img/empbg.png" alt="">
            <div class="empfinal">
                <img src="img/emp.png">
            </div>
            <div class="namemale">
                <div class="name">
                    <h3>${employe.firstName +" "+ employe.lastName}</h3>
                </div>
                <div class="email">
                    <p>${employe.email}</p>
                </div>
            </div>
        </div>
        <div class="row profile">
            <div class="col"> <label for="">Gender</label><p>${employe.gender}</p></div>
            <div class="col" id="age"><label for="">Age</label><p id="ageof"></p></div>
            <div class="col"><label for="">Date of Birth</label><p>${employe.dob}</p></div>
        </div>
        <div class="row profile">
            <div class="col"> <label for="">MObile number</label><p>${employe.phone}</p></div>
            <div class="col"> <label for="">Qualifications</label><p>${employe.qualifications}</p></div>
            <!-- <div class="col"></div> -->
        </div>
        <div class="row profile">
            <div class="col"> <label for="">Address</label><p>${employe.address}</p></div>
            <div class="col"> <label for="">Username</label><p>${employe.username}</p></div>
            <!-- <div class="col"></div> -->
        </div>
        <div class="row profile probtn mb-0">
            <div class="buttoncol">
                <button class="btn btn-danger py-3 px-4">Delete</button>
                <button class="btn btn-primary py-3 px-4">Edit Details</button>
            </div>
        </div>
        
      </div> `;


      var dmy=employe.dob;
      var myd=format(dmy);
    //   console.log(myd);

      var age=ageCalc(myd);
      console.log(age);

      document.getElementById("ageof").innerHTML=age;
    





    //   var dformat=formatchange(dobirth);

      function format(dmy){
          const array=dmy.split("-");
          let day=array[0];
          let month=array[1];
          let year=array[2];
  
          let dateformat=year + "-" + month + "-" + day;
          return dateformat;
  
      };
        

      function ageCalc(myd){
        var birthDate = new Date(myd);
        var currentDate = new Date();
       console.log(currentDate);
       console.log(birthDate);
       var age = currentDate.getFullYear()-birthDate.getFullYear();

    //    console.log(age);
        return age;
        }  
    })
};

viwempdetails(id);









