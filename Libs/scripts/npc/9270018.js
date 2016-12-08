// Kerny - Pilot
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getMapId() == 540010002) {
	    cm.dispose();
	} else {
	    cm.sendYesNo("The plane will be taking off soon, Will you leave now? You will have buy the plane ticket again to come in here.");
	}
    } else {
	cm.warp(540010000, 0);
	cm.dispose();
    }
}