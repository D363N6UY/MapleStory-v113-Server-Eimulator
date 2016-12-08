/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Perion (102000000)
	Description: 		Perion Cab
*/

var status = 0;
var maps = Array(100000000, 101000000, 103000000, 120000000, 102000000);
var rCost = Array(1200, 1000, 1000, 800, 1000);
var costBeginner = Array(120, 100, 100, 80, 100);
var cost = new Array("1,200", "1,000", "1,000", "800", "1,000");
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("等你改變了心意在來找我");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("哈囉,我可以帶你去你想去的地方");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    var selStr = "我們有對新手 90% 優惠 請問你想去哪邊?#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 楓幣)#l";
	    }
	} else {
	    var selStr = "請問你想去哪邊#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 楓幣)#l";
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    sCost = costBeginner[selection];
	    show = costBeginner[selection];
	} else {
	    sCost = rCost[selection];
	    show = cost[selection];
	}
	cm.sendYesNo("你確定要前往 #b#m" + maps[selection] + "##k? 將會需要 #b" + show + " 楓幣#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("抱歉你的楓幣不足,所以無法前往");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}