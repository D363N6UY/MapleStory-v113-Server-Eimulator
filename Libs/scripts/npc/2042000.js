var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "請選擇一種擂台賽場地!\r\n#L100#楓葉黃金標誌兌換#l";
	var found = false;
        for (var i = 0; i < 6; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("你尚未組隊。\r\n#L100#楓葉黃金標誌兌換#l");
        } else {
            if (cm.isLeader()) {
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("目前沒有擂台場地。\r\n#L100#楓葉黃金標誌兌換#l");
		}
            } else {
                cm.sendSimple("請叫你的隊長來找我!\r\n#L100#楓葉黃金標誌兌換#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("請選擇你要兌換的物品:\r\n#b#L0#50個楓葉黃金標誌 = 休菲凱曼的項鍊#l\r\n#L1#30個楓葉黃金標誌 = 休菲凱曼的珠子#l\r\n#L2#50個閃亮的楓葉黃金標誌 = 休菲凱曼的混亂項鍊#l#k");
	} else if (selection >= 0 && selection < 6) {
	    var mapid = 980000000+((selection+1)*100);
            if (cm.getEventManager("cpq").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(30, 50) == 1) {
                        cm.sendOk("請確認你隊伍內玩家的等級!");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 50) == 2) {
                        cm.sendOk("請確認你隊伍內的玩家都在這裡嗎?");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("Your party is not the appropriate size.");
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(30, 200) == 1) {
                    cm.sendOk("請確認你隊伍內玩家的等級!");
                    cm.dispose();
                } else if (checkLevelsAndMap(30, 200) == 2) {
                    cm.sendOk("請確認你隊伍內的玩家都在這裡嗎?");
                    cm.dispose();
                } else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042001);
                    //}
                    cm.sendOk("您的挑戰已發送。");
                    cm.dispose();
                }
            } else {
                cm.sendOk("The two parties participating in Monster Carnival must have an equal number of party member");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("你沒有楓葉黃金標誌。");
		} else if (!cm.canHold(1122007,1)) {
		    cm.sendOk("Please make room");
		} else {
		    cm.gainItem(1122007,1,true);
		    cm.gainItem(4001129,-50);
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("你沒有楓葉黃金標誌。");
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("Please make room");
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
		}
		cm.dispose();
	    } else if (selection == 2) {
		if (!cm.haveItem(4001254,50)) {
		    cm.sendOk("你沒有楓葉黃金標誌。");
		} else if (!cm.canHold(1122058,1)) {
		    cm.sendOk("Please make room");
		} else {
		    cm.gainItem(1122058,1,true);
		    cm.gainItem(4001254,-50);
		}
		cm.dispose();
	    }
        }
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980000000+(fieldnumber*100)));
        if (event == null && fieldnumber != 5 && fieldnumber != 6 && fieldnumber != 9) {
            status = "擂台賽場地 "+fieldnumber+"(2v2)";
        } else if (event == null) {
            status = "擂台賽場地 "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"users/平均等級 "+averagelevel;
        }
    }
    return status;
}
