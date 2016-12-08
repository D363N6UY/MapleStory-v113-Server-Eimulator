/*
	First Eos Rock - Ludibrium : Eos Tower 100th Floor (221024400)
**/

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
	    cm.sendYesNo("You can use #bEos Rock Scroll#k to activate #bFirst Eos Rock#k. Will you teleport to #bSecond Eos Rock#k at the 71st floor?");
	} else {
	    cm.sendOk("There's a rock that will enable you to teleport to #bSecond Eos Rock#k, but it cannot be activated without the scroll.");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4001020, -1);
	cm.warp(221022900, 3);
	cm.dispose();
    }
}