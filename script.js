const form =document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
     const height=parseInt(document.querySelector('#height').value);
     const weight=parseInt(document.querySelector('#weight').value);
     const results=document.querySelector('#results');
      if(height==''||height<0||isNaN(height)){
        results.innerHTML=`plese give a valid ${height}`;
      }
     else if(weight==''||weight<0||isNaN(weight)){
        results.innerHTML=`plese give a valid ${weight}`;
      }
     else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
        results.innerHTML=`Under weight<span>${bmi}</span>`}
        if(bmi>18&&bmi<24.9){
        results.innerHTML=`Nornal range<span>${bmi}</span>`}
        if(bmi>24.9){
        results.innerHTML=`Overweight<span>${bmi}</span>`}
     }

});