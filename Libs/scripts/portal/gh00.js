
function enter(pi) {
	var returnMap = pi.getSavedLocation("Gachapon");
	if (returnMap < 0) {
		returnMap = 100000000;
	}
	var target = pi.getClient().getChannelServer().getMapFactory().getMap(returnMap);
	var targetPortal;
	if (returnMap == 100000000) {
		targetPortal = target.getPortal(2);
	} else {
		targetPortal = target.getPortal(0);
	}
	pi.clearSavedLocation("Gachapon");
	pi.getPlayer().changeMap(target, targetPortal);
	return true;
}
