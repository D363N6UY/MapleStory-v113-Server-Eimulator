/*
	NPC Name: 		Grendel the Really Old
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
	    cm.sendNext("如果你想體驗法師的感覺，再來跟我對話。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("法師有華麗的屬性為基本的法術和輔助魔法，能幫助整個團隊。第二次轉職後，屬性的魔法將提供大量的相克的屬性敵人造成傷害。");
    } else if (status == 1) {
	cm.sendYesNo("你想體驗一下法師的感覺嗎？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
	cm.dispose();
    }
}