function submitFunction()
{
    let name=document.getElementById('name').value;
    var phonenumber=document.getElementById('phonenumber').value;
    var phoneexpression = /^[6-9]{1}[0-9]{9}$/;
    let address=document.getElementById('address').value;
    let date=document.getElementById('date').value;

    if(name=="")
    {
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";
        return false;

    }
    else if(!isNaN(name))
    {
        document.getElementById('name').placeholder="Please enter the name";  
        document.getElementById('name').style.border="1px solid red";
        return false;
    }
    else if(!phoneexpression.test(phonenumber))
    {
        document.getElementById("phonenumber").placeholder="Please enter your phone";
        document.getElementById('phonenumber').style.border="1px solid red"; 
        return false;
    }
   else if(address=="")
    {
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";
        return false;
    }
  else if(date=="")
    {
        document.getElementById("date").placeholder="Enter valid Date";
        document.getElementById("date").style.border="1px solid red";
        return false;
}
}
function namevalidate()
{
    let name=document.getElementById('name').value;
    if(name=="")
    {
          
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="Please enter the name";
        document.getElementById('name').style.border="1px solid red";

    }
    else if(!isNaN(name))
    {
        document.getElementById("name").value="";
        document.getElementById('name').placeholder="Please enter the name";  
        document.getElementById('name').style.border="1px solid red";
    }
    else
    {
        document.getElementById('name').placeholder="";  
        document.getElementById('name').style.border="1px solid grey";
    }
}
function phonevalidate()
{
    var phonenumber=document.getElementById('phonenumber').value;
    var phoneexpression = /^[6-9]{1}[0-9]{9}$/;
    if(!phoneexpression.test(phonenumber))
    {
        document.getElementById("phonenumber").value="";
        document.getElementById("phonenumber").placeholder="Please enter your email";
        document.getElementById('phonenumber').style.border="1px solid red"; 
    }
    else{

    }  document.getElementById("phonenumber").placeholder="";
        document.getElementById('phonenumber').style.border="1px solid red";
 
}
function addressvalidate()
{
    let address=document.getElementById('address').value;
    if(address=="")
    {   
        document.getElementById("address").value="";
        document.getElementById("address").placeholder="Please enter the name";
        document.getElementById('address').style.border="1px solid red";
    }
    else
    {
        document.getElementById('address').placeholder="";  
        document.getElementById('address').style.border="1px solid grey";
    }
}
function datevalidate()
{
    let date=document.getElementById("date").value;
    if(date=="")
    {
        document.getElementById("date").placeholder="Enter valid Date";
        document.getElementById("date").style.border="1px solid red";
    }
    else
    {
        document.getElementById('date').placeholder="";  
        document.getElementById('date').style.border="1px solid grey";
    }
}