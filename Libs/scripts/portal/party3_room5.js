function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010600);
		pi.playPortalSE();
		return true;
	} else {
		pi.playerMessage(5,"Please get the leader in this portal.");
		return false;
	}
}