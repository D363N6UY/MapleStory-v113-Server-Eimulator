/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Agatha - Orbis Ticketing Booth(200000100)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.2 - Price as GMS [sadiq]
	1.1 - Text fix [Information]
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var ticket = new Array(4031047, 4031074, 4031331, 4031576);
var cost = new Array(5000, 6000, 30000, 6000);
var tmsg = new Array(15, 10, 10, 10);
var mapNames = new Array("魔法森林(往維多利亞島)", "玩具城", "神木村", "納希沙漠");
var mapName2 = new Array("魔法森林(往維多利亞島)", "玩具城", "神木村", "納希沙漠");
var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if(mode == 0) {
	cm.sendNext("你必須有一些事情來照顧她，對吧？");
	cm.dispose();
	return;
    }
    if(mode == 1) {
	status++;
    }
    if(status == 0) {
	var where = "Hi你好，我負責為每個目的地出售船票。 您想購買通往哪裡的票呢？";
	for (var i = 0; i < ticket.length; i++) {
	    where += "\r\n#L" + i + "##b" + mapNames[i] + "#k#l";
	}
	cm.sendSimple(where);
    } else if(status == 1) {
	select = selection;
	cm.sendYesNo("通往 #b"+mapName2[select]+"每班船約"+tmsg[select]+" 分鐘 每張票價為"+cost[select]+" 楓幣#k.你確定要購買#b#t"+ticket[select]+"##k?");
    } else if(status == 2) {
	if(cm.getMeso() < cost[select] || !cm.canHold(ticket[select])) {
	    cm.sendOk("請確認你的金錢有 #b"+cost[select]+" 楓幣#k? ");
	    cm.dispose();
	} else {
	    cm.gainMeso(-cost[select]);
	    cm.gainItem(ticket[select],1);
	    cm.dispose();
	}
    }
}