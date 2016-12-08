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
			if(cm.getPlayer().getMapId() != 701010323){
				cm.sendYesNo("想放棄了嗎？");
			}else{
				cm.sendYesNo("想出去嗎？");
			}
			
    } else if (status == 1) {
			cm.removeAll(4031289);
			cm.warp(701010320);
			cm.dispose();
    }
}

