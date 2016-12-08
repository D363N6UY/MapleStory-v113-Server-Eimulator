function enter(pi) {
	if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "This boss may only be attempted on channel 1 and 2");
		return false;
	}
    if (pi.haveItem(4031870)) {
	pi.warp(922020300, 0);
	return true;
    }
    if (!pi.haveItem(4031172)) {
	return false;
    }
    if (pi.getPlayerCount(220080001) <= 0) { // Papu Map
	var papuMap = pi.getMap(220080001);

	papuMap.resetFully();

	pi.playPortalSE();
	pi.warp(220080001, "st00");
	return true;
    } else {
	if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
	    pi.playPortalSE();
	    pi.warp(220080001, "st00");
	    return true;
	} else {
	    pi.playerMessage(5, "The battle against Papulatus has already begun, so you may not enter this place.");
	    return false;
	}
    }

/*    var canEnter = false;

    if (pi.haveItem(4031172)) { // Ludibrium Medal
	var currenttime = new Date().getTime();
	var record = pi.getQuestRecord(7200);
	var diff = currenttime - record.getCompletionTime();
	
	// After 1 day
	if (diff >= 86400000) { // 24 hours
	    record.setCompletionTime(currenttime);
	    record.setCustomData("1");
	    canEnter = true;
	} else {
	    var recordData = record.getCustomData();
	    if (recordData == null || recordData.equals("")) {
		record.setCompletionTime(currenttime);
		record.setCustomData("1");
		canEnter = true;
	    } else if (recordData.equals("1")) {
		record.setCustomData("2");
		canEnter = true;
	    }
	}
    } else {
	return false;
    }
    if (!canEnter) {
	pi.playerMessage(5, "You may only enter the Origin of Clocktower twice per day.");
	return false;
    }*/
}