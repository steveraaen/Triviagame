var numCorrect = 0,
    numIncorrect = 0,
    unanswered = 0,
    questionTimer = 12;

var q1 = {
    'question': 'Which was the first and only racehorse to defeat Man O War?',
    'answer': 'Upset',
    'answers': ['Secretariat', 'Seabiscuit', 'Upset', 'Mister Ed', 'Affirmed'],
    'media': '<img id = "ap" src ="./assets/images/manowar.gif">',
    'explainer': 'It was at Saratoga, in 1919, that the word “upset” entered the American sports lexicon. That\'s when a horse named Upset beat the mighty Man o\' War. It was the original Big Red\'s only defeat. In those days, the word upset had a more literal meaning, along the lines of tip over, or capsize.'
}
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
var q4 = {
    'question': 'Texas state law requires that you do not do this to your neighbor\'s cow?',
    'answer': 'Draw graffiti',
    'answers': ['Discuss Politics', 'Talk dirty', 'Draw graffiti', 'Talk about religion', 'Barbecue'],
    'media': '<img id = "ap" src ="./assets/images/cow.jpg">',
    'explainer': 'ly owned several vineyards in the region.'
}
var q5 = {
    'question': 'Who was Uncle Sam\'s close childhood friend?',
    'answer': 'Johnny Appleseed',
    'answers': ['', 'Alexander Hamilton', 'Johnny Appleseed', 'George Washington', 'Benjamin Franklin'],
    'media': '<img id = "ap" src ="./assets/images/japple.jpg">',
    'explainer': 'Pérignon was born to a clerk of the local marshal in the town of Sainte-Menehould in the ancient Province of Champagne in the Kingdom of France. He was born in December 1638 and was baptized on 5 January 1639. He was the youngest of his parents\' seven children, as his mother died the following summer. His father\'s family owned several vineyards in the region.'
}
var q6 = {
    'question': 'Who was the legendary Benedictine monk who invented champagne?',
    'answer': 'Dom Perignon',
    'answers': ['Roland Champagne', 'Sebastien Clicquot', 'Dom Perignon', 'Henri Moet', 'Benjamin Franklin'],
    'media': '<img id = "ap" src ="./assets/images/champagne.gif">',
    'explainer': 'Pérignon was born to a clerk of the local marshal in the town of Sainte-Menehould in the ancient Province of Champagne in the Kingdom of France. He was born in December 1638 and was baptized on 5 January 1639. He was the youngest of his parents\' seven children, as his mother died the following summer. His father\'s family owned several vineyards in the region.'
}
var qa = [q1, q2, q3, q4, q5];
var curQues = {};
var choice;
var pickQ;

$(document).ready(function() {

$('#timeout').text('No Answer  :  ' + unanswered);
$('#correct').html('Good Guesses  :  ' + numCorrect);
$('#incorrect').html('Bad Guesses  :  ' +  numIncorrect);
$('#timer').html(questionTimer);

   function setTimer(){
    if(numIncorrect + unanswered >= 5){
        alert('Game Over - You LOST with 5 bad guesses and-or unanswered questions');
    }else if (numCorrect >=5) {
        alert('Game Over - You WON with 5 correct guesses!');
    }else{
        questionTimer = 12;
    console.log(numCorrect + numIncorrect + unanswered)
    setInterval(timer, 1000);
    
    function timer () {    
        questionTimer--;
        $('#timer').html(questionTimer)
        if (questionTimer <= 0) {       
            stopInterval();
            timesUp();
        }
        }
    }}
    setTimer()
function stopInterval(){
for( let i=0; i<10000; i++)     {
/*        window.clearTimeout(i);*/
        window.clearInterval(i);
    }
}          
    $('#choices').on('click', '.answers', function() {
        choice = $(this).text();
        if (curQues.answer === choice) {
            $('#media').html(curQues.media);
            $('#message').html("Correct!");            
            stopInterval();
            numCorrect ++;
            $('#correct').html('Good Guesses  :  ' + numCorrect).css('color', 'green');;
            clickSet = setTimeout(nextQ, 4000) ;
        } else if (curQues.answer !== choice) {
            $('#message').text("Wrong.  Try Again");
            numIncorrect++;
console.log('num Incorrect  :' + numIncorrect)
            $('#incorrect').html('Bad Guesses  :  ' + numIncorrect).css('color', 'red');;
        } else{
            return;
        }
    });
    function timesUp() {
        stopInterval()
        setTimeout(nextQ, 4000);
        $('#media').html(curQues.media)
        $('#message').text("Times Up!  The answer was " + curQues.answer + "!").css('color', 'red');
        unanswered++;
        $('#timeout').html('No Answer  :  ' + unanswered).css('color', 'red');
    }
    function nextQ() {
        $('#timer').html(questionTimer)
        stopInterval();
        questionTimer = 12;
        setTimer()
        $('#media').empty();
        $('#choices').empty();
        pickQ = Math.floor(Math.random() * (qa.length));
        for (let i = 0; i < qa.length; i++) {
            curQues = qa[pickQ];
            $('#question').html(curQues.question);
        }
        for (let i = 0; i < curQues.answers.length; i++) {
            $('#choices').append('<div class = "answers" >' + curQues.answers[i] + '</div>');
        };
        }
nextQ()
});
