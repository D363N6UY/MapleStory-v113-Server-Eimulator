var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("享受在天空飛翔是一件很爽快的事!對吧？\r\n憑著我的專業能力，在天空飛翔安全無虞的!\r\n你想到#r上海灘#k嗎？");
    } else if (status == 1) {
		cm.warp(701000100);
		cm.dispose();
    }
}