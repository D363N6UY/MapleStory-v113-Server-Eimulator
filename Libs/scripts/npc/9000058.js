/* Joyce
	Event NPC
*/

var status = -1;
var itemListRed = Array(2000005, 2000004, 1302021, 4031629, 2040900, 2040029, 2040017, 2040025, 2040317, 2022179, 2022459, 2022460, 2022461, 2022462, 2022463, 1442047, 1442048, 1442049, 1442050);
var itemListBlue = Array(2000005, 1302080, 3010046, 3010049, 3010051, 3010052, 3010053, 3010057, 3010058, 3010055, 3010047, 3010043, 3010044, 2040919, 2040914, 2022179, 4020009, 3010041, 2049100, 1102041, 1372035, 1372036, 1372037, 1372038, 1372039, 1372040, 1372041, 1372042, 1382037, 1942003, 1952003, 1962003, 1972003);
var maps = Array(680000000, 230000000, 260000000, 101000000, 211000000, 110000000, 130000200, 100000000, 103000000, 222000000, 240000000, 104000000, 220000000, 800000000, 802000101, 120000000, 600000000, 221000000, 200000000, 102000000, 300000000, 801000000, 540000000, 541000000, 105040300, 250000000, 251000000
    , 551000000, 550000000, 800040000, 261000000, 541020000, 270000000, 229000000, 682000000, 701000000, 500000000, 950100000, 610010000, 140000000, 970010000, 103000310, 555000000); 
