 $(document).ready(() => {
   
     var indicator = $(".indicator_anagram");
     var indicator2 = $('.indicator_caesar');
     var indicator3 = $('.indicator_lock');
     var indicator4 = $('.indicator_keyboard');
     var indicator5 = $('.indicator_math');
     var indicator6 = $('.indicator_alphabet');
     var indicator7 = $('.indicator_forget');
     var indicator8 = $('.indicator_color');
     var indicator9 = $('.indicator_logic');
   
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
   
     indicator3.click(() => {
   
       $('.hint.lock').toggleClass("transparent");
       $('.block.forget').toggleClass("opacity");
       $('.block.keyboard').toggleClass("opacity");
       $('.block.logic').toggleClass("opacity");
       $('.block.math').toggleClass("opacity");
   
     });

     indicator4.click(() => {
   
       $('.hint.keyboard').toggleClass("transparent");
       $('.block.tumblr').toggleClass("opacity");
       $('.block.letter').toggleClass("opacity");
       $('.block.maze').toggleClass("opacity");
       $('.block.memory').toggleClass("opacity");
   
     });
   
     indicator5.click(() => {
   
       $('.hint.math').toggleClass("transparent");
       $('.block.tumblr').toggleClass("opacity");
       $('.block.letter').toggleClass("opacity");
       $('.block.maze').toggleClass("opacity");
       $('.block.memory').toggleClass("opacity");
   
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
   
     indicator9.click(() => {
   
       $('.hint.logic').toggleClass("transparent");
       $('.block.anagram').toggleClass("opacity");
       $('.block.alphabet').toggleClass("opacity")
          $('.block.lock').toggleClass("opacity")
          $('.block.forget').toggleClass("opacity")
 
   });

 });
   