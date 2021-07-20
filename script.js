
function check(){
    var user1;
	var user2;
	user1=document.getElementById("u1").value;
	user2=document.getElementById("u2").value;
	console.log(user1);
	console.log(user2);
	
	if (user1=="rock" && user2=="scissors"){
		   document.getElementById("placeholder").innerHTML="Rock wins!";
     }
	 else if (user1=="scissors" && user2=="rock"){
		   document.getElementById("placeholder").innerHTML="Rock wins!";	   		   
     }
	 else if (user1=="scissors"&& user2=="paper"){
		   document.getElementById("placeholder").innerHTML="Scissors wins!";
	 }
	else if (user1=="paper"&& user2=="scissors"){
		   document.getElementById("placeholder").innerHTML="Scissors wins!";
	}
	else if (user1=="paper" && user2=="rock"){
		   document.getElementById("placeholder").innerHTML="Paper wins!";
	}
	else if (user1=="rock" && user2=="paper"){
		   document.getElementById("placeholder").innerHTML="Paper wins!";
	}
		 
	 else{
		 document.getElementById("placeholder").innerHTML="Invalid input,please try again";
	}
 }


