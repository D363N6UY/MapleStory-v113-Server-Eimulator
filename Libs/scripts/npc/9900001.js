/** Author: nejevoli
	NPC Name: 		NimaKin
	Map(s): 		Victoria Road : Ellinia (180000000)
	Description: 		Maxes out your stats and able to modify your equipment stats
*/
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("Strength", "Dexterity", "Intellect", "Luck", "HP", "MP", "Weapon Attack", "Magic Attack", "Weapon Defense", "Magic Defense", "Accuracy", "Avoidability", "Hands", "Speed", "Jump", "Slots", "Vicious Hammer", "Used slot", "Enhancements", "Potential stat 1", "Potential stat 2", "Potential stat 3", "Owner");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (cm.getPlayerStat("ADMIN") == 1) {
		cm.sendSimple("What do you want from me?#b\r\n#L0#Max my stats!#l\r\n#L1#Max my skills!#l\r\n#L2#Modify my equip's stats!#l\r\n#L3#Look at potential values#l\r\n#L4#Set AP/SP to 0#l#k");
	} else if (cm.getPlayerStat("GM") == 1) {
		cm.sendSimple("What do you want from me?#b\r\n#L0#Max my stats!#l\r\n#L1#Max my skills!#l\r\n#L4#Set AP/SP to 0#l#k");
	} else {
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxStats();
		cm.sendOk("I have maxed your stats. Happy Mapling!");
	    }
	    cm.dispose();
	} else if (selection == 1) {
	    //Beginner
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxAllSkills();
	    }
	    cm.dispose();
	} else if (selection == 2 && cm.getPlayerStat("ADMIN") == 1) {
	    var avail = "";
	    for (var i = -1; i > -199; i--) {
		if (cm.getInventory(-1).getItem(i) != null) {
		    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory(-1).getItem(i).getItemId() + "##l\r\n";
		}
		slot.push(i);
	    }
	    cm.sendSimple("Which one of your equips would you like to modify?\r\n#b" + avail);
	} else if (selection == 3 && cm.getPlayerStat("ADMIN") == 1) {
		var eek = cm.getAllPotentialInfo();
		var avail = "";
		for (var ii = 0; ii < eek.size(); ii++) {
			avail += "#L" + eek.get(ii) + "#Potential ID " + eek.get(ii) + "#l\r\n";
		}
		cm.sendSimple("What would you like to learn about?\r\n#b"+ avail);
		status = 9;
	} else if (selection == 4) {
		cm.getPlayer().resetAPSP();
		cm.sendNext("Done.");
		cm.dispose();
	} else {
		cm.dispose();
	}
    } else if (status == 2 && cm.getPlayerStat("ADMIN") == 1) {
	selected = selection - 1;
	var text = "";
	for (var i = 0; i < stats.length; i++) {
	    text += "#L" + i + "#" + stats[i] + "#l\r\n";
	}
	cm.sendSimple("You have decided to modify your #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k.\r\nWhich stat would you like to modify?\r\n#b" + text);
	} else if (status == 3 && cm.getPlayerStat("ADMIN") == 1) {
	statsSel = selection;
	if (selection == 22) {
		cm.sendGetText("What would you like to set your #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?");
	} else {
		cm.sendGetNumber("What would you like to set your #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?", 0, 0, 32767);
	}
    } else if (status == 4 && cm.getPlayerStat("ADMIN") == 1) {
	cm.changeStat(slot[selected], statsSel, selection);
	cm.sendOk("Your #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " has been set to " + selection + ".");
	cm.dispose();
	} else if (status == 10 && cm.getPlayerStat("ADMIN") == 1) {
		cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
		status = 0;
	} else {
		cm.dispose();
    }
}