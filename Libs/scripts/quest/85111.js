var status = -1;

function start(mode, type, selection) {
	qm.sendAcceptDecline("嗯...高敬先生所推薦來的嗎？果然是...但我還不能百分之百相信你。我還沒看過你的能力，怎麼能只聽別人說就相信你呢？如果你能幫助我，我也會相信你，可以拜託更重要的事情吧。怎麼樣？你會幫我嗎？);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest(8512);
	qm.dispose();
}