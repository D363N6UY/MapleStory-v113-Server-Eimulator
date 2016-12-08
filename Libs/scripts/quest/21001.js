var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("Nooooo! Aran wants to leave me alone here!!..");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("O.(Shivering) I...was...so...scared...in...here. Please take me to Athena Pierce!");
    } else if (status == 1) {
	if (qm.getQuestStatus(21001) == 0) {
	    qm.gainItem(4001271, 1);
	    qm.forceStartQuest(21001, null);
	}
	qm.warp(914000300, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("Where's the kid? If you brought the kid with you, hand him over to me!");
	    qm.dispose();
	    return;
	} else if (status == 8) { // watching the introduction
	    if (qm.haveItem(4001271)) {
		qm.gainItem(4001271, -1);
	    }
	    qm.MovieClipIntroUI(true);
	    qm.forceCompleteQuest();
	    qm.warp(914090010, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("Ahhh, you're safe! What about the kid? Where's the kid?");
    } else if (status == 1) {
	qm.sendNext("..Oh phew... thank goodness..");
    } else if (status == 2) {
	qm.sendNextPrevS("Get on board right now! We do not have much time!", 3);
    } else if (status == 3) {
	qm.sendNextPrev("Yes, yes. We don't have much time for that. I can feel the force of Black Wizard creeping up ever so close, and I have a feeling the Wizard has located the ark! If we don't leave now, then we will be attacked!");
    } else if (status == 4) {
	qm.sendNextPrevS("Leave now!", 3);
    } else if (status == 5) {
	qm.sendNextPrev("Aran! Get on board right now! I understand that you want to join them in the battle, but... it's too late! Let your friends take care of the Black Wizard, and you should get on right now and escape to Victoria Island!");
    } else if (status == 6) {
	qm.sendNextPrevS("No, I can't do that!", 3);
    } else if (status == 7) {
	qm.sendNextPrevS("Athena Pierce, you take care of these people and head over to Victoria Island. I promise you, I will not die. I will meet you there at the island soon. I better help my friends out and battle the Black Wizard once and for all!", 3);
    } else if (status == 8) {
	qm.sendYesNo("Would you like to skip the video clip?  Even if you skip the scene, game play will not be affected.");
    } else if (status == 9) { // Not watching
	if (qm.haveItem(4001271)) {
	    qm.gainItem(4001271, -1);
	}
	qm.forceCompleteQuest();
	qm.warp(140090000, 0);
	qm.dispose();
    }
}