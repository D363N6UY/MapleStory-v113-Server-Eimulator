/*
	Thief Job Instructor - Thief's Construction Site (108000400)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.haveItem(4031013, 30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100010);
	    cm.startQuest(100011);
	    cm.sendOk("You're a true hero! Take this and the Dark Lord will acknowledge you.");
	} else {
	    cm.sendOk("You will have to collect me #b30 #t4031013##k. Good luck.")
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.warp(102040000, 0);
	cm.gainItem(4031012, 1);
	cm.dispose();
    }
}	