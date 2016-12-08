var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	if (cm.getPlayer().getMapId() == 105050400) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032496)) {
			cm.sendYesNo("Would you like to move to Astaroth's Strolling Place?");
		} else {
			cm.sendOk("You need to be less than level 40 and need the Devil Hunter's Necklace to enter.");
			cm.dispose();
		}
	} else if (cm.getPlayer().getMapId() == 677000011) { //warp to another astaroth map.
		cm.warp(677000013,0);
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 677000013) { //warp to another astaroth map.
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032496)) {
			if (cm.getParty() == null) {
				cm.sendOk("You must be in a party to enter.");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
	    				var cPlayer = it.next();
	    				if ((cPlayer.getLevel() >= 10 && cPlayer.getLevel() < 40) || cPlayer.getJobId() == 900) {
						levelValid += 1;
				    	} else {
						next = false;
	    				}
				    	if (cPlayer.getMapid() == mapId) {
						inMap += 1;
				    	}
				}
				if (party.size() < 2 || inMap < 2) {
				    next = false;
				}
				if (next) {
					if (cm.getMap(677000012).getCharactersSize() > 0) {
						cm.sendOk("There are people attempting to defeat Astaroth already.");
					} else {
						cm.warpParty(677000012);
					}
				} else {
					cm.sendOk("You need a party of at least two in the same map and less than level 40.");
				}
			}
		} else {
			cm.warp(105050400,0);
		}
		cm.dispose();
	} else {
		if (cm.getParty() != null) {
			cm.warpParty(677000011);
		} else {
			cm.warp(677000011,0);
		}
		cm.dispose();
	}
} else {
	cm.warp(677000010,0);
	cm.dispose();
    }
}