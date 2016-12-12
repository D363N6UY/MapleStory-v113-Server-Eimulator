var status = -1;
var GachItem = new Array(
				[4030000,100,true],
				[4030001,100,false]
				);
				//物品ID,機率,是否上廣
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
		return ;
    }
    if (status == 0) {
	if (cm.haveItem(5220000, 1)) {
	    cm.sendYesNo("您身上有#b#t5220000##i5220000##k可以進行轉蛋。\r\n你確定要使用 #b潮流轉蛋機#k 進行轉蛋嗎?");
	} else {
	    cm.sendOk("不好意思!您沒有#b#t5220000##i5220000##k。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
		var item;
		var gain = false;
		for(var i = 0 ; i < GachItem.length ; i++){
			var GItem = GachItem[i];
			if (Math.floor(Math.random() * GItem[1]) == 0) {
				item = cm.gainGachaponItem(GItem[0], 1 , GItem[2]);
				gain = true;
				break;
			}
		}
		if(!gain){
			var itemList = new Array(2022176, 2022113, 2043202, 2043201, 2044102, 2044101, 2040602, 2040601, 2043302, 2043301, 2040002, 2040001, 2044402, 2002017, 1402010, 1312014, 1442017, 1002063, 1060062, 1050018, 1002392, 1040037, 1002160, 1060005, 1332009, 1332008, 1442009, 1302004, 1312006, 1002154, 1002175, 1060064, 1061088, 1402012, 1002024, 1312005, 1432002, 1302050, 1002048, 1040061, 1041067, 1002131, 1072263, 1332001, 1312027, 1322015, 1432006, 1041088, 1061087, 1402013, 1302051, 1002023, 1402006, 1322000, 1372002, 1442001, 1422004, 1432003, 1040088, 1002100, 1041004, 1061047, 1322022, 1040021, 1061091, 1102012, 1050006, 1060018, 1041044, 1041024, 1041087, 1082146, 1332043, 1062001, 1051014, 1402030, 1432004, 1060060, 1432018, 1002096, 1442010, 1422003, 1472014, 1002021, 1060060, 1442031, 1402000, 1040089, 1432005);
			item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
		}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已獲得 #b#t" + item + "##i" + item + "##k");
	} else {
	    cm.sendOk("檢查一下背包是否已滿。");
	}
	cm.safeDispose();
    }
}