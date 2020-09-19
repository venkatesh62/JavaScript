/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
 
 var x= document.getElementById("billingName");
  if(document.getElementById("same").checked == true){
   document.getElementById("billingName").value= document.getElementById('shippingName').value;
 
    document.getElementById("billingZip").value=
  document.getElementById("shippingZip").value;
 
    
  }
  else{
    document.getElementById("billingName").value='';
    document.getElementById("billingZip").value='';
  }
}
