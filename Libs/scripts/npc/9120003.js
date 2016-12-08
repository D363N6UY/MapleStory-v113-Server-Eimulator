/*
	Hikari - Showa Town(801000000)
*/

var status = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.sendOk("Please come back some other time.");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("Would you like to enter the bathhouse? That'll be "+300+" mesos for you");
    } else if (status == 1) {
	if (cm.getMeso() < 300) {
	    cm.sendOk("Please check and see if you have "+300+" mesos to enter this place.");
	} else {
	    cm.gainMeso(-300);
	    if (cm.getPlayerStat("GENDER") == 0) {
		cm.warp(801000100);
	    } else {
		cm.warp(801000200);
	    }
	}
	cm.dispose();
    }
}
