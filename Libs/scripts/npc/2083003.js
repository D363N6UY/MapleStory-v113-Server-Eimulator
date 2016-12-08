/*
	This file is part of the OdinMS Maple Story Server
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
*/

/*Stump at the Room of Maze
 *For Jvlaple's Horntail PQ
 *@author Jvlaple :)
 */
 
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.maps);
importPackage(java.lang);

var curStage;

function start() {
	status = -1;
	action(1, 0, 0);
	//var eim = cm.getPlayer().getEventInstance();
	//var party = eim.getPlayers();
	//var 
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var eim = cm.getPlayer().getEventInstance();
			var party = eim.getPlayers();
			if (eim.getProperty("theLvl") == null) {
				eim.setProperty("theLvl", "0");
			}
		curStage = parseInt(eim.getProperty("theLvl"));
			if (curStage == 0) {
				if (cm.haveItem(4001087, 1)) {
					cm.sendNext("Great, you brought me the key. The door will now be unlocked.");
					eim.setProperty("2stageclear", "true");
					eim.setProperty("theLvl", curStage + 1);
					var packetef = MaplePacketCreator.showEffect("quest/party/clear");
					var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
					var map = eim.getMapInstance(240050101);
					map.broadcastMessage(packetef);
					map.broadcastMessage(packetsnd); 
					cm.gainItem(4001087, -1);
					cm.dispose();
				} else {
					cm.sendNext("Please wait for the key to appear.");
					cm.dispose();
				}
			}
			
			if (curStage == 1) {
				if (cm.haveItem(4001088, 1)) {
						cm.sendNext("Great, you brought me the key. The door will now be unlocked.");
						eim.setProperty("3stageclear", "true");
						eim.setProperty("theLvl", curStage + 1);
						var packetef = MaplePacketCreator.showEffect("quest/party/clear");
						var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
						var map = eim.getMapInstance(240050102);
						map.broadcastMessage(packetef);
						map.broadcastMessage(packetsnd); 
						cm.gainItem(4001088, -1);
						cm.dispose();
					} else {
					cm.sendNext("Please wait for the key to appear.");
					cm.dispose();
				}
			}
			
			else if (curStage == 2) {
				if (cm.haveItem(4001089, 1)) {
					cm.sendNext("Great, you brought me the key. The door will now be unlocked.");
					eim.setProperty("4stageclear", "true");
					eim.setProperty("theLvl", curStage + 1);
					var packetef = MaplePacketCreator.showEffect("quest/party/clear");
					var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
					var map = eim.getMapInstance(240050103);
					map.broadcastMessage(packetef);
					map.broadcastMessage(packetsnd); 
					cm.gainItem(4001089, -1);
					cm.dispose();
				} else {
					cm.sendNext("Please wait for the key to appear.");
					cm.dispose();
				}
			}
			
			if (curStage == 3) {
				if (cm.haveItem(4001090, 1)) {
					cm.sendNext("Great, you brought me the key. The door will now be unlocked.");
					eim.setProperty("5stageclear", "true");
					eim.setProperty("theLvl", curStage + 1);
					var packetef = MaplePacketCreator.showEffect("quest/party/clear");
					var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
					var map = eim.getMapInstance(240050104);
					map.broadcastMessage(packetef);
					map.broadcastMessage(packetsnd); 
					cm.gainItem(4001090, -1);
					cm.dispose();
				} else {
					cm.sendNext("Please wait for the key to appear.");
					cm.dispose();
				}
			}
			
			if (curStage == 4) {
					cm.sendNext("You have cleared the maze, wait for your party leader to appear.");
					cm.dispose();
			}
			
			if (curStage > 4) {
					cm.dispose();
			}
				
		}
	}
}
			
