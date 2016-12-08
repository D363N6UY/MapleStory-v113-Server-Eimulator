function enter(pi) {
	var returnMap = pi.getSavedLocation("MONSTER_CARNIVAL");
	if (returnMap < 0) {
		returnMap = 103000000; // to fix people who entered the fm trough an unconventional way
	}
	if (returnMap == 980000010) {
		returnMap = 103000000; // to fix people who entered the fm trough an unconventional way
	}
	pi.clearSavedLocation("MONSTER_CARNIVAL");
	pi.warp(returnMap,0);
	return true;
}