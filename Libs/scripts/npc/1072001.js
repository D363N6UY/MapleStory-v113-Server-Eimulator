/* Magician Job Instructor
	Magician 2nd Job Advancement
	Victoria Road : The Forest North of Ellinia (101020000)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0 && cm.getQuestStatus(100007) == 1) {
	status = 3;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100007) == 2) {
	    cm.sendOk("You're truly a hero!");
	    cm.safeDispose();
	} else if (cm.getQuestStatus(100006) >= 1) {
	    cm.completeQuest(100006);
	    if (cm.getQuestStatus(100006) == 2) {
		cm.sendNext("Oh, isn't this a letter from #bGrendel the Really Old#k?");
	    }
	} else {
	    cm.sendOk("I can show you the way once your ready for it.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.sendNextPrev("So you want to prove your skills? Very well...")
    } else if (status == 2) {
	cm.askAcceptDecline("I will give you a chance if you're ready.");
    } else if (status == 3) {
	cm.startQuest(100007);
	cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
    } else if (status == 4) {
	//	    cm.gainItem(4031009, -1);
	cm.warp(108000200, 0);
	cm.dispose();
    }
}	