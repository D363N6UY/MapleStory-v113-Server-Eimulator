/*
	Purin - Before Takeoff To Orbis(101000301)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("船很快就會抵達天空之城了。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("你想離開嗎？，但票不會退還。 這樣您還確定要離開這個房間嗎？");
    } else if(status == 1) {
	cm.warp(101000300, 0);
	cm.dispose();
    }
}
