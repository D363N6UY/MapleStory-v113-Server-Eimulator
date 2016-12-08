var sw;

function start() {
	status = -1;
	sw = cm.getEventManager("Subway");
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
	if (mode == 0) {
		cm.sendNext("可能錢不夠....");
		cm.dispose();
		return;
	}
	if (status == 0) {
		if (sw == null) {
			cm.sendNext("發生錯誤請回報GM");
			cm.dispose();
		} else if (sw.getProperty("entry").equals("true")) {
			cm.sendYesNo("請問你是否要搭乘本班地鐵呢??");
		} else if (sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
			cm.sendNext("很抱歉本班地鐵正準備出發,時間表可以去售票台看.");
			cm.dispose();
		} else {
			cm.sendNext("請耐心等待幾分鐘，正在整理地鐵中！");
			cm.dispose();
		}
	} else if (status == 1) {
		if (cm.getMapId() == 103000100) {
			if (!cm.haveItem(4031711)) {
				cm.sendNext("搭乘地鐵需要#b#t4031711##k 喔!");
			} else {
				cm.gainItem(4031711, -1);
				cm.warp(600010004);
			}
			cm.dispose();
		} else if (cm.getMapId() == 600010001) {
			if (!cm.haveItem(4031713)) {
				cm.sendNext("搭乘地鐵需要#b#t4031713##k 喔!");
			} else {
				cm.gainItem(4031713, -1);
				cm.warp(600010002);
			}
			cm.dispose();
		}
	}
}
