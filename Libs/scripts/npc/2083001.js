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

/*The encrypted slate
 *@author Jvlaple <eat268@hotmail.com>
 */

var status = 0;
var minLevel = 0;
var maxLevel = 255;
var minPlayers = 1;
var maxPlayers = 6;

function start() {
    status = -1;
    action(1, 0, 0);
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
			if(cm.getMapId() ==240050000){
				// Slate has no preamble, directly checks if you're in a party
				if (cm.getParty() == null) { // no party
					cm.sendSimple("圍繞著里程碑的邪惡氣息...");
					cm.dispose();
					return;
				}
				if (!cm.isLeader()) { // not party leader
					cm.sendSimple("你不是隊長.");
					cm.dispose();
				}
				else {
					// Check teh partyy
					var party = cm.getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var levelValid = 0;
					var inMap = 0;
					// Temp removal for testing
					if (party.size() < minPlayers || party.size() > maxPlayers)
						next = false;
					else {
						for (var i = 0; i < party.size() && next; i++) {
							if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
								levelValid += 1;
							if (party.get(i).getMapid() == mapId)
								inMap += 1;
						}
						if (levelValid < party.size() || inMap < party.size())
							next = false;
					}
					if (next) {
						// Kick it into action.  Slate says nothing here, just warps you in.
						var em = cm.getEventManager("HontalePQ");
						if (em == null) {
							cm.sendSimple("當前事件任務不可使用.");
						}
						else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							}else{
								cm.sendSimple("已經有人在挑戰任務");
							}
						}
						cm.dispose();
					}
					else {
						cm.sendOk("Your party is not a party of six.  Make sure all your members are present and qualified to participate in this quest.  I see #b" + levelValid.toString() + " #kmembers are in the right level range, and #b" + inMap.toString() + "#k are in my map. If this seems wrong, #blog out and log back in,#k or reform the party.");
						cm.dispose();
					}
				}
			}else if(cm.getMapId() ==240050100) {
				var eim = cm.getPlayer().getEventInstance();
				var party = eim.getPlayers();
				if (eim.getProperty("theLvl") == null) {
					eim.setProperty("theLvl", "0");
				}
				curStage = parseInt(eim.getProperty("theLvl"));
				if(curStage != 4){
					cm.sendOk("請先解決迷宮室的難題...");
					cm.dispose();
				}else{
					if(cm.haveItem(4001092, 1) && cm.isLeader()){
						var party = cm.getChar().getEventInstance().getPlayers();
						for (var outt = 0; outt<party.size(); outt++)
                        {
                            var exitMapz = eim.getMapInstance(240050200);
                            party.get(outt).changeMap(exitMapz, exitMapz.getPortal(0)); 
                        }
						cm.gainItem(4001092, -1);
					}else{
						cm.sendOk("請隊長帶著鑰匙過來");
					}
					cm.dispose();
				}
			}else if(cm.getMapId() ==240050300 || cm.getMapId() ==240050310){
				var eim = cm.getPlayer().getEventInstance();
				var party = eim.getPlayers();
				if(cm.haveItem(4001093, 6) && cm.isLeader()){
						var party = cm.getChar().getEventInstance().getPlayers();
						for (var outt = 0; outt<party.size(); outt++)
                        {
                            var exitMapz = eim.getMapInstance(240050600);
                            party.get(outt).changeMap(exitMapz, exitMapz.getPortal(0)); 
                        }
						cm.gainItem(4001093, -6);
				}else{
					cm.sendOk("請隊長帶著六把藍色鑰匙過來");
				}
				cm.dispose();
			}
		}
	}
}
					
					
