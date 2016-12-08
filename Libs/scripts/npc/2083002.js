/*
	Crystal of Roots - Leafre Cave of life
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getMapId() == 240050400) {
	    cm.sendYesNo("Do you want to go back to #m240050000#?");
	} else {
	    cm.sendYesNo("Do you want to go back to #m240050400#?");
	}
    } else if (status == 1) {
	if (cm.getMapId() == 240050400) {
	    cm.warp(240050000, 0);
	} else {
	    cm.warp(240050400, 0);
	}
	cm.dispose();
    }
}