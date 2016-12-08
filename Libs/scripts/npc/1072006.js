/*
	Bowman Job Instructor - Ant Tunnel For Bowman (108000100)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031013, 30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100001);
	    cm.startQuest(100002);
	    cm.sendOk("You're a true hero! Take this and Athena will acknowledge you.");
	} else {
	    cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.warp(106010000, 1);
	cm.gainItem(4031012, 1);
	cm.dispose();
    }
}	