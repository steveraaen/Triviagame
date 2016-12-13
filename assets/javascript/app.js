var numCorrect = 0,
    numIncorrect = 0,
    unanswered = 0,
    questionTimer = 10,
    intervalTimer = 5;

var q1 = {
    'question': 'Which was the first and only racehorse to defeat Man O War?',
    'answer': 'Upset',
    'answers': ['Secretariat', 'Seabiscuit', 'Upset', 'Mister Ed', 'Affirmed'],
    'media': '<img id = "ap" src ="./assets/images/manowar.gif">',
    'explainer': 'It was at Saratoga, in 1919, that the word “upset” entered the American sports lexicon. That\'s when a horse named Upset beat the mighty Man o\' War. It was the original Big Red\'s only defeat. In those days, the word upset had a more literal meaning, along the lines of tip over, or capsize.'
};
var q2 = {
    'question': 'Which of these cities is east of Reno, NV?',
    'answer': 'Los Angeles\, CA',
    'answers': ['Los Angeles\, CA', 'San Francisco\, CA', 'Honolulu\, HI', 'Portland\, OR', 'Sacramento\, CA'],
    'media': '<img id = "ap" src ="./assets/images/la.gif">',
    'explainer': 'Yep, check it out on a map.  Sometimes we forget how big California is and that the southern coast is oriented NW/SW.'
}
var q3 = {
    'question': 'Who was the legendary Benedictine monk who invented champagne?',
    'answer': 'Dom Perignon',
    'answers': ['Roland Champagne', 'Sebastien Clicquot', 'Dom Perignon', 'Henri Moet', 'Benjamin Franklin'],
    'media': '<img id = "ap" src ="./assets/images/champagne.gif">',
    'explainer': 'Pérignon was born to a clerk of the local marshal in the town of Sainte-Menehould in the ancient Province of Champagne in the Kingdom of France. He was born in December 1638 and was baptized on 5 January 1639. He was the youngest of his parents\' seven children, as his mother died the following summer. His father\'s family owned several vineyards in the region.'
}
var qa = [q1, q2, q3];
var curQues;
var choice;
var pickQ;
$(document).ready(function() {
    function firstQ() {
        pickQ = Math.floor(Math.random() * (qa.length));
        for (let i = 0; i < qa.length; i++) {
            curQues = qa[pickQ];
            $('#question').html(curQues.question);
        }
        for (let i = 0; i < curQues.answers.length; i++) {
            $('#choices').append('<div class = "answers">' + curQues.answers[i] + '</div>');
        };
        
    }
    firstQ();
    function nextQ() {
        $('#media').empty();
        $('#question').empty();
        $('#choices').empty();
        pickQ = Math.floor(Math.random() * (qa.length));
        for (let i = 0; i < qa.length; i++) {
            curQues = qa[pickQ];
            $('#question').html(curQues.question);
        }
        for (let i = 0; i < curQues.answers.length; i++) {
            $('#choices').append('<div class = "answers">' + curQues.answers[i] + '</div>');
        };

    }
function timesUp(){
		    unanswered++;
            $('#message').text("Times Up!  The answer was " + curQues.answer + "!");
            $('#media').html(curQues.media);
            setTimeout(nextQ, 3000);
/*            clearInterval(counter);*/
}
    $('div').on('click', '.answers', function() {
        clearTimeout(delay)
        choice = $(this).text();
        if (curQues.answer === choice) {

/*        	$('#timer').html(counter)*/
            $('#media').html(curQues.media)
            $('#message').text("Correct!");
            numCorrect++;
            var delay = setTimeout(nextQ, 3000);
/*        	clearInterval(counter);*/
            
        }else {	
/*        	$('#timer').html(counter)*/
            $('#message').text("Wrong.  Try Again");
            numIncorrect++;
/*            clearInterval(counter);*/
        }

    });
});
