
importPackage(Packages.tools);

function init() {
	
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup(mapid) {

    var eim = em.newInstance("3rdCake" +  mapid );
	
	eim.setProperty("stage", "1");
	
    var map = eim.setInstanceMap(749020000 + (100 * parseInt(mapid)));
	
	map.killAllMonsters(false);
	
    map.resetFully();
	
	
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
	player.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "請在限定時間內，避開薑餅人並點燃蠟燭！"));
	eim.startEventTimer(180000,player); 
}



function scheduledTimeout(eim,player) {
    eim.unregisterPlayer(player);

	player.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "時間到！"));
    var map = eim.getMapFactory().getMap(749020920);
    player.changeMap(map, map.getPortal(0));
    if (eim.disposeIfPlayerBelow(0, 0)) {
		eim.setProperty("state", "0");
	}
}

function cancelSchedule() {
}

function changedMap(eim, player, mapid) {
	if(mapid == 749020900){
		eim.startEventTimer(180000,player); 
		if (eim.disposeIfPlayerBelow(0, 0)) {
			eim.setProperty("state", "0");
		}
	}else if(mapid < 749020000 || mapid >749020800){
		eim.unregisterPlayer(player);

		if (eim.disposeIfPlayerBelow(0, 0)) {
			eim.setProperty("state", "0");
		}
	}
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var map = eim.getMapFactory().getMap(749020920);
    player.changeMap(map, map.getPortal(0));

    if (eim.disposeIfPlayerBelow(0, 0)) {
    	eim.setProperty("state", "0");
    }
}

//for offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
    	eim.setProperty("state", "0");
    }
}



