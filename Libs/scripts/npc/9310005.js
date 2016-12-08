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
			if(cm.haveItem(4000194,50)){
				cm.sendYesNo("你已經收集了#b#v4000194##t4000194#50個#k嗎？準備前往下一張地圖了嗎？");
			}else{
				cm.sendOk("請收集#b#v4000194##t4000194#50個#k才能入內！");
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
		if(cm.haveItem(4000194,50)){
			cm.gainItem(4000194,-50);
			cm.warp(701010322);
			cm.dispose();
		}else{
			cm.sendOk("出錯！");
			cm.dispose();
		}
    }
}

