//Login form 
const display=()=>{
    document.querySelector('.pop_up').classList.add('active');
}
const Close=()=>{
    document.querySelector('.pop_up').classList.remove('active');
}

 //signup
const signup=()=>{
    // console.log("hello");
    document.querySelector('.pop-up2').classList.add('active');
}
const closeSignup=()=>{
    document.querySelector('.pop-up2').classList.remove('active');
}

let password=document.getElementById('password');
let is=true;
let hide=docuemnt.querySelector('.icon .hide');
hide.addEventListener('click',function(){
    if(is){
        password.setAttribute('type','text');
        document.querySelector('.hide').innerHTML="&#127765;";
        //password.type="text";
    }
    else{
        password.setAttribute("type","password");
        document.querySelector('.hide').innerHTML="&#127763;"
    }
    is=!is;
})
// const toggle1=()=>{
//     // document.querySelector('.show').classList.add('active');
//     // document.querySelector('.hide').classList.remove('active');
//     if(is){
//         password.setAttribute('type','text');
//         document.querySelector('.hide').innerHTML="&#127765;";
//         //password.type="text";
//     }
//     else{
//         password.setAttribute("type","password");
//         document.querySelector('.hide').innerHTML="&#127763;"
//     }
//     is=!is;
// }

// const toggle2=()=>{
//     // document.querySelector('.show').classList.remove('active');
//     // document.querySelector('.hide').classList.add('active');
//     // if(password.type==="password"){
//     //     password.type="text";
//     // }
//     // else{
//     //     password.type="password";
//     // }
//     document.querySelector('.show').
// }
//Education div 

const show1=()=>{
    document.getElementById('sub').style.display="block";
    document.getElementById('notes').style.display="none";
    document.getElementById('papers').style.display="none";

}
const show2=()=>{
    console.log('tea');
    document.getElementById('sub').style.display="none";
    document.getElementById('notes').style.display="block";
    document.getElementById('papers').style.display="none";

}
const show3=()=>{
    document.getElementById('sub').style.display="none";
    document.getElementById('notes').style.display="none";
    document.getElementById('papers').style.display="block";
}
