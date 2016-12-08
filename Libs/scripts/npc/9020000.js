/*
	Lakelis - Victoria Road: Kerning City (103000000)
**/

function start() {
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    if (cm.getParty() == null) { // No Party
	cm.sendOk("請組隊再來找我");
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendOk("請叫你的隊長來找我!");
    } else {
	// Check if all party members are within Levels 21-30
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 21 && cPlayer.getLevel() <= 30) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
	    }
	}
	if (party.size() > 4 || inMap < 4) {
	    next = false;
	}
	if (next) {
	    var em = cm.getEventManager("KerningPQ");
	    if (em == null) {
		cm.sendOk("This PQ is not currently available.");
	    } else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
		    em.startInstance(cm.getParty(),cm.getMap());
		} else {
		    cm.sendOk("Someone is already attempting on the quest.");
		}
		cm.removeAll(4001008);
		cm.removeAll(4001007);
	    }
	} else {
	    cm.sendOk("你的隊伍需要四個人,等級必須在21-30之間,請確認你的隊友有沒有都在這裡,或是裡面已經有人了!");
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}