 //validate form
 function validateForm()
 {
     //validate username
     const user=document.getElementById("uname").value;
     console.log('uname:', uname);
     if (user=="null" || user == "")
         {
             alert( "Enter correct name");
             return false
         }
     //validate password
     const password1=document.getElementById("pass").value;
     const cpassword1=document.getElementById("cpass").value;
     console.log('password1:', password1);
     console.log('cpassword1:', cpassword1);
     if (password1.length<6)
     {
         alert( "enter the 6 charcters")
         return false;
     }
     else if (password1!==cpassword1) 
     {
         alert( "Both must be same")
         return false;
     }   

     // Validate DOB
     var dobInput = document.getElementById("dobInput").value;
     var currentDate = new Date();
     var enteredDate = new Date(dobInput); 
     console.log('currentDate:', currentDate);
     console.log('enteredDate:', enteredDate);
     if (isNaN(enteredDate)) 
     {
         alert("Please enter a valid date.");
         return false;
     }
     if (enteredDate > currentDate) 
     {
         alert("Please enter a date that is not in the future.");
         return false;
     }

     //validate e-mail
     let mymail=document.getElementById("email").value;
     let attherate=mymail.indexOf("@");
     let atthedot=mymail.lastIndexOf(".");
     console.log('mymail:', mymail);
     if (attherate<1 || atthedot<attherate+3 || atthedot>=mymail.length)
     {
         alert( "Enter the correct email");
         return false;
     }

     //validate mobile number
     let mobile1=(document.getElementById("mobile").value)
     if (mobile1.length!=10)
     {
         alert( "Enter the correct 10 digits number");
         return false;
     }
 }          
 