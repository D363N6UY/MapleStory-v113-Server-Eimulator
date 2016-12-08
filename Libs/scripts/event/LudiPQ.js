/*
 * This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

	THIS  FILE WAS MADE BY JVLAPLE. REMOVING THIS NOTICE MEANS YOU CAN'T USE THIS SCRIPT OR ANY OTHER SCRIPT PROVIDED BY JVLAPLE.
 */

/*
 * @Author Jvlaple
 *
 * Ludibrium Party Quest
 */


importPackage(Packages.world);
importPackage(Packages.client);
importPackage(Packages.server.maps);
importPackage(Packages.tools);
importPackage(java.lang);

var exitMap;
var instanceId;
var minPlayers = 1;

function init() {
	instanceId = 1;
        em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup() {
        em.setProperty("state", "1");
//	instanceId = em.getChannelServer().getInstanceId();
	exitMap = em.getChannelServer().getMapFactory().getMap(922010000); //Teh exit map :) <---------t
	var instanceName = "LudiPQ" ;//+ instanceId;
	var eim = em.newInstance(instanceName);
	var mf = eim.getMapFactory();
//	em.getChannelServer().addInstanceId();
	var map = mf.getMap(922010100);//wutt
	var map = eim.getMapInstance(922010100);
	
	mf.getMap(922010100).resetFully();
	mf.getMap(922010200).resetFully();
	mf.getMap(922010201).resetFully();
	mf.getMap(922010300).resetFully();
	mf.getMap(922010400).resetFully();
	mf.getMap(922010401).resetFully();
	mf.getMap(922010402).resetFully();
	mf.getMap(922010403).resetFully();
	mf.getMap(922010404).resetFully();
	mf.getMap(922010405).resetFully();
	mf.getMap(922010500).resetFully();
	mf.getMap(922010501).resetFully();
	mf.getMap(922010502).resetFully();
	mf.getMap(922010503).resetFully();
	mf.getMap(922010504).resetFully();
	mf.getMap(922010505).resetFully();
	mf.getMap(922010506).resetFully();
	mf.getMap(922010600).resetFully();
	mf.getMap(922010700).resetFully();
	mf.getMap(922010800).resetFully();
	mf.getMap(922010900).resetFully();
	mf.getMap(922011100).resetFully();
	
	map.getPortal(2).setScriptName("lpq1");
	var map1 = eim.getMapInstance(922010200);
	map1.getPortal(2).setScriptName("lpq2");
	var map2 = eim.getMapInstance(922010300);
	map2.getPortal(2).setScriptName("lpq3");
	var map3 = eim.getMapInstance(922010400);
	map3.getPortal(7).setScriptName("lpq4");
	var map4 = eim.getMapInstance(922010500);
	map4.getPortal(8).setScriptName("lpq5");
	var map5 = eim.getMapInstance(922010700);
	map5.getPortal(2).setScriptName("lpq6");
	var map6 = eim.getMapInstance(922010800);
	map6.getPortal(2).setScriptName("lpqboss");
	var mapBoss = eim.getMapInstance(922010900);
	mapBoss.getPortal(0).setScriptName("blank");

	eim.setProperty("entryTimestamp",System.currentTimeMillis() + (60 * 60000));

	eim.startEventTimer(60 * 60000); 
	
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(922010100);
	player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    if (eim.isLeader(player) || party.size() <= minPlayers) { // Check for party leader
        var party = eim.getPlayers();
        for (var i = 0; i < party.size(); i++)
            playerExit(eim, party.get(i));
        eim.dispose();
    } else
        playerExit(eim, player);
}

function playerDisconnected(eim, player) {
    var party = eim.getPlayers();
    if (eim.isLeader(player) || party.size() < minPlayers) {
        var party = eim.getPlayers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).equals(player))
                removePlayer(eim, player);
            else
                playerExit(eim, party.get(i));
        eim.dispose();
    } else
        removePlayer(eim, player);
}

function leftParty(eim, player) {			
    var party = eim.getPlayers();
    if (party.size() < minPlayers) {
        for (var i = 0; i < party.size(); i++)
            playerExit(eim,party.get(i));
        eim.dispose();
    } else
        playerExit(eim, player);
         
}

function disbandParty(eim) {
    var party = eim.getPlayers();
    for (var i = 0; i < party.size(); i++) {
        playerExit(eim, party.get(i));
    }
    eim.dispose();
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, exitMap.getPortal(0));
}

function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
}

function clearPQ(eim) {
		var party = eim.getPlayers();
        var bonusMap = eim.getMapInstance(922011000);
		bonusMap.resetFully();
		for (var i = 0; i < party.size(); i++){
			var player = party.get(i);
			player.changeMap(bonusMap, bonusMap.getPortal(0));
		}
		eim.startEventTimer(60000); 
//        eim.schedule("finish", 60000)
        em.setProperty("state", "0");
}

function finish(eim) {
		var dMap = eim.getMapInstance(922011100);
        var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++){
			var player = party.get(i);
			player.changeMap(dMap, dMap.getPortal(0));
			eim.unregisterPlayer(player);
		}
		eim.dispose();
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function scheduledTimeout(eim) {
    if (eim != null) {
		var Leader = eim.getPlayers().get(0);
		if(Leader != null){
			var mapId = Leader.getMapId();
			if(mapId == 922011000){ //if in bouns map.
				finish(eim);
			}else{
				if (eim.getPlayerCount() > 0) {
					var pIter = eim.getPlayers().iterator();
					while (pIter.hasNext())
						playerExit(eim, pIter.next());
				}
				eim.dispose()
			}
		}else{
			eim.dispose();
		}
    }
}

function changedMap(eim, player, mapid) {
	if(mapid <= 922010000  || mapid >= 922011100){
		eim.unregisterPlayer(player);
		if(mapid != 922011100)
			if(eim.isLeader(player)){
				finish(eim);
			}
			player.changeMap(exitMap, exitMap.getPortal(0));
	}
}