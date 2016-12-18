/*
	NPC Name: 		Dances with Balrog
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
	    cm.sendNext("如果你想體驗劍士的感覺，再來跟我對話。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("劍士擁有一個強大的力量與血量，他們享受最光明正大的戰鬥。而且，並配備了複雜的技能，這個職業擁有強大的攻擊力。");
    } else if (status == 1) {
	cm.sendYesNo("你想體驗一下劍士看看嗎？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
	cm.dispose();
    }
}