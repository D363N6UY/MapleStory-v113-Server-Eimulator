function action(mode, type, selection) {
	if (cm.getNpc() >= 9901000) {
		cm.sendNext("Hello #h0#, I am in the Hall of Fame for reaching LEVEL 200.");
	} else {
		cm.sendNext("我目前沒有功能，可以回報給管理人員，\r\n代號為#r"+ cm.getNpc() + "#k");
	}
	cm.safeDispose();
}