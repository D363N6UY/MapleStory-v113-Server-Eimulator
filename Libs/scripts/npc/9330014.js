var status = 0;
function start() {
	cm.sendYesNo("您想要前往墮落城市嗎?只需要5000楓幣");
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 1) {
		if (cm.getMeso() < 5000) {
			cm.sendNext("您沒有5000元楓幣!");
		} else {
			cm.gainMeso(-5000);
			cm.warp(103000100);
		}
		cm.dispose();
	}
}
