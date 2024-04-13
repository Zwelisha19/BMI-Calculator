




function calculateBMI(){
   let  results=document.getElementById('total');
   /*
    total=heigthEl*weightEl
    results.textContent=total;
    */
    let heigthEl=document.querySelector('#height-Input').value;

    let weightElement=document.querySelector('#weight-Input').value;

    
   console.log(weightElement);
   console.log(heigthEl);
   console.log(results);


    /*   	
    BMI Categories:
    Underweight = <18.5
    Normal weight = 18.5–24.9
    Overweight = 25–29.9
    Obesity = BMI of 30 or greater*/

   let calculating=weightElement/(heigthEl*heigthEl)
//    (weightElement/heigthEl*heigthEl)*10.000;

    if (calculating<=18.5) {
        results.textContent=calculating.toFixed(2) + " You are Underweight";
        
    }
    else if(calculating >=18.5 && calculating<=24.9){
        results.textContent=calculating.toFixed(2) + " You are on Normal weight";
    }
    else if(calculating>=25 && calculating<=29.9){
        results.textContent=calculating.toFixed(2) + " You are Overweight";
    }
    else{
        results.textContent=calculating.toFixed(2)+ " You have Obesity";
    }
   
   

   

   
   
}



