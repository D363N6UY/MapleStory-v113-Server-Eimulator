/* Thomas Swift
	Amoria warper.
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendOk("Ok, feel free to hang around until you're ready to go!");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if (cm.getMapId() == 100000000) {
	    cm.sendYesNo("I can take you to the Amoria Village. Are you ready to go?");
	} else if (cm.getMapId() == 680000500 || cm.getMapId() == 680000501 || cm.getMapId() == 680000502) {
	    cm.setQuestRecord(cm.getPlayer(), 160002, "0");
	    cm.warp(680000000, 0);
	    cm.dispose();
	} else {
	    cm.sendYesNo("I can take you back to Henesys. Are you ready to go?");
	}
    } else if (status == 1) {
	if (cm.getMapId() == 100000000) {
	    cm.warp(680000000, 0);
	} else {
	    cm.warp(100000000, 5);
	}
	cm.safeDispose();
    }
}