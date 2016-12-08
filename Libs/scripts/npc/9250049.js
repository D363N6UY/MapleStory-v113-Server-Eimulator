/* Author: aaroncsn (MapleSea Like)(INcomplete- HairStyle)
	NPC Name: 		Wi
	Map(s): 		Thailand:Floating Market(500000000)
	Description: 		Thailand Hair Salon
*/

var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160);
var fhair = Array(31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010);
var hairnew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("Welcome to the Floating market hair shop. If you have #bFloating Market Hairstyle Coupon (VIP)#k, allow me to take care of your hairdo. \r\n#L0##bHaircut(VIP coupon)#k#l \r\n#L1##bDye your hair(VIP coupon)#k#l");
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendStyle("I can totally change up your hairstyle and make it look so good. Choose the one to your liking with #bFloating Market Hairstyle Coupon (VIP).#k Why don't you change it up a bit? I'll change it for you. Take your time~", hairnew);
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #bFloating Market Hair Color Coupon (VIP)#k I'll change it for you. Choose the one to your liking.", haircolor);
			}
		}
		else if (status == 2){
			if (beauty == 1){
				if (cm.haveItem(5150037) == true){
					cm.gainItem(5150037, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("Enjoy your new and improved hairstyle!");
				} else {
					cm.sendNext("Hmmm...it looks like you don't have our designated coupon. I'm afraid I can't give you a haircut without it. I'm sorry.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151031) == true){
					cm.gainItem(5151031, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("Enjoy your new and improved haircolor!");
				} else {
					cm.sendNext("Hmmm...it looks like you don't have our designated coupon. I'm afraid I can't dye your hair without it. I'm sorry.");
				}
			}
		}
	}
}