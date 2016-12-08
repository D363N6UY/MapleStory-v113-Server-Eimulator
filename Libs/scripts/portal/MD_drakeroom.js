//var baseid = 541020610;
//var dungeonid = 541020620;
//var dungeons = 19;

function enter(pi) {
    if (pi.getMapId() == 105090311) {
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		//		for (var i = 0; i < dungeons; i++) {
		//		    if (pi.getPlayerCount(dungeonid + i) == 0) {
		//			pi.warpParty(dungeonid + i);
		pi.warpParty(105090320);
	    //		    }
	    //		}
	    } else {
		pi.playerMessage(5, "You are not the leader of the party.");
	    }
	} else {
	    //	    for (var i = 0; i < dungeons; i++) {
	    //		if (pi.getPlayerCount(dungeonid + i) == 0) {
	    //		    pi.warp(dungeonid + i);
	    pi.warp(105090320, 0);
	//		}
	//	    }
	}
	pi.playerMessage(5, "All of the Mini-Dungeons are in use right now, please try again later.");
    } else {
	pi.playPortalSE();
	pi.warp(105090311, "MD00");
    }
}