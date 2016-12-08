var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
		cm.removeAll(4031595);
		cm.removeAll(4031594);
		cm.removeAll(4031597);
    if (status == 0) {
	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
	    cm.sendNext("Only married people above level 40 may talk to me.");
	    cm.dispose();
	} else {
	    if (cm.haveItem(4031592)) {
		cm.sendNext("I can let you in. Want to proceed? You will lose your Entrance Ticket immediately.");
		return;
	    }
	    var apq = cm.getQuestRecord(160000);
	    var data = apq.getCustomData();
	    if (data == null) {
		apq.setCustomData("0");
		data = "0";
	    }
	    var time = parseInt(data);
	    if (time + (6 * 3600000) < cm.getCurrentTime()) { //6 hours 
		if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
		    cm.gainItem(4031593, -10);
		    cm.gainItem(4031592, 1);
		    cm.sendOk("Here you are. I've recorded your time right now.");
		    apq.setCustomData("" + cm.getCurrentTime());
		} else {
		    cm.sendOk("Get me 10 Lip Lock keys from the monsters. You may only have one Entrance Ticket at a time.");
		}
	    } else {
		cm.sendNext("Oho, it looks like you've already went in here for the past 6 hours. Come back later.");
	    }
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4031592, -1);
	cm.warp(670010100,0);
	cm.dispose();
    }
}