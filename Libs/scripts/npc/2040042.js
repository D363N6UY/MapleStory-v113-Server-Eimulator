/*
	Sky-Blue Balloon - LudiPQ 7th stage NPC
**/

var status;
var exp = 4620;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage7status = eim.getProperty("stage7status");

    if (stage7status == null) {
	if (cm.isLeader()) { // Leader
	    var stage7leader = eim.getProperty("stage7leader");
	    if (stage7leader == "done") {

		if (cm.haveItem(4001022,3)) { // Clear stage
		    cm.sendNext("Congratulations! You've passed the 7th stage. Hurry on now, to the 8th stage.");
		    cm.removeAll(4001022);
		    clear(7, eim, cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("Are you sure you've brought me #r3 Passes of Dimension#k? Please check again.");
		}
		cm.dispose();
	    } else {
		cm.sendOk("Welcome to the 7th stage. Go around, and collect #r3 Passes of Dimension#k by summoning #bRombots#k and killing them. Once you're done, get your party members to hand all the #rPasses#k to you, then talk to me again.");
		eim.setProperty("stage7leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("Welcome to the 7th stage. Go around, and collect #rPasses of Dimension#k by summoning #bRombots#k and killing them. Once you're done, hand all the #rPasses#k to your party leader.");
	    cm.dispose();
	}
    } else {
	cm.sendNext("Congratulations! You've passed the 7th stage. Hurry on now, to the 8th stage.");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}