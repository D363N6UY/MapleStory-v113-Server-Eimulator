/*
	Slyn - Before Takeoff To Orbis(260000110)
*/

var gm;

function start() {
    status = -1;
    gm = cm.getEventManager("Geenie");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("You'll get to your destination in moment. Go ahead and talk to other people, and before you know it, you'll be there already.");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("Do you want to leave the waiting room? You can, but the ticket is NOT refundable. Are you sure you still want to leave this room?");
    } else if(status == 1) {
	cm.warp(260000100);
	cm.dispose();
    }
}
