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
	    cm.sendYesNo("您身上有#b#t5220000##i5220000##k可以進行轉蛋。\r\n你確定要使用 #b潮流轉蛋機#k 進行轉蛋嗎?");
	} else {
	    cm.sendOk("不好意思!您沒有#b#t5220000##i5220000##k。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
        if (Math.floor(Math.random() * 800) == 0) {
            item = cm.gainGachaponItem(1102042, 1); //紫披
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082145, 1); //黃手
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082146, 1); //紅手
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082147, 1); //藍手
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082148, 1); //紫手
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082150, 1); //灰手
	}
        else if (Math.floor(Math.random() * 900) == 0) {
	    item = cm.gainGachaponItem(1082149, 1); //褐手
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022047, 1); //貓頭
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022058, 1); //狸貓
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022060, 1); //狐猴
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1022067, 1); //黑狐猴
	}
        else if (Math.floor(Math.random() * 300) == 0) {
	    item = cm.gainGachaponItem(1012056, 1); //狗鼻
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1382037, 1); //偃月之杖
	}
        else if (Math.floor(Math.random() * 400) == 0) {
	    item = cm.gainGachaponItem(1372032, 1); //聖龍短杖
	}
        else if (Math.floor(Math.random() * 550) == 0) {
	    item = cm.gainGachaponItem(1382036, 1); //龍骨長杖
	}
        else if (Math.floor(Math.random() * 400) == 0) {
	    item = cm.gainGachaponItem(1302026, 1); //黑色雨傘
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372035, 1); //旋火短杖 70火
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372036, 1); //五毒短杖 70毒
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372037, 1); //極凍短杖 70冰
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372038, 1); //雷鳴短杖 70雷
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372039, 1); //炎燄短杖 130火
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372040, 1); //劇毒短杖 130毒
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372041, 1); //極冰短杖 130冰
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372042, 1); //強雷短杖 130雷
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382045, 1); //火雲長杖 103火
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382046, 1); //毒龍長杖 103毒
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382047, 1); //冰魄長杖 103冰
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382048, 1); //狂雷長杖 103雷
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382049, 1); //朱雀之杖 163火
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382050, 1); //玄武之杖 163毒
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382051, 1); //青龍之杖 163冰
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382052, 1); //白虎之杖 163雷
	}
	    else if (Math.floor(Math.random() * 500) == 0) {
            item = cm.gainGachaponItem(1102041, 1); //粉披
	}
		else if (Math.floor(Math.random() * 250) == 0) {
	    item = cm.gainGachaponItem(2022179, 1); //紫色蘋果
		}
		else if (Math.floor(Math.random() * 300) == 0) {
	    item = cm.gainGachaponItem(1012070, 1); //草莓冰棒
	} else {
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