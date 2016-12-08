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
		if(cm.isQuestActive(8512)){
			if(cm.haveItem(4031289)){
				cm.sendYesNo("裡面非常危險，請不要繼續前進!...\r\n這是局長的#b#v4031289##t4031289##k嗎？那好吧，我可以送你到裡面\r\n但是裡面非常危險，準備好了嗎？");
			}else{
				cm.sendOk("要有局長的#b#v4031289##t4031289##k才能入內！");
				cm.dispose();
			}
		}else if(cm.isQuestFinished(8512)){
				cm.sendOk("謝謝你幫忙清除了蜈蚣王！");
				cm.dispose();
		}else{
			cm.sendOk("裡面非常危險，請不要繼續前進！");
			cm.dispose();
		}
    } else if (status == 1) {
		cm.warp(701010321);
		cm.dispose();
    }
}