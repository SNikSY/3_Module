$(document).ready(function() {
   
   $('.start').click(() => {
    
    $('.start-screen').delay(200).fadeOut();
    $('body').css('overflow', 'auto');
  });
  
  
  $('body').css('overflow', 'hidden');
  



  const correct_words = ["secure", "recuse"];

  
  $(".button_anagram").on("click", (event) => {
    
    const char = $(event.currentTarget).data("char");

    
    $(".display_anagram_bottom").append(char);
    $(event.currentTarget).addClass("clicked");
    setTimeout(() => $(event.currentTarget).removeClass("clicked"), 200);
  });
  

  $(".check_anagram").on("click", (event) => {
    $(event.currentTarget).addClass("clicked");
    setTimeout(() => $(event.currentTarget).removeClass("clicked"), 200);
    
    let output_text = $(".display_anagram_bottom").text().trim().toLowerCase();
    output_text = output_text.replace(/\s/g, '');
    
    if (correct_words.indexOf(output_text) !== -1) {
      $(".indicator_anagram").addClass("correct")
      $("#three").css("background-color", "greenyellow")
    }
  });
  
  $(".delete_anagram").on("click", (event) => {
    $(".display_anagram_bottom").text("");
    $(event.currentTarget).addClass("clicked");
    setTimeout(() => $(event.currentTarget).removeClass("clicked"), 200);
  });




  const correctOrder = ['H', 'D', 'U'];
  let progress = 0;
  let numIncorrect = 0;
// Почему-то стрелочная тут всё ломает
  $('.button_alphabet').on('click', function() {
    const $button = $(this);
    const letter = $button.find('p').text();
    const $indicator = $button.find('.button_alphabet_indicator');
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"),200);

    if (letter === correctOrder[progress]) {
      $button.addClass('selected');
      $indicator.addClass('lit-green');
      progress++;

      if (progress === correctOrder.length) {
        $('.indicator_alphabet').addClass('lit-green');
        $("#four").css("background-color", "greenyellow")
      }
    } else {
      $button.addClass('selected');
      $indicator.addClass('lit-red');
      progress = 0;
      numIncorrect++;

      if (numIncorrect === $('.button_alphabet').length) {
        $('.indicator_alphabet, .button_alphabet_indicator').removeClass('lit-green lit-red');
        $('.button_alphabet').removeClass('selected');
        numIncorrect = 0;
      } else {
        setTimeout(function() {
          $button.removeClass('selected');
          $indicator.removeClass('lit-green lit-red');
        }, 500);
      }
    }
  });


  let expectedOrder = "YJKZE";
     let currentIndex = 0;
   
     $(".button_caesar").click(function() {
       let buttonLetter = $(this).text();

       $(this).addClass("clicked");
       setTimeout(() => $(this).removeClass("clicked"),200);
   
       if (buttonLetter == expectedOrder[currentIndex]) {
         currentIndex++;
         if (currentIndex == expectedOrder.length) {
           $(".indicator_caesar").css("background-color", "greenyellow");
           $("#five").css("background-color", "greenyellow")
         }
       } else {
         currentIndex = 0;
         $(".indicator_caesar").css("background-color", "red");
       }
     });
    
    
     const colorNames = ["RED", "BLUE", "GREEN", "YELLOW", "PURPLE", "ORANGE"];
     let indicatorCounter = 0;
     let colorIndex, textColorIndex;
     let buttonsDisabled = false;
     
     const randomColor = () => {
       colorIndex = Math.floor(Math.random() * colorNames.length);
       textColorIndex = Math.floor(Math.random() * colorNames.length);
       $(".display_color_right").text(colorNames[colorIndex]).css("color", colorNames[textColorIndex]);
       if (buttonsDisabled) {
         $("#yes-button, #no-button").prop("disabled", true);
       } else {
         $("#yes-button, #no-button").prop("disabled", false);
       }
     };
     
     $(".button_color").on("click", (event) => {
       $(event.currentTarget).addClass("clicked");
       setTimeout(() => $(event.currentTarget).removeClass("clicked"), 200);
     });
     
     $("#yes-button, #no-button").on("click", (event) => {
       if (buttonsDisabled) {
         return;
       }
       if (
         ($(event.target).attr("id") === "yes-button" && colorIndex === textColorIndex) ||
         ($(event.target).attr("id") === "no-button" && colorIndex !== textColorIndex)
       ) {
         indicatorCounter++;
         if (indicatorCounter === 5) {
           $(".indicator_color").css("background-color", "greenyellow");
           $("#six").css("background-color", "greenyellow");
           indicatorCounter = 0;
           buttonsDisabled = true;
           $("#yes-button, #no-button").prop("disabled", true);
         }
       } else {
         indicatorCounter = 0;
         $(".indicator_color").css("background-color", "#ccc");
       }
       randomColor();
     });
     
     randomColor();
     


  let currentDisplay = Math.floor(Math.random() * 9); 
    let correctAnswers = [
      Math.max(currentDisplay - 3, 1), 
      Math.min(currentDisplay + 1, 9), 
      Math.min(currentDisplay + 7, 9) 
    ];
    let currentShift = 0;
    let enteredDigits = '';
    $('.display_forget').text(currentDisplay);
    $('.button_forget').click(function() {
      $(this).addClass("clicked");
      setTimeout(() => $(this).removeClass("clicked"),200);
      let clickedButton = $(this).text();
      $('.display_forget_right').text($('.display_forget_right').text() + clickedButton);
      enteredDigits += clickedButton;
      if (enteredDigits.length == 3) {
        if (enteredDigits == correctAnswers.join('')) {
          $('.indicator_forget').css('background-color', '#adff2f')
          $("#seven").css("background-color", "greenyellow")
          currentShift = 0;
        }
        enteredDigits = '';
        currentDisplay = Math.floor(Math.random() * 10);
        correctAnswers = [
          Math.max(currentDisplay - 3, 1),
          Math.min(currentDisplay + 1, 9), 
          Math.min(currentDisplay + 7, 9)
        ];
        $('.display_forget').text(currentDisplay);
        $('.display_forget_right').text('');
      }
    });


    let timer;
    $(".button_light:first").one("click", function() {
      let count = parseInt($(".display_light_right").text());
      timer = setInterval(function() {
        count--;
        $(".display_light_right").text(count);
        if (count == 0) {
          $("#eight").css("background-color", "greenyellow")
          clearInterval(timer);
        }
      }, 1000);
    });
  
    $(".button_light").click(function() {
      $(this).css("background-color", "greenyellow");
      if ($(".button_light:not(:has(style))").length == 0) {
        clearInterval(timer);
      } else if (!timer) {
        timer = setInterval(function() {
          let count = parseInt($(".display_light_right").text());
          $(".display_light_right").text(count);
          if (count == 0) {
            clearInterval(timer);
            $("#eight").css("background-color", "greenyellow")
          }
        }, 1000);
      }
    });







    
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  
  function generateProblem() {
    
    let num1 = numbers[Math.floor(Math.random() * numbers.length)];
    let num2 = numbers[Math.floor(Math.random() * numbers.length)];

    
    if (num1 < num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }

    
    let problem = num1 + " - " + num2;

    
    return problem;
  }

  
  function updateProblem() {
    let problem = generateProblem();

    
    $(".display_math_left").text(problem);
  }

 
  updateProblem();

  
  $(".buttons_math .button_math:contains('=')").click(function() {
   
    let userAnswer = $(".display_math_center").text();

   
    let problemParts = $(".display_math_left").text().split(" - ");
    let correctAnswer = problemParts[0] - problemParts[1];

   
    if (userAnswer == correctAnswer) {
      $(".indicator_math").css("background-color", "greenyellow");
      $("#nine").css("background-color", "greenyellow")
      $(".display_math_center").text(" ")
    } else {
      $(".indicator_math").css("background-color", "red");
      $(".display_math_center").text(" ")
    }

   
    updateProblem();
  });

  
  $(".buttons_math .button_math:not(:contains('=')):not(:contains('-'))").click(function() {
   
    let buttonText = $(this).text();

   
    let displayText = $(".display_math_center").text();

   
    $(".display_math_center").text(displayText + buttonText);
  });

  
  $(".buttons_math .button_math:contains('-')").click(function() {
    
    let displayText = $(".display_math_center").text();

  
    if (displayText == "") {
      $(".display_math_center").text("-");
    }
  });








let numDisplayed;
  let buttonToPress;
  let numCorrect = 0;

  function generateNumber() {
    numDisplayed = Math.floor(Math.random() * 4) + 1;
    $('.display_memory').text(numDisplayed);
  
  
    if (numDisplayed === 1) {
      buttonToPress = $('.buttons_memory').find('.button_memory:nth-child(2)');
    } else if (numDisplayed === 2) {
      buttonToPress = $('.buttons_memory').find('.button_memory:nth-child(1)');
    } else if (numDisplayed === 3) {
      buttonToPress = $('.buttons_memory').find('.button_memory:nth-child(3)');
    } else if (numDisplayed === 4) {
      buttonToPress = $('.buttons_memory').find('.button_memory:nth-child(1)');
    }
  }
  
  function updateIndicators() {
    let indicatorToLight = $('.indicator_memory_right:not(.lit)').first();
    if (indicatorToLight.length > 0) {
      indicatorToLight.addClass('lit');
     
    }
  }
  
  function resetGame() {
    $('.indicator_memory').addClass('lit');
    numCorrect = 0;
    $("#ten").css("background-color", "greenyellow")
    generateNumber();
  }

  
  generateNumber();
  
  
  $('.button_memory').on('click', function() {
    if ($(this).index() === buttonToPress.index()) {
      numCorrect++;
      updateIndicators();
      if (numCorrect === 5) {
        
        resetGame();
      } else {
        
        generateNumber();
      }
    }
  });


  function handleButtonClick() {
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"), 200);
  }
  
  $(".button_chess").click(handleButtonClick);
  $(".button_lock").click(handleButtonClick);
  $(".button_lock_right").click(handleButtonClick);
  $(".start").click(handleButtonClick);
  $(".button_keyboard").click(handleButtonClick);
  $(".button_letter").click(handleButtonClick);
  $(".button_light").click(handleButtonClick);
  $(".button_logic").click(handleButtonClick);
  $(".button_math").click(handleButtonClick);
  $(".button_memory").click(handleButtonClick);
  
});
  
