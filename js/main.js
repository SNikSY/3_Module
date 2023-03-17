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
    var currentDisplay = Math.floor(Math.random() * 10); // initialize random starting display value
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


 
 



 