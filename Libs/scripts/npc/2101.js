/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("Haven't you finish the training program yet? If you want to leave this place, please do not hesitate to tell me.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("Are you done with your training? If you wish, I will send you out from this training camp.");
    } else if (status == 1) {
	cm.sendNext("Then, I will send you out from here. Good job.");
    } else if (status == 2) {
	cm.warp(3, 0);
	cm.dispose();
    }
}