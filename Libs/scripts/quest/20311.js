/*
 * Cygnus 3rd Job advancement - Soul Warrior
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0 && status == 1) {
	qm.sendNext("You are not ready yet.");
	qm.dispose();
	return;
    } else if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	qm.sendNext("The jewel you brought back from the Transformer is the tear of the Divine Bird. It's the crystal of it's power. If the Black Wizard has his hands on this, then spells doom for all of us.");
    } else if (status == 1) {
	qm.sendYesNo("For your effort in preventing a potentially serious disaster, the Godess has bestowed upon a new title for you. Are you ready to accept it?");
    } else if (status == 2) {
	if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 70) * 3) {
	    qm.sendNext("You still have way too much #bSP#k with you. You can't earn a new title like that. I strongly urge you to use more SP on your 1st and second level skills.");
	} else {
	    if (qm.canHold(1142068)) {
		qm.gainItem(1142068, 1);
		qm.changeJob(1111);
		qm.gainAp(5);
		qm.sendOk(", as of this moment, you are now the Knight Sergeant. From this moment on, you shall carry yourself with dignity and respect befitting your new title The Knight Sergeant of Knights of cygnus. May your glory shines as bright as it is right now.");
	    } else {
		qm.sendOk("Please make space in your inventory.");
	    }
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}