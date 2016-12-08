var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("Oh Aran, you're awake! How's the injury?... What? Do you want to know what's going on right now?");
	} else if (status == 1) {
	    cm.sendNextPrev("We're all set and ready to leave this place. We have everyone on board in the ark, and the Divine Bird offered to protect our ark during the flight, so there's nothing you need to worry. Once we finalize everything, we'll go ahead and escape to Victoria Island.");
	} else if (status == 2) {
	    cm.sendNextPrev("Aran's comrades...? Well... they went over to battle the Black Wizard. They decided to take on the Black Wizard while we make the escape. What? You want to join them in the battle? No, no way! You're injured! You should get on board right now!");
	} else if (status == 3) {
	    cm.forceStartQuest(21002, "1");
	    // Ahh, Oh No. The kid is missing
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendSimple("We're in a state of emergency. What would you like to know? \r #b#L0#Where's the Black Wizard?#l \r #b#L1#How's the preparation for the escape?#l \r #b#L2#How about the comrades?#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("I hear that the Black Wizard is close to where we're right now. We can't even escape through the forest because of the dragons Black Wizard control. That's why we came up with the ark as our escape route. The only way we can leave this place is by flying towards Victoria Island.");
		    break;
		case 1:
		    cm.sendOk("We have everyone on board in the ark, and we're all set and ready to escape this place. We just need a few more on board, and we're off to Victoria Island. During our flight, the Divine Bird offered protection, seeing that she has no one to protect at Erev at this point.");
		    break;
		case 2:
		    cm.sendOk("Your comrades... left here to battle the Black Wizard by themselves, buying some time as we make the escape. They decided not to take you, since you are injured and all. Once we save the kid, you should get on board and leave with us, Aran!");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}