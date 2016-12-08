var status = -1;
var minLevel = 35; // 35
var maxLevel = 50; // 65

var minPartySize = 6;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
	if (status == 0) {
	    cm.dispose();
		return;
	}
	status--;
    }
    if (status == 0) {
		cm.removeAll(4001022);
		cm.removeAll(4001023);
		if (cm.getParty() == null) { // No Party
			cm.sendSimple("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it unless with great teamwork. If you want to try it, please tell the #bleader of your party#k to talk to me.\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".#b\r\n#L0#我要兌換有裂痕的眼鏡#l");
		} else if (!cm.isLeader()) { // Not Party Leader
			cm.sendSimple("If you want to try the quest, please tell the #bleader of your party#k to talk to me.#b\r\n#L0#我要兌換有裂痕的眼鏡#l");
		} else {
			// Check if all party members are within PQ levels
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;
			var it = party.iterator();
	
			while (it.hasNext()) {
				var cPlayer = it.next();
				if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
					levelValid += 1;
				} else {
					next = false;
				}
				if (cPlayer.getMapid() == mapId) {
					inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
				}
			}
			if (party.size() > maxPartySize || inMap < minPartySize) {
				next = false;
			}
			if (next) {
				var em = cm.getEventManager("LudiPQ");
				if (em == null) {
					cm.sendSimple("The Ludibrium PQ has encountered an error. Please report this on the forums, with a screenshot.#b\r\n#L0#I want the Broken Glasses.#");
				} else {
					var prop = em.getProperty("state");
					if (prop.equals("0") || prop == null) {
						em.startInstance(cm.getParty(), cm.getMap());
						cm.removeAll(4001022);
						cm.removeAll(4001023);
						cm.dispose();
					} else {
						cm.sendSimple("Another party has already entered the #rParty Quest#k in this channel. Please try another channel, or wait for the current party to finish.#b\r\n#L0#我要兌換有裂痕的眼鏡#");
					}
				}
			} else {
				cm.sendSimple("Your party is invalid. Please adhere to the following requirements:\r\n\r\n#rRequirements: " + minPartySize + " Party Members, all between level " + minLevel + " and level " + maxLevel + ".#b\r\n#L0#我要兌換有裂痕的眼鏡#l");
			}
		}
    } else { //broken glass
		var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
		if (cm.haveItem(1022073,1)) {
			cm.sendOk("You already have the Broken Glasses.");
		} else if (!cm.canHold(1022073,1)) {
			cm.sendOk("Make room for these Glasses.");
		} else if (cmp != null && parseInt(cmp) >= 35) {
			if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
				cm.gainItem(1022073, 1, true); //should handle automatically for "have"
			} else {
				cm.sendOk("You already have the Broken Glasses.");
			}
		} else {
			cm.sendOk("Come back when you have done 35 Ludibrium PQ. You have only done " + (cmp == null ? "0" : cmp));
		}
		cm.dispose();
    }
}