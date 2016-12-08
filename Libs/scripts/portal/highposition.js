function enter(pi) {
    if (pi.getPlayer().getLevel() < 15 || pi.isQuestFinished(29004)) {
	return false;
    }
    if (!pi.isQuestActive(29004)) {
	pi.forceStartQuest(29004);
	pi.updateInfoQuest(27017, "enter=00000");
	pi.forceStartQuest(27018, "0");
    }
    //nautilus, kerning, ellinia, perion, orbis in that order
    var quest = pi.getInfoQuest(27017);
    var number = parseInt(pi.getQuestRecord(27018).getCustomData());
    var new_quest = "enter=";
    var maps = Array(120000000, 103000000, 101010103, 102000000, 200080100);
    var changedd = false;
    for (var i = 0; i < maps.length; i++) {
	var changed = false;
	if (pi.getPlayer().getMapId() == maps[i]) {
	    if (quest.substring(i+6, i+7).equals("0")) { //+6 for "enter="
		new_quest += "1";
		changed = true;
		changedd = true;
	    }
	}
	if (!changed) {
	    new_quest += quest.substring(i+6, i+7);
	}
    }
    if (changedd) {
	pi.updateInfoQuest(27017, new_quest);
	pi.forceStartQuest(27018, number+1, true);
	pi.getPlayer().dropMessage(-1, (number+1) +"/5 completed");
	pi.getPlayer().dropMessage(-1, "稱號成就 - 登峰者");
	pi.showQuestMsg("當前稱號 - 登峰者 " + (number+1) + "/5 完成");
    }
}