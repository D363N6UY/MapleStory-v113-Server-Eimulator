/* 
	NPC Name: 		Cherry
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
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
	if(boat == null) {
	    cm.sendNext("事件錯誤，請重新啟動服務器以獲取解決方案");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("它看起來有很多的空間，準備上船。 請將你的票準備好，你想乘坐這艘船嗎？");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("船準備起飛。 對不起，但你必須下一輪。 乘船時間表可通過在售票亭的開門。");
	    cm.dispose();
	} else {
	    cm.sendNext("我們將在起飛前1分鐘開始登機，請耐心等待幾分鐘。請注意，飛船將準時起飛，我們將在1分鐘前停止接收車票，因此請務必在此處 時間。");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031045)) {
	    cm.sendNext("哦不，你身上並沒有通往天空之城的船票。 我不能讓你偷渡進去。 請到前面找售票員買票。");
	} else {
	    cm.gainItem(4031045, -1);
	    cm.warp(101000301, 0);
	}
	cm.dispose();
    }
}