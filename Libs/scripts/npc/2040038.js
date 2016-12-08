
/*
	Yellow Balloon - LudiPQ 3rd stage NPC
*/

var status = -1;
var exp = 2940;
			
function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");

    if (stage3status == null) {
	if (cm.isLeader()) { // Leader
	    var stage3leader = eim.getProperty("stage3leader");
	    if (stage3leader == "done") {

		if (cm.haveItem(4001022, 32)) { // Clear stage
		    cm.sendNext("Congratulations! You've passed the 3rd stage. Hurry on now, to the 4th stage.");
		    cm.removeAll(4001022);
		    clear(3,eim,cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		} else { // Not done yet
		    cm.sendNext("Are you sure you've brought me #r32 Passes of Dimension#k? Please check again.");
		}
	    } else {
		cm.sendOk("Welcome to the 3rd stage. Go around, and collect #rPasses of Dimension#k from the #bBloctupuses#k that spawn when you break the boxes in this map. Once you're done, get your party members to hand all the #rPasses#k to you, then talk to me again.");
		eim.setProperty("stage3leader","done");
	    }
	} else { // Members
	    cm.sendNext("Welcome to the 3rd stage. Go around, and collect #rPasses of Dimension#k from the #bBloctupuses#k that spawn when you break the boxes in this map. Once you're done, hand all the #rPasses#k to your party leader.");
	}
    } else {
	cm.sendNext("Congratulations! You've passed the 3rd stage. Hurry on now, to the 4th stage.");
    }
    cm.safeDispose();
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}