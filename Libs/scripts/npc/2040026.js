/*
Third Eos Rock - Ludibrium : Eos Tower 41st Floor (221021700)
*/

var status = 0;
var map;
var portal;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4001020)) {
	    cm.sendSimple("You can use #bEos Rock Scroll#k to activate #bThird Eos Rock#k. Which of these rocks would you like to teleport to?#b\r\n#L0#Second Eos Rock (71st Floor)#l\r\n#L1#Fourth Eos Rock (1st Floor)#l");
	} else {
	    cm.sendOk("There's a rock that will enable you to teleport to #bSecond Eos Rock or Fourth Eos Rock#k, but it cannot be activated without the scroll.");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("You can use #bEos Rock Scroll#k to activate #bThird Eos Rock#k. Will you teleport to #bSecond Eos Rock#k at the 71st Floor?");
	    map = 221022900;
	    portal = 3;
	} else {
	    cm.sendYesNo("You can use #bEos Rock Scroll#k to activate #bThird Eos Rock#k. Will you teleport to #bFourth Eos Rock#k at the 1st Floor?");
	    map = 221020000;
	    portal = 4;
	}
    } else if (status == 2) {
	cm.gainItem(4001020, -1);
	cm.warp(map, portal);
	cm.dispose();
    }
}