/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("你想換髮型的話要有#b#t5150029##k 或者  #b#t5151024##k 的話就可以囉\r\n#L0#剪髮: #i5150029##t5150029##l\r\n#L1#染髮: #i5151024##t5151024##l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [33430, 33400, 33250, 33120, 33090, 33340, 33160, 32640, 30920, 30820, 33100, 33000, 39110];
	    } else {
		hair_Colo_new = [34450, 34160, 34090, 31990, 37000, 38110, 37800, 35300, 31830, 38580, 34890, 34240, 39100];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("想換成哪種很棒的髮型呢 只要有 #b#t5150029##k 我就可以幫你換一個很棒的髮型喔", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;


	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("你想染成什麼顏色?", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(5150029, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved hairstyle!");
	    } else {
		cm.sendOk("看來我沒辦法幫你剪頭髮喔");
	    }
	} else {
	    if (cm.setAvatar(5151024, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved haircolor!");
	    } else {
		cm.sendOk("看來我沒辦法幫你染頭髮喔");
	    }
	}
	cm.dispose();
    }
}