var status = 0;

function start() {
	cm.sendYesNo("請問是否想去西門町??");
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 1) {
		if (cm.getMeso() < 2000) {
			cm.sendNext("需要2000元唷!");
		} else {
			cm.gainMeso(-2000);
			cm.warp(740000100);
		}
		cm.dispose();
	}
}
