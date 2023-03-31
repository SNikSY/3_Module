 $(document).ready(() => {
    
  if(window.innerWidth > 768) {
   
     let indicator = $(".indicator_anagram");
     let indicator2 = $('.indicator_caesar');
     let indicator6 = $('.indicator_alphabet');
     let indicator7 = $('.indicator_forget');
     let indicator8 = $('.indicator_color');
   
     indicator.click(() => {
        
       $('.hint.anagram').toggleClass("transparent");
       $('.block.alphabet').toggleClass("opacity");
       $('.block.caesar').toggleClass("opacity");
       $('.block.keyboard').toggleClass("opacity");
       $('.block.forget').toggleClass("opacity");
   
   
     });
   
     indicator2.click(() => {
   
       $('.hint.caesar').toggleClass("transparent");
       $('.block.chess').toggleClass("opacity");
       $('.block.color').toggleClass("opacity");
       $('.block.tumblr').toggleClass("opacity");
       $('.block.letter').toggleClass("opacity");
   
     });
   
    

    
   
     

     indicator6.click(() => {
   
       $('.hint.alphabet').toggleClass("transparent");
       $('.block.lock').toggleClass("opacity");
       $('.block.forget').toggleClass("opacity");
       $('.block.light').toggleClass("opacity");
       $('.block.logic').toggleClass("opacity");
   
     });
   
     indicator7.click(() => {
   
       $('.hint.chess').toggleClass("transparent");
       $('.block.keyboard').toggleClass("opacity");
       $('.block.tumblr').toggleClass("opacity");
       $('.block.math').toggleClass("opacity");
       $('.block.maze').toggleClass("opacity");  
   
     });
   
     indicator8.click(() => {
   
       $('.hint.color').toggleClass("transparent");
       $('.block.keyboard').toggleClass("opacity");
       $('.block.tumblr').toggleClass("opacity");
       $('.block.caesar').toggleClass("opacity");
       $('.block.chess').toggleClass("opacity");
     
     });
   
    
    }
    else if(window.innerWidth < 768){

      let indicator = $(".indicator_anagram");
      let indicator2 = $('.indicator_caesar');
      let indicator6 = $('.indicator_alphabet');
      let indicator7 = $('.indicator_forget');
      let indicator8 = $('.indicator_color');
      
    
      indicator.click(() => {
    
        $('.hint.anagram').toggleClass("transparent");
        $('.block.chess').toggleClass("opacity");
        $('.block.caesar').toggleClass("opacity");
        $('.block.color').toggleClass("opacity");
        $('.block.lock').toggleClass("opacity");
    
    
      });
    
      indicator2.click(() => {
    
        $('.hint.caesar').toggleClass("transparent");
        $('.block.lock').toggleClass("opacity");
        $('.block.color').toggleClass("opacity");
        $('.block.forget').toggleClass("opacity");
        $('.block.keyboard').toggleClass("opacity");
    
      });
    
     
 
     
    
      
 
      indicator6.click(() => {
    
        $('.hint.alphabet').toggleClass("transparent");
        $('.block.chess').toggleClass("opacity");
        $('.block.caesar').toggleClass("opacity");
        $('.block.color').toggleClass("opacity");
        $('.block.lock').toggleClass("opacity");
    
      });
    
      indicator7.click(() => {
    
        $('.hint.chess').toggleClass("transparent");
        $('.block.letter').toggleClass("opacity");
        $('.block.tumblr').toggleClass("opacity");
        $('.block.logic').toggleClass("opacity");
        $('.block.light').toggleClass("opacity");  
    
      });
    
      indicator8.click(() => {
    
        $('.hint.color').toggleClass("transparent");
        $('.block.keyboard').toggleClass("opacity");
        $('.block.tumblr').toggleClass("opacity");
        $('.block.forget').toggleClass("opacity");
        $('.block.letter').toggleClass("opacity");
      
      });


    }
 });
   