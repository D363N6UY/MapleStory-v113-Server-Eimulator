function enter(pi) {
    if (pi.getQuestStatus(21013) == 2) {
	pi.playPortalSE();
	pi.warp(140090500, 1);
    } else {
	pi.playerMessage(5, "You must complete the quest before proceeding to the next map.");
    }
}