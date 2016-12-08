/*
	Dolphin - Pier on the Beach(251000100)
*/

var status = -1;
var menu;
var cost = 10000;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("Hmmm ... too busy to do it right now? If you feel like doing it, though, come back and find me.");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("Will you move to #b#m230000000##k now? The price is #b"+cost+" mesos#k.");
    } else if (status == 1) {
	if (cm.getMeso() < cost) {
	    cm.sendOk("I don't think you have enough money...");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(230000000);
	    cm.dispose();
	}
    }
}