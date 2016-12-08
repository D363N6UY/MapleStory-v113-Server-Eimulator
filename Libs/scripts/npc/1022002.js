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
    if (cm.getPlayer().getLevel() < 50) {
	cm.sendOk("Leave now.. before you get hurt.");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("You appear strong. Would you like to head to the Balrog Temple?");
    } else if (status == 1) {
	cm.warp(105100100);
	cm.dispose();
    }
}