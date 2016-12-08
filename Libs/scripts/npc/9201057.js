/*
Bell - KC/NLC Subway Station(103000100/600010001), Waiting Room(600010002/600010004)
 */

var section;
var msg = new Array("新葉城", "墮落城市", "墮落城市地鐵站", "新葉城");
var ticket = new Array(4031711, 4031713);
var cost = 5000;
var returnMap = new Array(103000100, 600010001);

function start() {
	status = -1;
	sw = cm.getEventManager("Subway");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
	} else {
		status++;
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (status == 0) {
			switch (cm.getMapId()) {
			case 103000100:
				section = 0;
				break;
			case 600010001:
				section = 1;
				break;
			case 600010004:
				section = 2;
				break;
			case 600010002:
				section = 3;
				break;
			default:
				cm.sendNext("錯誤~");
				cm.dispose();
				break;
			}
			if (section < 2) {
				cm.sendSimple("嗨 你要買票搭地鐵嗎?\r\n#L0##b" + msg[section] + "#l");
			} else {
				cm.sendYesNo("你是否要回去 " + msg[section] + " ?");
			}
		} else if (status == 1) {
			if (section < 2) {
				cm.sendYesNo("前往 " + msg[section] + " 的地鐵每10分鐘一班, 需要花費 #b" + cost + " 元#k. 請問是否要購買 #b#t" + ticket[section] + "##k?");
			} else {
				section -= 2;
				cm.warp(returnMap[section]);
				cm.dispose();
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost || !cm.canHold(ticket[section])) {
				cm.sendNext("身上至少需要 #b" + cost + " 楓幣#k, 或是身上檢查背包空位是否足夠.");
			} else {
				cm.gainItem(ticket[section], 1);
				cm.gainMeso(-cost);
			}
			cm.dispose();
		}
	}
}
