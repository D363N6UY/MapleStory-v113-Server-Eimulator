/*
 * Tutorial Lirin
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
if (cm.getPlayer().getMapId() != 140090000) {
if (status == 0) {
	cm.sendSimple("Wait! The information listed below can all be obtained simply by playing through Level 10, so it's not something you'll need to learn way in advance. Only the ones that would like to learn these in advance should continue from here on out. \n\r Okay, which of these would you like to learn more of?  \n\r #b#L1#Minimap#l \n\r #b#L2#Quest window#l \n\r #b#L3#Inventory#l \n\r #b#L4#Regular attacks#l \n\r #b#L5#Picking up items#l \n\r #b#L6#Equipping an item#l \n\r #b#L7#Skill window#l \n\r #b#L8#How to use Quick Slot#l \n\r #b#L9#Breaking the box#l \n\r #b#L10#Sitting on a chair#l \n\r #b#L11#Raising stats#l");
} else {
    cm.summonMsg(selection);
    cm.dispose();
}
} else {
    if (cm.getInfoQuest(21019).equals("")) {
	if (status == 0) {
	    cm.sendNext("You... are finally awake!");
	} else if (status == 1) {
	    cm.sendNextPrevS("...who are you?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("I've been waiting for you. Waiting for the hero that fought the Black Wizard to finally wake up...!");
	} else if (status == 3) {
	    cm.sendNextPrevS("Wait, what are you saying? And who are you...?", 2);
	} else if (status == 4) {
	    cm.sendNextPrevS("Wait... who am I...? I don't remember a thing from the past. Ouch... and I have a terrible headache!", 2);
	} else if (status == 5) {
	    cm.updateInfoQuest(21019, "helper=clear");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
	    cm.playerSummonHint(true);
	    cm.dispose();
	}
    } else {
	if (status == 0) {
	    cm.sendNext("Are you okay?");
	} else if (status == 1) {
	    cm.sendNextPrevS("I... really don't remember a thing... Where am I? And who are you?", 2);
	} else if (status == 2) {
	    cm.sendNextPrev("Relax. The curse of the Black Wizard is the reason why you don't have any memories with you. There's no need to worry about what happened in the past. I'll explain it to you in detail.");
	} else if (status == 3) {
	    cm.sendNextPrev("You're a bonafide hero here. A few hundred years ago, you and your friends battled the Black Wizard and saved the world of Maple from a certain destruction. But at the last possible moment, the Black Wizard gave you a curse, which had you frozen in ice for a long time while completely wiping out your memory.");
	} else if (status == 4) {
	    cm.sendNextPrev("You are currently at an island called Rien, and it's the island the Black Wizard chose to trap you for hundreds of years. Because of his curse, this island is always covered in snow and ice, even though the weather is nothing close to that level. You were found somewhere deep in the cave.");
	} else if (status == 5) {
	    cm.sendNextPrev("And my name is Lirin, a member of the Rien race. The Rien race has been holding hope for your return for centuries, and now... the hope has finally paid off. You are here, standing right in front of me, the living breathing legend.");
	} else if (status == 6) {
	    cm.sendNextPrev("I may have given you too much information all at once. If you have yet to catch on to everything, then that's okay. You'll find out, sooner or later. In the mean time, #byou should head over to town#k. If you have any questions before getting to town, please feel free to ask me.");
	} else if (status == 7) {
	    cm.playerSummonHint(true);
	    cm.warp(140090100, 1);
	    cm.dispose();
	}
    }
}
}