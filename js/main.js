//signUp 
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
//signIn
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
//wellcom page
let welcomeHome = document.getElementById("welcomeTitle");

var BigData = [];

if (localStorage.getItem('userData') !=null) {
    
    BigData=JSON.parse( localStorage.getItem('userData') );
           
}
else{
    BigData=[];
}

function addData() {

    let emailIsExist = false ;

    if(input1.value == "" || input2.value == "" || input3.value == "") {
                
        alert("Please fill required info");
    
    }
    else{

        data ={
            name : input1.value ,
            email : input2.value , 
            password : input3.value ,
        };
    
        for (let i = 0; i < BigData.length; i++) {
            
            if (BigData[i].email == input2.value) {
    
                emailIsExist = true;
            }
            
        }
    
        if (emailIsExist == false) {

            BigData.push(data);
            localStorage.setItem("userData" , JSON.stringify(BigData));
    
            document.querySelector('.test').classList.remove('d-none');
            document.querySelector('.test2').classList.add('d-none');
        }
        else{
    
            document.querySelector('.test2').classList.remove('d-none');
            document.querySelector('.test').classList.add('d-none');
        }

    }
    
    clearAll();

}

function clearAll() {
    input1.value ="";
    input2.value ="";
    input3.value ="";
}
function clearAll2() {
    input4.value ="";
    input5.value ="";
}

function checkData() {
    
    if(input4.value == "" || input5.value == "" ) {
                
        alert("Please fill required info");
    
    }
    else{

        for (let i = 0; i < BigData.length; i++) {
        
            if (BigData[i].email == input4.value && BigData[i].password == input5.value) {
                
                localStorage.setItem("userName", BigData[i].name)

                window.location.href = 'wellcom.html';
            }
            else{
            
                document.querySelector('.test3').classList.remove('d-none');
             
            }
            
        }

    }
    
    
    clearAll2();
}

if(localStorage.getItem("userName") != null){

    document.getElementById("welcomeTitle").innerHTML = `Welcome ${localStorage.getItem("userName")}`;

}
