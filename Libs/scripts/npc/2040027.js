/*
	Fourth Eos Rock - Ludibrium : Eos Tower 1st Floor (221020000)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4001020)) {
	    cm.sendYesNo("You can use #bEos Rock Scroll#k to activate #bFourth Eos Rock#k. Will you head over to #bThird Eos Rock#k at the 41st floor?");
	} else {
	    cm.sendOk("There's a rock that will enable you to teleport to #bThird Eos Rock#k, but it cannot be activated without the scroll.");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4001020, -1);
	cm.warp(221021700, 3);
	cm.dispose();
    }
}