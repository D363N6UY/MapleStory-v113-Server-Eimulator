var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendOk("Ok, feel free to hang around until you're ready to go!");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (cm.getMapId() == 680000300 && cm.getQuestRecord(160002).getCustomData() != null) {
	var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
	if (dat > 30) {
	    if (status == 0) {
	    	cm.sendYesNo("I can take you to Bonus Stage. Are you ready to go?");
	    } else {
		cm.warpMap(680000401,0);
		cm.dispose();
	    }
	    return;
	}
    }
    if (status == 0) {
	cm.sendYesNo("I can take you to the Amoria Village. Are you ready to go?");
    } else if (status == 1) {
	cm.warp(680000500, 0);
	cm.dispose();
    }
}