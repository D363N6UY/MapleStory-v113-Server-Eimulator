function enter(pi) {
	if (pi.getPlayer().getClient().getChannel() != 1 && pi.getPlayer().getClient().getChannel() != 2) {
		pi.playerMessage(5, "This boss may only be attempted on channel 1 and 2");
		return false;
	}
    if (!pi.haveItem(4032246)) {
	pi.playerMessage(5, "You do not have the Spirit of Fantasy Theme park.");
    } else {
	if (pi.getPlayerCount(551030200) <= 0) { // Fant. Map
	    var FantMap = pi.getMap(551030200);

	    FantMap.resetFully();

	    pi.playPortalSE();
	    pi.warp(551030200, "sp");
	} else {
	    if (pi.getMap(551030200).getSpeedRunStart() == 0 && (pi.getMonsterCount(551030200) <= 0 || pi.getMap(551030200).isDisconnected(pi.getPlayer().getId()))) {
		pi.playPortalSE();
		pi.warp(551030200, "sp");
	    } else {
		pi.playerMessage(5, "The battle against the boss has already begun, so you may not enter this place.");
	    }
	}
    }
}