var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		cm.dispose();
		return ;
    }
    if (status == 0) {
	if (cm.haveItem(5220000, 1)) {
	    cm.sendYesNo("您身上有#b#t5220000##i5220000##k可以進行轉蛋。\r\n你確定要使用 #b經驗轉蛋機#k 進行轉蛋嗎?");
	} else {
	    cm.sendOk("不好意思!您沒有#b#t5220000##i5220000##k。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
		if (cm.haveItem(5220000, 1)) {
			var item;
			if (Math.floor(Math.random() * 100) == 0) {
				item = cm.gainGachaponItem(2370000, 1);
			}else if (Math.floor(Math.random() * 90) == 0) {
				item = cm.gainGachaponItem(2370001, 1);
			}else if (Math.floor(Math.random() * 80) == 0) {
				item = cm.gainGachaponItem(2370002, 1); 
			}else if (Math.floor(Math.random() * 70) == 0) {
				item = cm.gainGachaponItem(2370003, 1); 
			}else if (Math.floor(Math.random() * 50) == 0) {
				item = cm.gainGachaponItem(2370004, 1); 
			} else {
				var itemList = new Array(2370006,2370007,2370008,2370009,2370010,2370011,2370012);
				item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
			}
			if (item != -1) {
				cm.gainItem(5220000, -1);
				cm.sendOk("您已獲得 #b#t" + item + "##i" + item + "##k");
			} else {
				cm.sendOk("檢查一下背包是否已滿。");
			}
			cm.dispose();
		}
	}
}