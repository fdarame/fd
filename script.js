    function check(){
	 var count = 99;
	 var word="bottles";

      //while (count>1){
	 for( i = 99; i >0;i=i-1){

	    (count+" " +word+" of beer on the wall"+);
		document.getElementById("placeholder").innerHTML="99 bottles of beer on the wall,";
		(count+" " +word+ " of beer,");
		document.getElementById("placeholder").innerHTML="99 bottles of beer";
		("Take one down, pass it around,");
		document.getElementById("placeholder").innerHTML="Take one down, pass it around,";
		 count=count-1;
	 
			if (count>1){
			 (count+" " +word+" of beer on the wall");
			 document.getElementById("placeholder").innerHTML="98 bottles of beer on the wall,"
			}
		 
		 else if (count==1){
			 (count+" " +word+" of beer on the wall");
			 (count+" " +word+" of beer on the wall");
			 (count+" " +word+ " of beer,");
			("Take one down, pass it around,");
		 }
	       
		 
	    else (count==0){
		 ("No more+" +word+" of beer on the wall");
	      document.getElementById("placeholder").innerHTML="No more bottles of beer on the wall,"
 
        }
	 }