/* Author: Xterminator
	NPC Name: 		Phil
	Map(s): 		Victoria Road : Lith Harbour (104000000)
	Description: 		Explains Victoria Island Towns and can take you to them
*/

var status = 0;
var maps = Array(102000000, 101000000, 100000000, 103000000, 120000000);
var cost = Array(1200, 1200, 800, 1000, 1000);
var costBeginner = Array(120, 120, 80, 100, 100);
var selectedMap = -1;
var sCost;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 27 && mode == 0) {
	cm.sendNext("難道你對這個美麗的島嶼還存有興趣嗎？既然這樣的話我也不方便阻止你了，我們下次見。");
	cm.dispose();
	return;
    } else if (((status == 1 || status == 2 || status == 26) && mode == 0) || ((status == 6 || status == 9 || status == 12 || status == 15 || status == 18 || status == 21) && mode == 1)) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你想去其他城鎮嗎？ 只需要一點點錢。#r初心者擁有90%的折扣喔!!");
    } else if (status == 1) {
	cm.sendSimple("沒關係，我知道你是第一次來維多利亞港，不用太緊張\r\n#L1#觀看有哪些地方可以去#k#l");
    } else if (status == 2) {
	if (selection == 0) {
	    cm.sendSimple("There are 7 big towns here in Victoria Island. Which of those do you want to know more of?\r\n#b#L0##m104000000##l\r\n#L1##m102000000##l\r\n#L2##m101000000##l\r\n#L3##m100000000##l\r\n#L4##m103000000##l\r\n#L5##m120000000##l\r\n#L6##m105040300##l");
	} else if (selection == 1) {
	    status = 26;
	    if (cm.getJob() == 0) {
		var selStr = "初心者擁有90%的折扣!!說說看你想去哪裡吧#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 楓幣)#l";
		}
	    } else {
		var selStr = "哦!不你並不是初心者，我只能算你全票的車錢了，想去哪裡呢?#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 楓幣)#l";
		}
	    }
	    cm.sendSimple(selStr);
	}
    } else if (status == 3) {
	if (selection == 0) {
	    status = 4;
	    cm.sendNext("The town you are at is Lith Harbor! Alright I'll explain to you more about #bLith Harbor#k. It's the place you landed on Victoria Island by riding The Victoria. That's Lith Harbor. A lot of beginners who just got here from Maple Island start their journey here.");
	} else if (selection == 1) {
	    status = 7;
	    cm.sendNext("Alright I'll explain to you more about #bPerion#k. It's a warrior-town located at the northern-most part of Victoria Island, surrounded by rocky mountains. With an unfriendly atmosphere, only the strong survives there.");
	} else if (selection == 2) {
	    status = 10;
	    cm.sendNext("Alright I'll explain to you more about #bEllinia#k. It's a magician-town located at the far east of Victoria Island, and covered in tall, mystic trees. You'll find some fairies there, too. They don't like humans in general so it'll be best for you to be on their good side and stay quiet.");
	} else if (selection == 3) {
	    status = 13;
	    cm.sendNext("Alright I'll explain to you more about #bHenesys#k. It's a bowman-town located at the southernmost part of the island, made on a flatland in the midst of a deep forest and prairies. The weather's just right, and everything is plentiful around that town, perfect for living. Go check it out.");
	} else if (selection == 4) {
	    status = 16;
	    cm.sendNext("Alright I'll explain to you more about #bKerning City#k. It's a thief-town located at the northwest part of Victoria Island, and there are buildings up there that have just this strange feeling around them. It's mostly covered in black clouds, but if you can go up to a really high place, you'll be able to see a very beautiful sunset there.");
	} else if (selection == 5) {
	    status = 19;
	    cm.sendNext("Here's a little information on #b#m120000000##k. It's a submarine that's currently parked in between Ellinia and Henesys in Victoria Island. That submarine serves as home to numerous pirates. You can have just as beautiful a view of the ocean there as you do here in Lith Harbor.");
	} else if (selection == 6) {
	    status = 22;
	    cm.sendNext("Alright I'll explain to you more about #bSleepywood#k. It's a forest town located at the southeast side of Victoria Island. It's pretty much in between Henesys and the ant-tunnel dungeon. There's a hotel there, so you can rest up after a long day at the dungeon ... it's a quiet town in general.");
	}
    } else if (status == 4) {
	cm.sendNext("The town you are at is Lith Harbor! Alright I'll explain to you more about #bLith Harbor#k. It's the place you landed on Victoria Island by riding The Victoria. That's Lith Harbor. A lot of beginners who just got here from Maple Island start their journey here.");
    } else if (status == 5) {
	cm.sendNextPrev("It's a quiet town with the wide body of water on the back of it, thanks to the fact that the harbot is located at the west end of the island. Most of the people here are, or used to be fisherman, so they may look intimidating, but if you strike up a conversation with them, they'll be friendly to you.");
    } else if (status == 6) {
	cm.sendNextPrev("Around town lies a beautiful prairie. Most of the monsters there are small and gentle, perfect for beginners. If you haven't chosen your job yet, this is a good place to boost up your level.");
    } else if (status == 7) {
	cm.sendNext("Alright I'll explain to you more about #bPerion#k. It's a warrior-town located at the northern-most part of Victoria Island, surrounded by rocky mountains. With an unfriendly atmosphere, only the strong survives there.");
    } else if (status == 8) {
	cm.sendNextPrev("Around the highland you'll find a really skinny tree, a wild hog running around the place, and monkeys that live all over the island. There's also a deep valley, and when you go deep into it, you'll find a humongous dragon with the power to match his size. Better go in there very carefully, or don't go at all.");
    } else if (status == 9) {
	cm.sendNextPrev("If you want to be a #bWarrior#k then find #rDances with Balrog#k, the chief of Perion. If you're level 10 or higher, along with a good STR level, he may make you a warrior after all. If not, better keep training yourself until you reach that level.");
    } else if (status == 10) {
	cm.sendNext("Alright I'll explain to you more about #bEllinia#k. It's a magician-town located at the far east of Victoria Island, and covered in tall, mystic trees. You'll find some fairies there, too. They don't like humans in general so it'll be best for you to be on their good side and stay quiet.");
    } else if (status == 11) {
	cm.sendNextPrev("Near the forest you'll find green slimes, walking mushrooms, monkeys and zombie monkeys all residing there. Walk deeper into the forest and you'll find witches with the flying broomstick navigating the skies. A word of warning: Unless you are really strong, I recommend you don't go near them.");
    } else if (status == 12) {
	cm.sendNextPrev("If you want to be a #bMagician#k, search for #rGrendel the Really Old#k, the head wizard of Ellinia. He may make you a wizard if you're at or above level 8 with a decent amount of INT. If that's not the case, you may have to hunt more and train yourself to get there.");
    } else if (status == 13) {
	cm.sendNext("Alright I'll explain to you more about #bHenesys#k. It's a bowman-town located at the southernmost part of the island, made on a flatland in the midst of a deep forest and prairies. The weather's just right, and everything is plentiful around that town, perfect for living. Go check it out.");
    } else if (status == 14) {
	cm.sendNextPrev("Around the prairie you'll find weak monsters such as snails, mushrooms, and pigs. According to what I hear, though, in the deepest part of the Pig Park, which is connected to the town somewhere, you'll find a humongous, powerful mushroom called Mushmom every now and then.");
    } else if (status == 15) {
	cm.sendNextPrev("If you want to be a #bBowman#k, you need to go see #rAthena Pierce#k at Henesys. With a level at or above 10 and a decent amount of DEX, she may make you be one afterall. If not, go train yourself, make yourself stronger, then try again.");
    } else if (status == 16) {
	cm.sendNext("Alright I'll explain to you more about #bKerning City#k. It's a thief-town located at the northwest part of Victoria Island, and there are buildings up there that have just this strange feeling around them. It's mostly covered in black clouds, but if you can go up to a really high place, you'll be able to see a very beautiful sunset there.");
    } else if (status == 17) {
	cm.sendNextPrev("From Kerning City, you can go into several dungeons. You can go to a swamp where alligators and snakes are abound, or hit the subway full of ghosts and bats. At the deepest part of the underground, you'll find Lace, who is just as big and dangerous as a dragon.");
    } else if (status == 18) {
	cm.sendNextPrev("If you want to be a #bThief#k, seek #rDark Lord#k, the heart of darkness of Kerning City. He may well make you a thief if you're at or above level 10 with a good amount of DEX. If not, go hunt and train yourself to reach there.");
    } else if (status == 19) {
	cm.sendNext("Here's a little information on #b#m120000000##k. It's a submarine that's currently parked in between Ellinia and Henesys in Victoria Island. That submarine serves as home to numerous pirates. You can have just as beautiful a view of the ocean there as you do here in Lith Harbor.");
    } else if (status == 20) {
	cm.sendNextPrev("#m120000000# is parked in between Henesys and Ellinia, so if you step out just a bit, you'll be able to enjoy the view of both towns. All the pirates you'll meet in town are very gregarious and friendly as well.");
    } else if (status == 21) {
	cm.sendNextPrev("If you are serious about becoming a #bPirate#k, then you better meet the captain of #m120000000#, #r#p1090000##k. If you are over Level 10 with 20 DEX, then she may let you become one. If you aren't up to that level, then you'll need to train harder to get there!");
    } else if (status == 22) {
	cm.sendNext("Alright I'll explain to you more about #bSleepywood#k. It's a forest town located at the southeast side of Victoria Island. It's pretty much in between Henesys and the ant-tunnel dungeon. There's a hotel there, so you can rest up after a long day at the dungeon ... it's a quiet town in general.");
    } else if (status == 23) {
	cm.sendNextPrev("In front of the hotel there's an old buddhist monk by the name of #rChrishrama#k. Nobody knows a thing about that monk. Apparently he collects materials from the travelers and create something, but I am not too sure about the details. If you have any business going around that area, please check that out for me.");
    } else if (status == 24) {
	cm.sendNextPrev("From Sleepywood, head east and you'll find the ant tunnel connected to the deepest part of the Victoria Island. Lots of nasty, powerful monsters abound so if you walk in thinking it's a walk in the park, you'll be coming out as a corpse. You need to fully prepare yourself for a rough ride before going in.");
    } else if (status == 25) {
	cm.sendNextPrev("And this is what I hear ... apparently, at Sleepywood there's a secret entrance leading you to an unknown place. Apparently, once you move in deep, you'll find a stack of black rocks that actually move around. I want to see that for myself in the near future ...");
    } else if (status == 26) {
	cm.dispose();
    } else if (status == 27) {
	if (cm.getJob() == 0) {
	    sCost = costBeginner[selection];
	} else {
	    sCost = cost[selection];
	}
	cm.sendYesNo("你確定要前往 #b#m" + maps[selection] + "##k?此趟費用一共是 #b" + sCost + " 楓幣#k");
	selectedMap = selection;
    } else if (status == 28) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("不好意思，我發現到你的楓幣並不夠付車票錢喔");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap], 0);
	}
	cm.dispose();
    }
}