/* guild creation npc */
var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("你想做甚麼?\r\n#b#L0#創建公會#l\r\n#L1#解散公會#l\r\n#L2#使用楓幣擴充公會人數(限制100)#l\r\n#L3#使用GP擴充公會人數(限制200)#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GID") > 0) {
		cm.sendOk("你已經有工會了.");
		cm.dispose();
	    } else
		cm.sendYesNo("建立公會將花費你#b500,000 楓幣#k, 確定嗎?");
	} else if (selection == 1) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有會長可以解散公會.");
		cm.dispose();
	    } else
		cm.sendYesNo("你確定要解散公會嗎?");
	} else if (selection == 2) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有公會長可以擴充人數");
		cm.dispose();
	    } else
		cm.sendYesNo("擴充 #b5#k 個公會欄位，花費 #b500,000 楓幣#k, 確定嗎?");
	} else if (selection == 3) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有公會長可以擴充人數");
		cm.dispose();
	    } else
		cm.sendYesNo("擴充 #b5#k 個公會欄位，花費 #b2500 GP#k, 確定嗎?");
	}
    } else if (status == 2) {
	if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
	    cm.genericGuildMessage(1);
	    cm.dispose();
	} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.disbandGuild();
	    cm.dispose();
	} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(false);
	    cm.dispose();
	} else if (sel == 3 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(true);
	    cm.dispose();
	}
    }
}