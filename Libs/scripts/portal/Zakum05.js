/*
    Zakum Entrance
*/

function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "You are not ready to face the boss.");
	return false;

    } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "You do not have the Eye of Fire.  You may not face the boss.");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}