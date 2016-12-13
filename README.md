# Triviagame

A 5 or 6 multiple question game that prompts the user to click on the correct answer.
A timer appears on the screen and immediatel starts counting down to zero.  The demo
used 30 seconds but that will make it hard to test so I'll start with 10 seconds.  The first 
question is displayed when the "Start Game" button is pushed.

If the correct answer is clicked:
- "Correct" message appears.
- "Correct Guesses" counter increments + 1.

If no answer is clicked:
- "Time is up" message appears.
- "Unanswered" counter increments + 1.

If incorrect answer is clicked:
- "Wrong" message appears.
- "wrong" counter increments + 1.

All three possibilities are followed by:
- Answer specific media runs on screen.
- Game waits five seconds and then displays the next question and possible answers.
- Timer resets to 10 seconds
- If it's the last question, it invokes game end logic.

Game End logic:
- After the final question is "answered", a results screen displays the number of correct,
 incorrect and unanswered questions.
- Restart button is displayed.
- If selected, the game is restarted without refreshing the page.

Resources:
jQuery.js and Bootstrap.css CDNs.
Local app.js and style.css files.
Background image.
Media files (1 per question).

Variables:
- Question timer = 10 seconds.
- Next question timer = 5 seconds.
- Counters:
	- Correct answers
	- Incorrect answers
	- Unanswered questions
	- Questions remaining (might not need an explicit variable).
	- Games won (optional - if I want to do more than 1 Q/A set).
	- Games lost (see above)
Objects:
- One object containing:
	- Question
	- Correct answer
	- Array of incorrect answers
	- media files for each question.

Functions:
	- Start game event.
	- Answer questions (loops through length of object){
		- if (correct){
			do this
	}	- if else (unanswered){
			do that
	}	- else{
	run game end routine
}
	}







