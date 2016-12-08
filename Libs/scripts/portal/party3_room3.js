function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010400);
		pi.playPortalSE();
		return true;
	} else {
		pi.playerMessage(5,"Please get the leader in this portal.");
		return false;
	}
	
}