var pqMaps = Array(682010200, 541000300, 220050300, 105040306, 229000020, 230040200, 541010010, 551030100, 240040500, 800020110, 801040004, 105090900, 610020004, 101030104, 240080000, 105100100, 211041100, 921120000, 610030010, 670010000, 300030100, 251010404, 261000011,261000021, 200080101, 221024500, 674030100);
var selectedMap = -1;
var isRedeemingPresents = false;
var selectedArea = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        cm.sendSimple("安安 \r\n#b#L0#我要領取寵物#l\r\n#b#L1#我要領取精靈商人#l\r\n#b#L2#我要領取神奇剪刀#l#k");
    } else if (status == 1) {
        if (selection == 0) {
            	if (!cm.haveItem(5000041, 1, true, true) && cm.canHold(5000041,1)) {
                    cm.gainPet(5000041, "雪寶", 1, 0, 100, 0);
            	} else {
		    cm.sendOk("你已經有了");
		}
            cm.dispose();
        } else if (selection == 1) {
            	if (!cm.haveItem(5030000, 1, true, true) && cm.canHold(5030000,1)) {
                    cm.gainItem(5030000, 1);
                }
            	if (!cm.haveItem(5071000, 1, true, true) && cm.canHold(5071000,1)) {
                    cm.gainItem(5071000, 1);
            	} else {
		    cm.sendOk("你已經有了");
		}
            cm.dispose();
        } else if (selection == 2) {
            	if (!cm.haveItem(5520000, 1, true, true) && cm.canHold(5520000,1)) {
                    cm.gainItem(5520000, 1);
                }
            	if (!cm.haveItem(5180000, 1, true, true) && cm.canHold(5180000,1)) {
                    cm.gainItem(5180000, 1);
            	} else {
		    cm.sendOk("你已經有了");
		}
            cm.dispose();
        } else if (selection == 3) {
            cm.sendSimple("#b#L0#Town maps#l\r\n#L1#Monster maps and PQ Maps(Meant for level 50+) #l#k");
        } else if (selection == 4 || isRedeemingPresents) {
                if (!cm.haveItem(4031306) && !cm.haveItem(4031307)) {
                        cm.sendOk("You don't have any presents! I need #r#t4031306##v4031306##k OR #b#t4031307##v4031307##k.");
			cm.dispose();
                } else if (cm.haveItem(4031306)) {
                        var item = cm.gainGachaponItem(itemListRed[Math.floor(Math.random() * itemListRed.length)], 1, "Red Packet");
                        if (item != -1) {
                                cm.gainItem(4031306, -1);
                                cm.sendOk("I have redeemed your #rRed#k Present. You have obtained #r#t" + item + "##k.");
                        } else {
                                cm.sendOk("Please make room for the item I will redeem.");
				cm.dispose();
                        }
                } else if (cm.haveItem(4031307)) {
                        var item = cm.gainGachaponItem(itemListBlue[Math.floor(Math.random() * itemListBlue.length)], 1, "Blue Packet");
                        if (item != -1) {
                                cm.gainItem(4031307, -1);
                                cm.sendOk("I have redeemed your #bBlue#k Present. You have obtained #b#t" + item + "##k.");
                        } else {
                                cm.sendOk("Please make room for the item I will redeem.");
				cm.dispose();
                        }
                }
		isRedeemingPresents = true;
                status--; //turns status into 0, so mode = 1 will mean status = 1 again, mode = 0 = dispose
        } else if (selection == 5) {
                if (cm.getMeso() >= 1147483647) {
                        cm.sendOk("You must have room for mesos before doing the trade.");
                } else if (!cm.haveItem(4001168, 1)){
                        cm.sendOk("You do not have a Golden Maple Leaf.");
                } else {
                        cm.gainItem(4001168, -1);
                        cm.gainMeso(1000000000);
                        cm.sendOk("Thank you for the trade, I have given you 1 billion for the Maple Leaf.");
                }
                cm.dispose();
        } else if (selection == 6) {
                if (cm.getMeso() < 1000000000) {
                        cm.sendOk("You must have 1,000,000,000 mesos before doing the trade.");
                } else if (!cm.canHold(4001168,1)) {
                        cm.sendOk("Please make room.");
                } else {
                        cm.gainItem(4001168, 1);
                        cm.gainMeso(-1000000000);
                        cm.sendOk("Thank you for the trade, I have given you Golden Maple Leaf for max meso.");
                }
                cm.dispose();
        } else if (selection == 8) {
                cm.warp(741010200, 0);
                cm.dispose();
        } else if (selection == 9) {
                cm.sendYesNo("You will need #r100,000#k A-Cash to enter this map, for 30 minutes. You will be able to make mesos at an astounding rate. Would you like to go in?");
                status = 4;
        } else if (selection == 10) {
                cm.dispose();
                cm.openNpc(9010022);
        }
    } else if (status == 2) {
            var selStr = "Select your destination.#b";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
        } else {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        }
        selectedArea = selection;

            cm.sendSimple(selStr);
    } else if (status == 3) {
        cm.sendYesNo("So you have nothing left to do here? Do you want to go to #m" + (selectedArea == 0 ? maps[selection] : pqMaps[selection]) + "#?");
        selectedMap = selection;

    } else if (status == 4) {
	if (selectedMap >= 0) {
        	cm.warp(selectedArea == 0 ? maps[selectedMap] : pqMaps[selectedMap], 0);
	}
        cm.dispose();
        } else if (status == 5) {
                var em = cm.getEventManager("MesoMap");
                if (em == null) {
                        cm.sendOk("The Meso Map is currently not available.");
                } else if (cm.getPlayer().getCSPoints(1) < 100000) {
                        cm.sendOk("You need 100,000 A-Cash.");
                } else {
                        cm.getPlayer().modifyCSPoints(1, -100000, false);
                        em.startInstance_CharID(cm.getPlayer());
                }
                cm.dispose();
        } else if (status == 6) {
        if (selection == 0) {
            if (cm.getPlayerStat("LVL") < 45) {
                cm.sendOk("Please be at least level 45 and find me again to acquire the skill.");
                cm.dispose();
                return;
            } else if (cm.getJob() >= 3000) {
                cm.teachSkill(30001007, 3, 0);
            } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                cm.teachSkill(20011007, 3, 0); // Maker
            } else if (cm.getJob() >= 2000) {
                cm.teachSkill(20001007, 3, 0); // Maker
            } else if (cm.getJob() >= 1000) {
                cm.teachSkill(10001007, 3, 0); // Maker
            } else {
                cm.teachSkill(1007, 3, 0); // Maker
            }
            cm.sendOk("I've taught you Maker skill, please make good use of it.");
            cm.dispose();
        } else if (selection == 1) {
                if (cm.getMeso() < 5000000) {
                        cm.sendOk("You must have 5,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20010024) > 0 || cm.getPlayer().getSkillLevel(30000024) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        if (cm.getJob() >= 3000) {
                                cm.teachSkill(30001024, 1, 0); // Maker
                        } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                                cm.teachSkill(20011024, 1, 0); // Maker
                        } else if (cm.getJob() >= 2000) {
                                cm.teachSkill(20000024, 1, 0); // Maker
                        } else if (cm.getJob() >= 1000) {
                                cm.teachSkill(10000018, 1, 0); // Maker
                        } else {
                                cm.teachSkill(8, 1, 0); // Maker
                        }
                        cm.gainMeso(-5000000);
                        cm.sendOk("I have taught you Follow the Lead skill.");
                }
                cm.dispose();
        } else if (selection == 2) {
                if (cm.getMeso() < 10000000 || cm.getPlayer().getJob() != 232) {
                        cm.sendOk("You must be a bishop and have 10,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getMasterLevel(2321008) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        cm.teachSkill(2321008, 0, 10);
                        cm.gainMeso(-10000000);
                        cm.sendOk("I have taught you Genesis skill.");
                }
                cm.dispose();
        } else if (selection == 3) {
                if (cm.getMeso() < 10000000 || cm.getPlayer().getJob() != 522) {
                        cm.sendOk("You must be a captain and have 10,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getMasterLevel(5221003) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        cm.teachSkill(5221003, 0, 10);
                        cm.gainMeso(-10000000);
                        cm.sendOk("I have taught you Aerial Strike skill.");
                }
                cm.dispose();
        } else if (selection == 6) {
                if (cm.getMeso() < 10000000 || cm.getPlayer().getJob() != 122) {
                        cm.sendOk("You must be a Paladin and have 10,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getMasterLevel(1221003) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        cm.teachSkill(1221003, 0, 10);
                        cm.teachSkill(1221004, 0, 10);
                        cm.gainMeso(-10000000);
                        cm.sendOk("I have taught you Holy Charge skill.");
                }
                cm.dispose();
        } else if (selection == 4) {
                if (cm.getMeso() < 5000000) {
                        cm.sendOk("You must have 5,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getSkillLevel(1004) > 0 || cm.getPlayer().getSkillLevel(10001004) > 0 || cm.getPlayer().getSkillLevel(20001004) > 0 || cm.getPlayer().getSkillLevel(20011004) > 0 || cm.getPlayer().getSkillLevel(30001004) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        if (cm.getJob() >= 3000) {
                                cm.teachSkill(30001004, 1, 0); // Maker
                        } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                                cm.teachSkill(20011004, 1, 0); // Maker
                        } else if (cm.getJob() >= 2000) {
                                cm.teachSkill(20001004, 1, 0); // Maker
                        } else if (cm.getJob() >= 1000) {
                                cm.teachSkill(10001004, 1, 0); // Maker
                        } else {
                                cm.teachSkill(1004, 1, 0); // Maker
                        }
                        cm.gainMeso(-5000000);
                        cm.sendOk("I have taught you Monster Rider skill.");
                }
                cm.dispose();
        } else if (selection == 7) {
                if (cm.getMeso() < 500000000) {
                        cm.sendOk("You must have 500,000,000 mesos before acquiring the skill.");
                } else if (cm.getPlayer().getSkillLevel(1026) > 0 || cm.getPlayer().getSkillLevel(10001026) > 0 || cm.getPlayer().getSkillLevel(20001026) > 0 || cm.getPlayer().getSkillLevel(20011026) > 0 || cm.getPlayer().getSkillLevel(30001026) > 0) {
                        cm.sendOk("You already have this skill.");
                } else {
                        if (cm.getJob() >= 3000) {
                                cm.teachSkill(30001026, 1, 0); // Maker
                        } else if (cm.getJob() == 2001 || cm.getJob() >= 2200) {
                                cm.teachSkill(20011026, 1, 0); // Maker
                        } else if (cm.getJob() >= 2000) {
                                cm.teachSkill(20001026, 1, 0); // Maker
                        } else if (cm.getJob() >= 1000) {
                                cm.teachSkill(10001026, 1, 0); // Maker
                        } else {
                                cm.teachSkill(1026, 1, 0); // Maker
                        }
                        cm.gainMeso(-500000000);
                        cm.sendOk("I have taught you Soaring skill.");
                }
                cm.dispose();
        } else if (selection == 5) {
                cm.openShop(40);
                cm.dispose();
        }
    }
}