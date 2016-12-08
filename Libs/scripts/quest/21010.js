/*
 * The return of the Hero
 * Rien Cold Forest 1
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("No no no, you don't have to say no. It's just a potion, anyway. Besides, for a hero like you, I can give you these all day! Let me know when you change your mind.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("Hmmm? What's human doing here? Wait, hey there #p1201000#. What brought you here? Oh and... do you know this person, #p1201000#? What? A hero?");
    } else if (status == 1) {
	qm.sendNextPrev("     #i4001170#");
    } else if (status == 2) {
	qm.sendNextPrev("Wait, so I am looking at the very person that your race has been waiting for hundreds of years? Wow!! I could tell the hero looked a bit different from the rest...");
    } else if (status == 3) {
	qm.askAcceptDecline("But because of that curse of the Black Wizard that got you trapped in ice for hundreds of years, you do look quite weak. #bHere's a potion for recovery. Please take it#k.");
    } else if (status == 4) { // TODO HP set to half
	qm.sendNext("Just drink it up first, then we'll continue our talk!");
	qm.gainItem(2000022, 1);
	qm.forceStartQuest();
    } else if (status == 5) {
	qm.sendNextPrevS("#b(Wait, how do I drink this? I don't remember...)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(0xE);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("I've been searching through blocks of ice inside the cave in hopes of finding our hero, but... I didn't think I'd actually see one in front of me right now! The prophecy is correct! #p1201000#, you were right! Now that the hero has been resurrected, we won't have to worry about the Black Wizard anymore, right?");
    } else if (status == 1) {
	qm.sendNextPrev("Wait, I have been holding onto you for too long. I'm sorry, but I bet you other penguins will react the same way as I did. I know you're busy and all, but on your way to town, #bplease go strike up a conversation with other penguins#k. Everyone will be shocked if the hero is the one initiating a conversation with them! \n\r #fUI/UIWindow.img/QuestIcon/4/0# \r #i2000022# #t2000022# 5 \r #i2000023# #t2000023# 5 \n\r #fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
    } else if (status == 2) {
	qm.sendNextPrev("Wow, you managed to level up! That means you may have acquired skill points too. In the world of Maple, every level up means 3 skill points. Press #bK#k to open the skill window and find out.");
	if (qm.getQuestStatus(21010) == 1) {
	    qm.gainExp(16);
	    qm.gainItem(2000022, 5);
	    qm.gainItem(2000023, 5);
	    qm.forceCompleteQuest();
	}
    } else if (status == 3) {
	qm.sendNextPrevS("#b(These penguins are so nice to me in every way possible, yet I don't remember them one bit. I better check the skill window first... but how do I do that?)#k");
    } else if (status == 4) {
	qm.summonMsg(0xF);
	qm.dispose();
    }
}