/*
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide
*/

var status = -1;
var cost, sel;
var togo1, togo2, togo3;
var map;
var back = true;

function start() {
    switch (cm.getMapId()) {
	case 800000000:
	case 500000000:
	case 701000000:
	case 740000000:
	    map = cm.getSavedLocation("WORLDTOUR");
	    cm.sendSimple("在這裡玩的如何呢?想去別的地方繼續旅遊還是回到原來的地方呢? \n\r #b#L0#我還可以去哪邊?#l \n\r #L1#我旅行完了,我要回去#m"+map+"##l");
	    break;
	default:
	    back = false;
	    if (cm.getJob() == 0) {
		cm.sendNext("HI 我是旅遊小幫手，可以帶妳去各地遊玩\n\r 咦!原來你是初心者呀 這樣的話我也不收你太多\r\n#b300楓幣就好了");
		cost = 300;
	    } else {
		cm.sendNext("HI 我是旅遊小幫手，可以帶妳去各地遊玩，收你3000楓幣就好了");
		cost = 3000;
	    }
	    break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
	cm.dispose();
    } else {
	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
	    cm.dispose();
	    return;
	}
	if (mode == 1)
	    status++;
	else
	    status--;

	if (!back) {
	    if (status == 0) {
		cm.sendSimple("我們目前只有提供到日本旅遊\r\n#L0##b#m800000000");
	    } else if (status == 1) {
		cm.sendYesNo("日本古代神社充滿者有趣的氣息，請問你是否要前往?");
	    /*} else if (status == 2) {
		cm.sendNext("Check out the female shaman serving the Mushroom God, and I strongly recommend trying Takoyaki, Yakisoba, and other delicious food sold in the streets of Japan. Now, let's head over to #bMushroom Shrine#k, a mythical place if there ever was one.");*/
	    } else if (status == 2) {
		if (cm.getMeso() < cost) {
		    cm.sendPrev("不好意思你的金錢不夠喔");
		} else {
		    cm.gainMeso(-cost);
		    cm.saveLocation("WORLDTOUR");
		    cm.warp(800000000, 0);
		    cm.dispose();
		}
	    }
	} else {	    
	    if (status == 0) {
		if (selection == 0) {
		    switch (cm.getMapId()) {
			case 740000000:
			    togo1 = 800000000;
			    togo2 = 701000000;
			    togo3 = 500000000;
			case 500000000:
			    togo1 = 800000000;
			    togo2 = 701000000;
			    togo3 = 740000000;
			    break;
			case 800000000:
			    togo1 = 701000000;
			    togo2 = 500000000;
			    togo3 = 740000000;
			    break;
			case 701000000:
			    togo1 = 500000000;
			    togo2 = 800000000;
			    togo3 = 740000000;
			    break;
		    }
		    cm.sendSimple("想去哪裡呢? \n\r #b#L0##m"+togo1+"# (3,000 楓幣)#l \n\r #L1##m"+togo2+"# (3,000 楓幣)#l \n\r #L2##m"+togo3+"# (3,000 楓幣)#l");

		} else if (selection == 1) {
		    cm.warp(map == -1 ? 100000000 : map);
		    cm.clearSavedLocation("WORLDTOUR");
		    cm.dispose();
		}
	    } else if (status == 1) {
		sel = selection;
		if (sel == 0) {
		    cm.sendNext("你確定要前往 #b#m"+togo1+"##k?  到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
		} else if (sel == 1) {
		    cm.sendNext("你確定要前往  #b#m"+togo2+"##k? 到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
		} else if (sel == 2) {
		    cm.sendNext("你確定要前往  #b#m"+togo3+"##k? 到那邊需要 #b3,000 楓幣#k. 確定現在要去嗎?");
		}
	    } else if (status == 2) {
		if (sel == 0) {
		    cm.warp(togo1);
		} else if (sel == 1) {
		    cm.warp(togo2);
		} else if (sel == 2) {
		    cm.warp(togo3);
		}
		cm.dispose();
	    }
	}
    }
}