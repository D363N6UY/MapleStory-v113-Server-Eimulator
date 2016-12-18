/*
	NPC Name: 		Athena Pierce
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
	cm.sendNext("如果你想體驗弓箭手的感覺，再來跟我對話。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("弓箭手有靈敏與力量的支援，主要負責長途攻擊，為前線的戰鬥者提供支援。非常擅長使用弓，作為攻擊的一部分。");
    } else if (status == 1) {
	cm.sendYesNo("你想體驗一下弓箭手的感覺嗎？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
	cm.dispose();
    }
}