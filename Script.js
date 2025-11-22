var name = document.getElementById("inp1").value;
var Mail = document.getElementById("inp2").value;
var Message = document.getElementById("inp3").value;
/*  */
// var name = document.getElementById("s1").innerHTML = "";
// var Mail = document.getElementById("s1").innerHTML = "";
// var Message = document.getElementById("s1").innerHTML = "";

function Contact_Form(){
    if(name == ""){
         document.getElementById("s1").innerHTML = "Please write the full name.";
        //  return;
    }
    if(Mail == ""){
         document.getElementById("s2").innerHTML = "Please write the full email.";
        //  return;
    }
    if(Message == ""){
         document.getElementById("s3").innerHTML = "Please write the full Message.";
        //  return;
    }
}
