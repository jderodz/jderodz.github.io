var normalTruth= function() {
  var normalTruths = [
    "Who do you think is the smartest in this room?",
    "What is something that most people won't know about you?",
    "What is the most embarrassing thing your parents have caught you doing?",
    "What is the biggest lie you have ever told?",
    "What is the most embarrassing nickname you've ever had?",
    "If you were granted one wish, what would that wish be? (No wishing for more wishes!)",
    "Who was the last person you stalked via social media?",
    "Name one flaw about the person to your left?",
    "Who do you feel is the closest to you out of everyone in the room?",
    "How long have you gone without showering?",
    "Have you ever had a crush on anyone in this room?",
    "Have you ever stolen anything?",
    "What do you look for in a significant other?",
    "If you could switch places with someone for a day, who would it be and why?",
    "If could be born again, what would you come back as?",
    "What is your greatest fear?",
    "What is your biggest pet peeve?",
    "What would you do if you could be invisible for a day?",
    "If you had to get a tattoo, where and what would it be?",
    "If you were stuck on an island, what are two things you would want to have with you?",
    "What is your weirdest habit?",
    "How many kids would you like to have?",
    "What is your guilty pleasure?",
    "Do you believe in love at first sight?",
    "What is the weirdest thing you hav ever eaten?",
    "What is the weirdest dream you've ever had?",
  ];
  var text = document.getElementById("text");
  var question = normalTruths[parseInt(Math.random() * normalTruths.length)];
  console.log(question);
  text.innerHTML = question;
}

var normalDare= function() {
  var normalDares = [
    "Start a conversation with an inanimate object in public.",
    "Imitate Drake's dance in Hotline Bling.",
    "Serenade the person to your right.",
    "Talk in an accent for the next 10 minutes.",
    "Let the group look through your phone for 2 minutes.",
    "Try to juggle 2 or 3 items of your groups's choosing.",
    "Eat a snack without using your hands.",
    "Sing a part of your favorite Disney song at the top of your lungs in public.",
    "Update your social media status with only words that begin with the letter T.",
    "Wear your shirt backwards for the rest of the game.",
    "Say the alphabet backwards in a British accent. If you mess up, start over.",
    "Give someone in the room a piggyback ride.",
    "Rhyme everything you say for the rest of the game.",
    "Repeat everything another player says for the next 10 minutes.",
    "Sing the 'I'm a litte teapot' song.",
    "Spend the next round sitting on someone's lap.",
    "Try to lick your elbow.",
    "Wink at the next stranger you meet on the street.",
    "Flex your muscles.",
    "Sing the Barney theme song!",
    "Sing 'Let it go' at the top of your lungs while dressed as Elsa.",
    "Eat a tablespoon of mustard and mayonnaise.",
    "Have the person to the left of you do your makeup while blindfolded.",
    "Read the last text message that you received out loud.",
    "Prank call your mom.",
    "Do your best ballet dance.",
  ];
  var text = document.getElementById("text");
  var question2 = normalDares[parseInt(Math.random() * normalDares.length)];
  console.log(question2);
  text.innerHTML = question2;
  }

var extremeTruth= function() {
  var extremeTruths = [
    "Who in this room would you make out with if you have to?",
    "On a scale of 1-10, how would you rate everyone in this room?",
    "Who is your current crush?",
    "What color is your underwear?",
    "If you woke up one day as the opposite gender, what would be the first thing you do?",
    "Describe the sexiest clothes you ever wore and why.",
    "Have you ever skinny dipped?",
    "If you could choose anyone in the room to be your slave, who would it be and what would you make them do?",
    "What is your favorite thing about the opposite sex?",
    "Do you have any fetishes?",
    "What is your size? ;)",
    "Choose three people that you would have intercourse with in this group.",
    "Would you rather have sex with the person to the right or left of you?",
    "What's the dirtiest fantasy you've had and with who?"
  ];
var text = document.getElementById("text");
var question = extremeTruths[parseInt(Math.random() * extremeTruths.length)];
console.log(question);
text.innerHTML = question;
}

var extremeDare= function() {
  var extremeDares = [
    "Put ice in your pants.",
    "Twerk to 'Anaconda' by Nicki Minaj.",
    "Give someone a lap dance.",
    "Dance to 'Can't Keep My Hands to Myself' by Selena Gomez.",
    "Run out in public yelling 'Kumbaya.",
    "Flirt with a friend of the opposite gender.",
    "Walk up to the first stranger you see, hug them, and walk away saying nothing.",
    "Ask out your crush!",
    "Let the person to your left shave your arm.",
    "Brush your teeth in front of everyone for 2 minutes in silence.",
    "Eat a raw egg.",
    "Apply peanut butter to one side of your face and jelly to the other.",
    "Wear a bra over your clothes for an hour.",
    "Take a shower with all your clothes on.",
    "Drink water from the toilet bowl.",
    "Sit without pants for an hour.",
    "Draw a face around your belly button and leave it exposed for an hour.",
    "Let someone draw on your forehead.",
    "Lick the earlobe of the person sitting next to you.",
    "Smell the armpit of the person to the right of you.",
    "Smack the butt of the person to the left of you.",
    "Tape your hand to the person to the right of you.",
    "Lick the doorknob of the door nearest to you",
    "Choose 2 people to do Bloody Mary with you in the bathroom. Lights off and say it 3 times.",
    "Talk in an Austrialian accent for the rest of the game.",
    "Lick the hand of the person to the left of you.",
    "Bite the pinkie of the person to the right of you.",
  ];
var text = document.getElementById("text");
var question = extremeDares[parseInt(Math.random() * extremeDares.length)];
console.log(question);
text.innerHTML = question;
}
