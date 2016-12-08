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
    if (cm.getMapId() != 680000100) {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("Do you want to enter the Wedding Hall?");
    } else if (status == 1) {

	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    if (data.equals("1")) {
		if (cm.getPlayer().getMarriageId() <= 0) {
		    cm.sendOk("Something wrong has happened: you aren't engaged with anybody.");
		    cm.dispose();
		    return;
		}
	    	var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	    	if (chr == null) {
		    cm.sendOk("Make sure your partner is in the map.");
		    cm.dispose();
		    return;
	    	}
		var maps = Array(680000110, 680000300, 680000401);
		for (var i = 0; i < maps.length; i++) {
		    if (cm.getMap(maps[i]).getCharactersSize() > 0) {
			cm.sendNext("Someone is already having a wedding, please come later.");
			cm.dispose();
			return;
		    }
		}
		var map = cm.getMap(680000110);
		cm.getPlayer().changeMap(map, map.getPortal(0));
		chr.changeMap(map, map.getPortal(0));
		cm.worldMessage(5, "<Channel " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + " and " + chr.getName() + "'s wedding is about to be started.");
	    } else {
		if (cm.getMap(680000110).getCharactersSize() == 0) {
		    cm.sendNext("No one is already having a wedding, please come later.");
		    cm.dispose();
		    return;
		}
		if (cm.haveItem(4150000)) {
		    cm.warp(680000110,0);
		} else {
		    cm.sendOk("You do not have a wedding invitation.");
		}
	    }
	cm.dispose();
    }
}