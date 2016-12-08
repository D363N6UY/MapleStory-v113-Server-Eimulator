/*
	Red Balloon - LudiPQ 1st stage NPC
**/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage1status = eim.getProperty("stage1status");

    if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	    var stage1leader = eim.getProperty("stage1leader");
	    if (stage1leader == "done") {

		if (cm.haveItem(4001022, 25)) { // Clear stage
		    cm.sendNext("Congratulations! You've passed the 1st stage. Hurry on now, to the 2nd stage.");
		    cm.removeAll(4001022);
		    clear(1, eim, cm);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("Are you sure you've brought me #r25 Passes of Dimension#k? Please check again.");
		}
		cm.dispose();
	    } else {
		cm.sendOk("Welcome to the 1st stage. Go around, and collect #rPasses of Dimension#k from the #bRatz#k and #bBlack Ratz#k in this map. Once you're done, get your party members to hand all the #rPasses#k to you, then talk to me again.");
		eim.setProperty("stage1leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("Welcome to the 1st stage. Go around, and collect #rPasses of Dimension#k from the #bRatz#k and #bBlack Ratz#k in this map. Once you're done, hand all the #rPasses#k to your party leader.");
	    cm.dispose();
	}
    } else {
	cm.sendNext("Congratulations! You've passed the 1st stage. Hurry on now, to the 2nd stage.");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}