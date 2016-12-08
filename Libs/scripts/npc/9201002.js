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
    if (cm.getMapId() != 680000210) {
	cm.sendOk("如果你想要結婚，請找我的幫手修女.");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("你準備好要走上婚姻這條路了?");
    } else if (status == 1) {

	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
			marr.setCustomData("0");
	        data = "0";
	    }
	    if (data.equals("1")) {
			if (cm.getPlayer().getMarriageId() <= 0) {
				cm.sendOk("你沒有結婚.");
				cm.dispose();
				return;
			}
	    	var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	    	if (chr == null) {
				cm.sendOk("確定你的伴侶在這張地圖內.");
				cm.dispose();
				return;
	    	}
			marr.setCustomData("2_");
			cm.setQuestRecord(chr, 160001, "2_");
			cm.worldMessage(5, "<頻道 " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + " 跟 " + chr.getName() + " 的婚禮開始舉行！");
			cm.doWeddingEffect(chr);
	    } else if (data.equals("2_") || data.equals("2")) {
			if (cm.getPlayer().getMarriageId() <= 0) {
				cm.sendOk("你沒有和任何人結婚.");
				cm.dispose();
				return;
			}
			var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
			if (chr == null) {
				cm.sendOk("確定你的伴侶在這張地圖內.");
				cm.dispose();
				return;
			}
			cm.setQuestRecord(cm.getPlayer(),160001,"3");
			cm.setQuestRecord(chr,160001,"3");
			var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
			if (dat > 10) {
				cm.warpMap(680000300, 0);
			} else {
				cm.setQuestRecord(chr,160002,"0");
				cm.setQuestRecord(cm.getPlayer(),160002,"0");
				cm.warpMap(680000500, 0);
			}
		} else {
			cm.sendOk("你不能結婚!");
	    }
	cm.dispose();
    }
}