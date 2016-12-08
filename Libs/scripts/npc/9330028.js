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
	if(cm.getMapId() != 741020100){
		cm.warp(741020100);
		cm.dispose();
	}
    if (status == 0) {
		if(cm.isQuestActive(8626) && cm.haveItem(4031356) ){
			if(cm.haveItem(4000259,50)){
				cm.sendYesNo("你已經收集了#b#v4000259##t4000259#50個#k嗎？準備前往下一張地圖了嗎？");
			}else{
				cm.sendOk("這不是委託函嗎!但是前面非常危險，有#b黑輪大王#k在裡面，若真的要前進的話，請收集#b#v4000259##t4000259#50個#k才能入內！");
				cm.dispose();
			}
		}else if(cm.isQuestFinished(8626)){
				cm.warp(741020102);
				cm.dispose();
		}else{
			cm.sendOk("裡面非常危險，請不要繼續前進！");
			cm.dispose();
		}
    } else if (status == 1) {
		if(cm.haveItem(4000259,50) && cm.getPlayerCount(741020101) == 0){
			cm.resetMap(741020101);
			cm.gainItem(4000259,-50);
			cm.warp(741020101);
			cm.dispose();
		}else{
			cm.sendOk("裡面有人在打黑輪大王了！");
			cm.dispose();
		}
    }
}

