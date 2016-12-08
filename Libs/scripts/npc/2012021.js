/* 
	NPC Name: 		Ramini
	Map(s): 		Orbis: Cabin<To Leafre> (200000131)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你必須有一些事情來照顧她，對吧？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(flight == null) {
	    cm.sendNext("事件錯誤，請重新啟動服務器以獲取解決方案");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
	    cm.sendYesNo("船到了，請問你是否要上船?");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("飛行準備起飛。 對不起，你必須下一輪。 乘車時間表可通過在售票亭的開門。");
	    cm.dispose();
	} else {
	    cm.sendNext("我們將在開船前1分鐘開始上船。 請耐心等待幾分鐘。由於飛船不等人，所以請準時到");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031331)) {
	    cm.sendNext("哦不!你缺少了通往神木村的船票了，你可以回到售票處去購買後，再來找我");
	} else {
	    cm.gainItem(4031331, -1);
	    cm.warp(200000132, 0);
	}
	cm.dispose();
    }
}