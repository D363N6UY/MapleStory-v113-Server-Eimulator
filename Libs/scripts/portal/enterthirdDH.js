function enter(pi) {
    if (pi.getQuestStatus(20601) == 1 || pi.getQuestStatus(20602) == 1 || pi.getQuestStatus(20603) == 1 || pi.getQuestStatus(20604) == 1 || pi.getQuestStatus(20605) == 1) {
	if (pi.getPlayerCount(913010200) == 0) {
	    var map = pi.getMap(913010200);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913010200, 0);
	} else {
	    pi.playerMessage("Someone is already attempting to defeat the boss. Better come back later.");
	}
    } else {
	pi.playerMessage("The only way to enter the hall #3 is if you're training for the Level 100 skills.");
    }
}