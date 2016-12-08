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
			var em = cm.getEventManager("ChineseBoss");
			if(em == null){
				cm.sendOk("任務不可用");
				cm.dispose();
			}else if (em.getProperty("state").equals("0")) {
				em.startInstance(cm.getPlayer());
				cm.dispose();
			}else{
				cm.sendOk("已經有人在挑戰蜈蚣王了，請等一下");
				cm.dispose();
			}
			
    } else if (status == 1) {
			cm.warp(701010323);
			cm.dispose();
    }
}

