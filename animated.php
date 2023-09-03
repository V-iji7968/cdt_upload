<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="form1.css"/>
    <table>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  

    <title>Document </title>

</head>
<body>
    <h1>GRIEVANCE PORTAL</h1>
    <form onsubmit="return submitFunction()" method="post">
       
        <h2>REGISTRATION FORM</h2>
                    <p><label for="name">Name</label>
                        <input id="name" type="text" name="name"  onblur="namevalidate()"/></p>
              
                     <p><label>Date of Birth:<input type="date" name="birthDate" onblur="datevalidate()" id="date"></label></p>
         
                    <p><label>Address :<br /><textarea name="address" cols="30" rows="3"></textarea></label></p>

                     <p><label for="phonenumber">Telephone number</label>
                    <input id="phonenumber" type="text" name="phonenumber"  onblur="phonevalidate()"/></p>

               <div> <label id="Fill">Photo<input type="file" id="myFile" name="filename"></label> 
                     
                       
<div  id="File">
                    <button type="submit" >Submit</button>  
                    <button type="submit"  > Delete </button>         
                    <button type="submit"  >New</button> 
                    <button type="submit" >Update</button>
                </div>              
            </form>
        </table>  <script src="animated.js"> </script>
</body>
</html>