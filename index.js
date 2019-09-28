// Import stylesheets
import './style.css';


// Write Javascript code!
const effect = document.getElementById('heart');
  effect.onclick = function(){
  effect.style.cursor="pointer"
  effect.style.backgroundColor="green"
  effect.style.color = "orange";
  
  const mytext = document.getElementById('your-text');
  mytext.textContent="Your text here!"
   effect.onmouseleave= function(){
    effect.style.backgroundColor="blue"
     mytext.style.color="white"
     mytext.style.border="5px"
     mytext.style.borderColor="white"
     mytext.style.boxShadow="4px 4px rbga(5,125,135,0.5)"
     mytext.innerHTML=`<h4>Thanks for your visit</h4>`
     mytext.style.lineHeight="225px"
     
    
   }
  
}
