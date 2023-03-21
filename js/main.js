$(document).ready(function() {
     var correct_words = ["secure", "recuse"];

     // When a button with class "char-btn" is clicked
     $(".button_anagram").on("click", function() {
          // Get the data-char attribute of the button clicked
          var char = $(this).data("char");

           // Append the character to the output div
          $(".display_anagram_bottom").append(char);
      });
      // Add a click event listener to the check button
     $(".check_anagram").on("click", function() {
          // Get the current text of the output div
          var output_text = $(".display_anagram_bottom").text().trim().toLowerCase();
          output_text = output_text.replace(/\s/g, '');
          // Compare the output text with the correct words
          if (correct_words.indexOf(output_text) !== -1) {
               $(".indicator_anagram").addClass("correct")
          }
     });


      
      $(".delete_anagram").on("click", function() {
          $(".display_anagram_bottom").text("");
      });

 });





 const correctOrder = ['H', 'D', 'U'];
  let progress = 0;
  let numIncorrect = 0;

  $('.button_alphabet').on('click', function() {
    const $button = $(this);
    const letter = $button.find('p').text();
    const $indicator = $button.find('.button_alphabet_indicator');

    if (letter === correctOrder[progress]) {
      $button.addClass('selected');
      $indicator.addClass('lit-green');
      progress++;

      if (progress === correctOrder.length) {
        $('.indicator_alphabet').addClass('lit-green');
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




  $(document).ready(function() {
     var expectedOrder = "YJKZE";
     var currentIndex = 0;
   
     $(".button_caesar").click(function() {
       var buttonLetter = $(this).text();

       $(this).addClass("clicked");
       setTimeout(() => $(this).removeClass("clicked"),200);
   
       if (buttonLetter == expectedOrder[currentIndex]) {
         currentIndex++;
         if (currentIndex == expectedOrder.length) {
           $(".indicator_caesar").css("background-color", "greenyellow");
         }
       } else {
         currentIndex = 0;
         $(".indicator_caesar").css("background-color", "red");
       }
     });
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
               setTimeout(() => $(event.currentTarget).removeClass("clicked"),200);
          })
		$("#yes-button, #no-button").on("click", (event) => {
              
			if (buttonsDisabled) {
				return;
			}
			if ($(event.target).attr("id") === "yes-button" && colorIndex === textColorIndex
				|| $(event.target).attr("id") === "no-button" && colorIndex !== textColorIndex) {
				indicatorCounter++;
				if (indicatorCounter === 5) {
					$(".indicator_color").css("background-color", "greenyellow");
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


  $(document).ready(function() {
    var currentDisplay = Math.floor(Math.random() * 9); // initialize random starting display value
    var correctAnswers = [
      Math.max(currentDisplay - 3, 1), // first answer is 3 digits smaller than current display, but not less than 0
      Math.min(currentDisplay + 1, 9), // second answer is 1 digit bigger than current display
      Math.min(currentDisplay + 7, 9) // third answer is 7 digits bigger than current display
    ];
    var currentShift = 0;
    var enteredDigits = '';
    $('.display_forget').text(currentDisplay);
    $('.button_forget').click(function() {
      var clickedButton = $(this).text();
      $('.display_forget_right').text($('.display_forget_right').text() + clickedButton);
      enteredDigits += clickedButton;
      if (enteredDigits.length == 3) {
        if (enteredDigits == correctAnswers.join('')) {
          $('.indicator_forget').css('background-color', '#adff2f')
          currentShift = 0;
        } else {
          alert('Sorry, incorrect answer. Please try again.');
        }
        enteredDigits = '';
        currentDisplay = Math.floor(Math.random() * 10);
        correctAnswers = [
          Math.max(currentDisplay - 3, 0),
          Math.min(currentDisplay + 1, 9), // second answer is 1 digit bigger than current display
          Math.min(currentDisplay + 7, 9)
        ];
        $('.display_forget').text(currentDisplay);
        $('.display_forget_right').text('');
      }
    });
  });
  


  const correctOrderTwo = ['3', '1', '2','4'];
  let progressTwo = 0;
  let numIncorrectTwo = 0;

  $('.button_keyboard').on('click', function() {
    const $button = $(this);
    const letter = $button.find('p').text();
    const $indicator = $button.find('.button_keyboard_indicator');

    if (letter === correctOrderTwo[progress]) {
      $button.addClass('selected');
      $indicator.css('background-color', '#adff2f')
      progress++;

      if (progress === correctOrderTwo.length) {
        $('.indicator_keyboard').css('background-color', '#adff2f')
      }
    } else {
      $button.addClass('selected');
      $indicator.css('background-color', 'ff0000')
      progressTwo = 0;
      numIncorrectTwo++;

      if (numIncorrectTwo === $('.button_keyboard').length) {
        $('.indicator_keyboard, .button_keyboard_indicator').css('background-color', '555555')
        $('.button_alphabet').removeClass('selected');
        numIncorrectTwo = 0;
      } else {
        setTimeout(function() {
          $button.removeClass('selected');
          $indicator.css('background-color', '555555')
        }, 500);
      }
    }
  });





  $(document).ready(function() {
  var timer;
  $(".button_light:first").one("click", function() {
    var count = parseInt($(".display_light_right").text());
    timer = setInterval(function() {
      count--;
      $(".display_light_right").text(count);
      if (count == 0) {
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
        var count = parseInt($(".display_light_right").text());
        count--;
        $(".display_light_right").text(count);
        if (count == 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  });
});

  







// Define an array of numbers to use in the problems
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Define a function to generate a random problem
function generateProblem() {
  // Pick two random numbers from the array
  var num1 = numbers[Math.floor(Math.random() * numbers.length)];
  var num2 = numbers[Math.floor(Math.random() * numbers.length)];

  // Make sure num1 is greater than num2
  if (num1 < num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }

  // Build the problem string
  var problem = num1 + " - " + num2;

  // Return the problem string
  return problem;
}

// Define a function to update the problem display
function updateProblem() {
  // Generate a new problem
  var problem = generateProblem();

  // Update the display
  $(".display_math_left").text(problem);
}

// Call the updateProblem function to generate the first problem
updateProblem();

// Add a click handler to the equals button to check the answer
$(".buttons_math .button_math:contains('=')").click(function() {
  // Get the user's answer from the display
  var userAnswer = $(".display_math_center").text();

  // Calculate the correct answer
  var problemParts = $(".display_math_left").text().split(" - ");
  var correctAnswer = problemParts[0] - problemParts[1];

  // Check the user's answer
  if (userAnswer == correctAnswer) {
    $(".indicator_math").css("background-color", "greenyellow");
    $(".display_math_center").text(" ")
  } else {
    $(".indicator_math").css("background-color", "red");
    $(".display_math_center").text(" ")
  }

  // Update the problem display with a new problem
  updateProblem();
});

// Add a click handler to the number buttons to update the display
$(".buttons_math .button_math:not(:contains('=')):not(:contains('-'))").click(function() {
  // Get the clicked button's text
  var buttonText = $(this).text();

  // Get the current display text
  var displayText = $(".display_math_center").text();

  // Update the display with the clicked button's text
  $(".display_math_center").text(displayText + buttonText);
});

// Add a click handler to the minus button to update the display
$(".buttons_math .button_math:contains('-')").click(function() {
  // Get the current display text
  var displayText = $(".display_math_center").text();

  // If the display is empty, add a minus sign
  if (displayText == "") {
    $(".display_math_center").text("-");
  }
});
