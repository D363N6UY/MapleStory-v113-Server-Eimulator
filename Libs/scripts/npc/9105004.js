var status = -1;

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
    switch(cm.getPlayer().getMapId()) {
	case 889100100: //event map
    	if (status == 0) {
	        cm.sendSimple("Hello~I am Snow Spirit.#b\r\n\r\n#L0#Go to Protect Snowman - Easy (Level 10)#l\r\n#L1#Go to Protect Snowman - Medium (Level 30)#l\r\n#L2#Go to Protect Snowman - Hard (Level 70)#l");
    	} else if (status == 1) {
	        if (selection == 0) {
		    cm.warp(889100000,0); //exit map lobby
		    cm.dispose();
			} else if (selection == 1) {
			cm.warp(889100010,0); //exit map lobby
		    cm.dispose();
			} else if (selection == 2) {
			cm.warp(889100020,0); //exit map lobby
		    cm.dispose();
			}
		}
	    break;
	case 889100000:
	case 889100010:
	case 889100020:
    	    if (status == 0) {
	        cm.sendSimple("Hello~I am Snow Spirit!#b\r\n\r\n#L0#Go to Protect Snowman#l");
    	    } else if (status == 1) {
			var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("Christmas");
    		    if (em == null) {
			cm.sendOk("Please try again later.");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("The leader of the party must be here.");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 2) {
		    		if (em.getInstance("Christmas" + s) == null) {
					em.startInstance_Party("" + s, cm.getPlayer());
		    		} else {
					cm.sendOk("Another party quest has already entered this channel.");
		    		}
			} else {
				cm.sendOk("All members of your party must be here.");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100001:
	case 889100011:
	case 889100021:
		if (cm.getPlayer().getEventInstance() == null || !cm.isLeader()) {
			cm.sendOk("Please, I need your leader.");
		} else {
			if (!cm.getPlayer().getEventInstance().getProperty("stage").equals("1")) {
				cm.sendOk("Please protect the Snowman until the time runs out!");
			} else if (cm.getPlayer().getMap().countMonsterById(9400319) > 0 || cm.getPlayer().getMap().countMonsterById(9400320) > 0 || cm.getPlayer().getMap().countMonsterById(9400321) > 0) {
				cm.sendOk("Please defeat the Cross!");
			} else {
				var s = ((cm.getMapId() % 100) / 10) | 0;
				cm.givePartyExp((s == 0 ? 2500 : (s == 1 ? 7500 : 20000)));
//				cm.givePartyNX((s == 0 ? 2 : (s == 1 ? 5 : 10)));
				cm.warpParty(cm.getMapId() + 1);
			}
		}
		cm.dispose();
		break;
    }
}