/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("Make up your mind and visit me again.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
		cm.sendNext("So you decided to become a #rBowman#k?");
	    } else {
		cm.sendOk("Train a bit more and I can show you the way of the #rBowman#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 300) { // BOWMAN
		if (cm.getQuestStatus(100000) >= 1) {
		    cm.completeQuest(100002);
		    if (cm.getQuestStatus(100002) == 2) {
			status = 20;
			cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
		    } else {
			if (!cm.haveItem(4031010)) {
			    cm.gainItem(4031010, 1);
			}
			cm.sendOk("Go and see the #rJob Instructor#k.")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("The progress you have made is astonishing.");
		}
	    } else if (cm.getQuestStatus(100100) == 1) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("Alright, now take this to #bRene#k.");
		} else {
		    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
		    cm.startQuest(100101);
		}
		cm.dispose();
	    } else {
		cm.sendOk("You have chosen wisely.");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("It is an important and final choice. You will not be able to turn back.");
    } else if (status == 2) {
	cm.sendYesNo("Do you want to become a #rBowman#k?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 25, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(300); // BOWMAN
	}
	cm.gainItem(1452002, 1);
	cm.gainItem(2060000, 1000);
	cm.sendOk("So be it! Now go, and go with pride.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("You may be ready to take the next step as a #r獵人#k or #r弩弓手#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("But first I must test your skills. Are you ready?");
    } else if (status == 13) {
	cm.startQuest(100000);
	cm.gainItem(4031010, 1);
	cm.sendOk("Go see the #bJob Instructor#k near Henesys. He will show you the way.");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("What do you want to become?#b\r\n#L0#獵人#l\r\n#L1#弩弓手#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "Hunter";
	    job = 310; // HUNTER
	} else {
	    jobName = "Crossbowman";
	    job = 320; // CROSSBOWMAN
	}
	cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("So be it! Now go, and go with pride.");
    }
}	
