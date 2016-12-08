/* Boss Kitty
	Zipangu : Showa Town (801000000)
	
	Quiz for quest 8012 (Sakura, the Kitty, and the Orange Marble)
*/

var status = -1;
var questions = new Array("Which of these items does the Flaming Raccoon NOT drop?","Which NPC is responsible for transporting travellers from Kerning City to Zipangu, and back?","Which of the items sold at the Mushroom Shrine increases your attack power?","Which of these items do the Extras NOT drop?","Which of these items DO NOT exist??","What's the name of the vegetable store owner in Showa Town?","Which of these items DO exist?","What is the name of the strongest boss in the Mushroom Shrine?","Which one of these items has a mis-matched class or level description?","Which of these noodles are NOT being sold by Robo at the Mushroom Shrine?","Which of these NPCs do NOT stand in front of Showa Movie Theater?");;
var answers  = new Array(new Array("Raccoon Firewood","Solid Horn","Red Brick"),new Array("Peli","Spinel","Poli"),new Array("Takoyaki","Yakisoba","Tempura"),new Array("Extra A's Badge","Extra B's Corset","Extra C's Necklace"),new Array("Frozen Tuna","Fan","Fly Swatter"),new Array("Sami","Kami","Umi"),new Array("Cloud Fox's Tooth","Ghost's Bouquet","Dark Cloud Fox's Tail"),new Array("Black Crow","Blue Mushmom","Himegami"),new Array("Bamboo Spear - Warrior-only Weapon","Pico-Pico Hammer - One-handed Sword","Mystic Cane - Level 51 equip"),new Array("Kinoko Ramen (Pig Skull)","Kinoko Ramen (Salt)","Mushroom Miso Ramen"),new Array("Skye","Furano","Shinta"));;
var correctAnswer = new Array(1,1,0,1,2,2,2,0,0,2,2);
var questionNum;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(8012) == 1 && !cm.haveItem(4031064)){ //quest in progress
	    cm.sendYesNo("Did you get them all? Are you going to try to answer all of my questions?");
	} else { //quest not started or already completed
	    cm.sendOk("Meeeoooowww!");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var hasChicken = cm.haveItem(2020001, 300);

	if (!hasChicken) {
	    cm.sendOk("What? No! 300! THREE. HUNDRED. No less. Hand over more if you want, but I need at least 300. Not all of us can be as big and as fed as you...");
	    cm.safeDispose();
	} else {
	    cm.gainItem(2020001, -300)
	    cm.sendNext("Good job! Now hold on a sec... Hey look! I got some food here! Help yourselves. Okay, now it's time for me to ask you some questions. I'm sure you're aware of this, but remember, if you're wrong, it's over. It's all or nothing!");
	}
    } else if (status == 7) { //2-6 are the questions
	if (selection != correctAnswer.pop()){
	    cm.sendNext("Hmmm...all humans make mistakes anyway! If you want to take another crack at it, then bring me 300 Fried Chicken.")
	    cm.safeDispose();
	}
	else {
	    cm.sendNext("Dang, you answered all the questions right. I may not like humans in general, but I HATE breaking a promise, so, as promised, here's the Orange Marble.")
	}
    } else if (status == 8) { //gain marble
	cm.gainItem(4031064, 1);
	cm.sendOk("Our business is concluded, thank you very much! You can leave now!");
	cm.safeDispose();
    } else if (status >= 2 && status <= 6 && mode == 1) {//questions
	var cont = true;
	if (status > 2) {
	    if (selection != correctAnswer.pop()){
		cm.sendNext("Hmmm...all humans make mistakes anyway! If you want to take another crack at it, then bring me 300 Fried Chicken.")
		cm.safeDispose();
		cont = false;
	    }
	}
			
	if (cont) {
	    questionNum = Math.floor(Math.random() * questions.length);
	    if (questionNum != (questions.length - 1)){
		var temp;
		temp = questions[questionNum];
		questions[questionNum] = questions[questions.length - 1];
		questions[questions.length - 1] = temp;
		temp = answers[questionNum];
		answers[questionNum] = answers[questions.length - 1];
		answers[questions.length - 1] = temp;
		temp = correctAnswer[questionNum];
		correctAnswer[questionNum] = correctAnswer[questions.length - 1];
		correctAnswer[questions.length - 1] = temp;
	    }
				
	    var question = questions.pop();
	    var answer = answers.pop();
	    var prompt = "Question no." + (status - 1) + ": " + question;
				
	    for (var i = 0; i < answer.length; i++) {
		prompt += "\r\n#b#L" + i + "#" + answer[i] + "#l#k"
	    }
				
	    cm.sendSimple(prompt);
	}
    }
}