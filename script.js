//declaring form using form name(foodform) and document.forms 
const formsEl= document.forms.foodform;

//declaring the values using elements property inside document.forms with the form input names
const { firstname,lastname,address,pincode,gender,food,country,state}= formsEl.elements;

//getting the submit  button using id
const btn=document.getElementById("submit")

//getting tbody element of the table
const tableel=document.getElementById("tbody")


let beta="";        //
formsEl.addEventListener("submit",(e)=>{      //adding event listener submit 
    e.preventDefault()
     
     for(i=0;i<food.length;i++){              // using loop to get checkbox values
        if(food[i].checked===true){
           beta+= food[i].value+" ";
        }
    }
     tableel.innerHTML +=`<td>${firstname.value} </td> <td>${lastname.value} </td> <td>${address.value} 
     </td> <td>${pincode.value} <td>${gender.value} </td> <td>${beta}</td> <td>${country.value}</td>
     <td>${state.value}`;   //appending the values from form to table
     beta="";
})

//reset button
reset.addEventListener("click",()=>{          //adding event listener click
    firstname.value="";
     lastname.value="";
     pincode.value="";
     address.value="";
     country.value="";
      state.value="";
})

//end


