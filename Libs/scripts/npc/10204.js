/*
	NPC Name: 		Kyrin
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("如果你想體驗海盜的感覺，再來跟我對話。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("海盜擁有傑出的靈巧和力量，利用他們的槍在遠距離攻擊，同時在近戰戰鬥情況下使用他們的力量。");
    } else if (status == 1) {
	cm.sendYesNo("你想體驗一下海盜的感覺嗎？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
	cm.dispose();
    }
}