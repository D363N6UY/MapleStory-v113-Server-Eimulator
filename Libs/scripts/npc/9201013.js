var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
	var marr = cm.getQuestRecord(160001);
	var data = marr.getCustomData();
	if (data == null) {
		marr.setCustomData("0");
	    data = "0";
	}
    if (status == 0) {
		if (data.equals("0")) {
			cm.sendYesNo("你想要預約婚禮嗎?");
		}else if(data.equals("1")){
			cm.sendOk("你已經預約了");
			cm.dispose();
		}else{
			cm.sendOk("你已經結婚了");
			cm.dispose();
		}
    } else if (status == 1) {
		if (cm.getPlayer().getMarriageId() <= 0) {
			cm.sendOk("你還沒有訂婚.");
		} else if (!cm.canHold(4150000,60)) {
			cm.sendOk("其他欄位已滿");
		} else if (!cm.haveItem(5251004,1) && !cm.haveItem(5251005,1) && !cm.haveItem(5251006,1)) {
			cm.sendOk("請帶著結婚卷才能預約婚禮喔.");
		} else {
			var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
			if (chr == null) {
				cm.sendOk("請確認你的伴侶在這張地圖內.");
				cm.dispose();
				return;
			}

			if (data.equals("0")) {
			marr.setCustomData("1");
			cm.setQuestRecord(chr, 160001, "1");
			var num = 0;
			if (cm.haveItem(5251006,1)) {
				cm.gainItem(5251006,-1);
				num = 60;
			} else if (cm.haveItem(5251005,1)) {
				cm.gainItem(5251005,-1);
				num = 30;
			} else if (cm.haveItem(5251004,1)) {
				cm.gainItem(5251004,-1);
				num = 10;
			}
			cm.setQuestRecord(cm.getPlayer(), 160002, num + "");
			cm.setQuestRecord(chr, 160002, num + "");
			cm.sendNext("你已經預約婚禮了，可以發送這些喜帖給你的親朋好友喔!");
			cm.gainItemPeriod(4150000,num,1);
			} else if(data.equals("1")){
				cm.sendOk("你已經預約了");
			}else{
				cm.sendOk("你已經結婚了");
			}
		}
		cm.dispose();
    }
}