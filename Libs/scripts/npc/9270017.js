// Xinga - Pilot
function start() {
    if (cm.getMapId() == 540010101) {
	cm.dispose();
    } else {
	cm.sendYesNo("The plane will be taking off soon, Will you leave now? You will have buy the plane ticket again to come in here.");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(103000000, 0);
    }
    cm.dispose();
}