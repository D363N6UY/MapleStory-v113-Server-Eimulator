
importPackage(Packages.tools);
importPackage(Packages.client.inventory);

function init() {
}

function monsterValue(eim, mobId) {
    return 1;
}

function setClassVars(player) {
    var returnMapId;
    var monsterId;
    var mapId;
    
    if (player.getJob() == 210 || // FP_WIZARD
	player.getJob() == 220 || // IL_WIZARD
	player.getJob() == 230) { // CLERIC
	mapId = 108010201;
	returnMapId = 100040106;
	monsterId = 9001001;
	
    } else if (player.getJob() == 110 || // FIGHTER
	player.getJob() == 120 || // PAGE
	player.getJob() == 130) { // SPEARMAN
	mapId = 108010301;
	returnMapId = 105070200;
	monsterId = 9001000;

    } else if (player.getJob() == 410 || // ASSASIN
	player.getJob() == 420) { // BANDIT
	mapId = 108010401;
	returnMapId = 107000402;
	monsterId = 9001003;

    } else if (player.getJob() == 310 || // HUNTER
	player.getJob() == 320) { // CROSSBOWMAN
	mapId = 108010101;
	returnMapId = 105040305;
	monsterId = 9001002;
    }	else if (player.getJob() == 510 || 
	player.getJob() == 520) { 
	mapId = 108010501;
	returnMapId = 105070001;
	monsterId = 9001004;
    }
    return new Array(mapId, returnMapId, monsterId);
}

function playerEntry(eim, player) {
    var info = setClassVars(player);
    var mapId = info[0];
    var returnMapId = info[1];
    var monsterId = info[2];
    var map = eim.getMapInstance(mapId);
	map.killAllMonsters(false);
    map.toggleDrops();

//	map.resetFully();
	
    player.changeMap(map, map.getPortal(0));
    var mob = em.getMonster(monsterId);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(200, 20));
}

function playerDead(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}
function changedMap(eim, player, mapid) {
	if(mapid < 108010000 ||mapid > 108100000 ){
		eim.unregisterPlayer(player);
		eim.dispose();
	}
}

function playerDisconnected(eim, player) {
    return 0;
}

function allMonstersDead(eim) {
    var price = new Item(4031059, 0, 1);
    var winner = eim.getPlayers().get(0);
    var info = setClassVars(winner);
    var mapId = info[0];
    var monsterId = info[2];

    var map = eim.getMapInstance(mapId);
    map.spawnItemDrop(winner, winner, price, winner.getPosition(), true, false);
//    eim.schedule("warpOut", 120000);
    var mob = em.getMonster(monsterId);
    em.getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(6, "[事件] " + winner.getName() + " 打敗了 " + mob.getStats().getName() + "!"));
}

function cancelSchedule() {
}

function warpOut(eim) {
    var iter = eim.getPlayers().iterator();
    while (iter.hasNext()) {
	var player = iter.next();
	var info = setClassVars(player);
	var returnMapId = info[1];

	var returnMap = em.getChannelServer().getMapFactory().getMap(returnMapId);
	player.changeMap(returnMap, returnMap.getPortal(0));
	eim.unregisterPlayer(player);
    }
    eim.dispose();
}

function leftParty(eim, player) {
	
}

function disbandParty(eim, player) {

}
