var normal = Array(2022216,2022222,2022223);
var common = Array(2022221,2022220,2022218);
var rare = Array(2022217,2022219);

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}
	if (min == max) {
		return(min);
	}
	return(min + parseInt(Math.random() * (max - min + 1)));
}

var icommon = common[getRandom(0, common.length - 1)];
var inormal = normal[getRandom(0, normal.length - 1)];
var irare = rare[getRandom(0, rare.length - 1)];
var chance = getRandom(0, 20);
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(cm.haveItem(5310000)){
				cm.sendYesNo("我是微微安，你相信命運星座嗎？\r\n一個人的命運或許是注定好的\r\n只要你有#k#v"+ 5310000 +"##l，我可以幫你占卜今日的運氣，想試試看?");
			}else{
				cm.sendOk("我是微微安，你相信命運星座嗎?只要你有\r\n#k#v"+ 5310000 +"##l\r\n就可以占卜一次~");
				cm.dispose();
			}
		} else if (status == 1) {
			if(cm.haveItem(5310000) && cm.canHold(2000000) ){
				if (chance > 0 && chance <= 8) {
					cm.sendOk("你今天的幸運星座是#k#v"+icommon+"##b#t"+icommon+"##k#l!看來你今天運氣普普");
					cm.gainItem(icommon, 1);
				} else if (chance >= 9 && chance <= 16) {
					cm.sendOk("你今天的幸運星座是#k#v"+inormal+"##b#t"+inormal+"##k#l!你今天的運氣還不錯");
					cm.gainItem(inormal, 1);
				} else {
					cm.sendOk("你今天的幸運星座是#k#v"+irare+"##b#t"+irare+"##k#l!哇!你的運氣好極了");
					cm.gainItem(irare, 1);
				}
				cm.gainItem(5310000,-1);
			}else{
				cm.sendOk("請確定你身上有空間");
			}
			cm.dispose();
		}
	}
}