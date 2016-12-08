/**
	Orange Balloon - LudiPQ 2nd stage NPC
**/

var status;
var exp = 2520;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");
    
    if (stage2status == null) {
	if (cm.isLeader()) { // Leader
	    var stage2leader = eim.getProperty("stage2leader");
	    if (stage2leader == "done") {

		if (cm.haveItem(4001022, 15)) { // Clear stage
		    cm.sendNext("Congratulations! You've passed the 2nd stage. Hurry on now, to the 3rd stage.");
		    cm.removeAll(4001022);
		    clear(2, eim, cm);
		    cm.givePartyExp(2520);
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("Are you sure you've brought me #r15 Passes of Dimension#k? Please check again.");
		}
		cm.dispose();
	    } else {
		cm.sendOk("Welcome to the 2nd stage. Go around, and collect #rPasses of Dimension#k from the boxes in this map. Be careful, one of the boxes will lead you into a trap. Once you're done, get your party members to hand all the #rPasses#k to you, then talk to me again.");
		eim.setProperty("stage2leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("Welcome to the 2nd stage. Go around, and collect #rPasses of Dimension#k from the boxes in this map. Be careful, one of the boxes will lead you into a trap. Once you're done, hand all the #rPasses#k to your party leader.");
	    cm.dispose();
	}
    } else {
	cm.sendNext("Congratulations! You've passed the 2nd stage. Hurry on now, to the 3rd stage.");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}