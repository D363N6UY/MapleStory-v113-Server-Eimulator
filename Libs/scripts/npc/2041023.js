/*
	Flo - Crossroad of Time(220040200)
**/

function start() {
    if (cm.getQuestStatus(6225) == 1 || cm.getQuestStatus(6315) == 1) {
	var ret = checkJob();
	if (ret == -1) {
	    cm.sendOk("Please form a party and talk to me again.");
	} else if (ret == 0) {
	    cm.sendOk("Please make sure that your party is a size of 2.");
	} else if (ret == 1) {
	    cm.sendOk("One of your party member's job is not eligible for entering the other world.");
	} else if (ret == 2) {
	    cm.sendOk("One of your party member's level is not eligible for entering the other world.");
	} else {
	    var dd = cm.getEventManager("ElementThanatos");
	    if (dd != null) {
		dd.startInstance(cm.getParty(), cm.getMap());
	    } else {
		cm.sendOk("An unknown error occured.");
	    }
	}
    } else {
	cm.sendOk("You seems to have no reason to meet element-based Thanatos.");
    }
    cm.dispose();
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    if (party.getMembers().size() != 2) {
	return 0;
    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 212 || cPlayer.getJobId() == 222 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}