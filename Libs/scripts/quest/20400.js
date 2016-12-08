var status = -1;

function start(mode, type, selection) {
	qm.sendNext("Please go find Jane in El Nath for more information.");
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}