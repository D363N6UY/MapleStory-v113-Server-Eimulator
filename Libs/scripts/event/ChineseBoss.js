
importPackage(Packages.tools);

function init() {
	em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {

    var eim = em.newInstance("ChineseBoss");
	
	em.setProperty("state", "1");
	
    var map = eim.setInstanceMap(701010323);
	
    map.resetFully();
	eim.startEventTimer(600000); 
	
    return eim;
}
function cancelSchedule() {
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}



function scheduledTimeout(eim,player) {
    eim.unregisterPlayer(player);

	player.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "時間內沒有驅逐蜈蚣王，失敗！"));
    var map = eim.getMapFactory().getMap(701010300);
    player.changeMap(map, map.getPortal(0));
    if (eim.disposeIfPlayerBelow(0, 0)) {
		eim.setProperty("state", "0");
	}
	eim.dispose();
}

function changedMap(eim, player, mapid) {
	if(mapid != 701010323){
		eim.unregisterPlayer(player);

		if (eim.disposeIfPlayerBelow(0, 0)) {
			eim.setProperty("state", "0");
		}
		eim.dispose();
	}
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var map = eim.getMapFactory().getMap(701010300);
    player.changeMap(map, map.getPortal(0));

    if (eim.disposeIfPlayerBelow(0, 0)) {
    	eim.setProperty("state", "0");
    }
	eim.dispose();
}

//for offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
    	eim.setProperty("state", "0");
    }
	eim.dispose();
}

function dispose() {
    em.schedule("OpenBoss", 5000); // 5 seconds ?
}
function OpenBoss() {
    em.setProperty("state", "0");
}

