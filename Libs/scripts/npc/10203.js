/*
	NPC Name: 		Dark Lord
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
	    cm.sendNext("如果你想體驗盜賊的感覺，再來跟我對話。");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("盜賊是運氣和靈敏和力量的完美結合，它們善於對無奈的敵人進行突襲。極高的迴避率和速度允許盜賊用各種角度攻擊敵人。");
    } else if (status == 1) {
	cm.sendYesNo("你想體驗一下盜賊看看嗎？");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
	cm.dispose();
    }
}