/* 
	NPC Name: 		Shanks
	Map(s): 		Maple Road : Southperry (60000)
	Description: 		Brings you to Victoria Island
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("嗯...你在這裡還有事要做嗎？");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	cm.sendYesNo("坐這艘船，你會去一個更大的島嶼。只要 #e150楓幣#n ，我會帶你到#b維多利亞港#k。但是，一旦你離開這個地方，你就不能回來了。你有什麼想法？你想去維多利亞港嗎？");
    } else if (status == 1) {
	if (cm.haveItem(4031801)) {
	    cm.sendNext("好吧，現在給我150個楓幣...咦，那是什麼？那是#b路卡斯的推薦信#k嗎？嘿，你應該跟我說你有這個。我，桑克斯，當我看到你，感覺到偉大，因為你是路卡斯推薦來的，我看到你作為一個冒險家強大的潛力。我沒有辦法收你這次旅行費用！");
	} else {
	    cm.sendNext("在這個地方很無聊嗎？來這裡...先給我#e150 楓幣#n...");
	}
    } else if (status == 2) {
	if (cm.haveItem(4031801)) {
	    cm.sendNextPrev("既然你有推薦信，我就不收你的錢了。好吧，坐穩了，因為我們現在要去維多利亞港，它可能會有點搖晃！！");
	} else {
	    if (cm.getPlayerStat("LVL") >= 7) {
		if (cm.getMeso() < 150) {
		    cm.sendOk("什麼？你想告訴我你想去卻沒有錢嗎？你真是一個怪人...");
		    cm.dispose();
		} else {
		    cm.sendNext("好！#e150 楓幣#n我已經收到了！出發，去維多利亞港！");
		}
	    } else {
		cm.sendOk("讓我看看...我不認為你夠強。你必須至少7等去維多利亞港。");
		cm.dispose();
	    }
	}
    } else if (status == 3) {
	if (cm.haveItem(4031801)) {
	    cm.gainItem(4031801, -1);
	    cm.warp(2010000,0);
	    cm.dispose();
	} else {
	    cm.gainMeso(-150);
	    cm.warp(2010000,0);
	    cm.dispose();
	}
    }
}