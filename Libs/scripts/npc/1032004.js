
/* Shane
	who is not the shane who is not the house
	not that this shane is a house
	1032004
*/

var status = 0;
var zones = 0;
var selectedMap = -1;

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
	cm.sendYesNo("Would you like to return to Ellinia?");
    } else if (status == 1) {
	cm.warp(101000000,0);
	cm.dispose();
    }
}	