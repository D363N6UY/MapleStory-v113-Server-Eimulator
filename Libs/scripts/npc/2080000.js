/* Mos
	Leafre : Leafre (240000000)
	
	Refining NPC: 
	* Level 110 weapons - Stimulator allowed
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var stimulator = false;
var bustedDagger = false;
var item;
var mats;
var matQty;
var cost;
var stimID;

function start() {
    status = -2;
    action(1, 0, 0);
}

function action(mode, type, selection) {		
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
	if (status == -1) {
		cm.sendSimple("Hello there~ If you are interested in upgrading or repairing your weapon, you have definitely come to the right place! I'm the best weapon maker in this great town of Leafre. Okay, what do you think about a weapon that is laden with the incredible power of the dragon? Are you interested?\r\n#L0# Create a Dragon weapon#l\r\n#L100# Repair Equipment#l");
    } else if (status == 0) {
	if (selection == 0) {
		if (cm.haveItem(4001079)) {
		    bustedDagger = true;
		    cm.sendNext("What is it? The busted dagger you have seems old, I'll need #i"+4011001+"# and #i"+4011002+"#.");
		} else {
		    var selStr = "A dragon's power is not to be underestimated. If you like, I can add its power to one of your weapons. However, the weapon must be powerful enough to hold its potential...#b";
		    var options = new Array("What's a stimulator?","Create a Warrior weapon","Create a Bowman weapon","Create a Magician weapon","Create a Thief weapon","Create a Pirate Weapon",
			"Create a Warrior weapon with a Stimulator","Create a Bowman weapon with a Stimulator","Create a Magician weapon with a Stimulator","Create a Thief weapon with a Stimulator","Create a Pirate Weapon with a Stimulator");
		    for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		    }
		    cm.sendSimple(selStr);
		}
	} else {
		cm.sendYesNo("Great! I'll show you what I'm capable of. You are aware that the service fee varies depending on the item's level and amount of Durability the item's lost, aren't you? Would you like to repair your equipment item now?");
		status = 99;
	}

    } else if (status == 1) {
	if (bustedDagger) {
	    if (cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4001079)) {
		cm.gainItem(4011001, -1);
		cm.gainItem(4011002, -1);
		cm.gainItem(4001079, -1);
		cm.gainItem(4001078, 1);
	    } else {
		cm.sendOk("You do not have the required items.");
	    }
	    cm.dispose();
	} else {
	    selectedType = selection;
	    if (selectedType > 5) {
		stimulator = true;
		selectedType -= 5;
	    }
	    else
		stimulator = false;
	    if (selectedType == 0) { //What's a stim?
		cm.sendNext("A stimulator is a special potion that I can add into the process of creating certain items. It gives it stats as though it had dropped from a monster. However, it is possible to have no change, and it is also possible for the item to be below average. There's also a 10% chance of not getting any item when using a stimulator, so please choose wisely.")
		cm.dispose();
	    }
	    else if (selectedType == 1){ //warrior weapon
		var selStr = "Very well, then which Warrior weapon shall recieve a dragon's power?#b";
		var weapon = new Array ("Dragon Carbella#k - Lv. 110 One-Handed Sword#b","Dragon Axe#k - Lv. 110 One-Handed Axe#b","Dragon Mace#k - Lv. 110 One-Handed BW#b","Dragon Claymore#k - Lv. 110 Two-Handed Sword#b","Dragon Battle Axe#k - Lv. 110 Two-Handed Axe#b","Dragon Flame#k - Lv. 110 Two-Handed BW#b",
		    "Dragon Faltizan#k - Lv. 110 Spear#b","Dragon Chelbird#k - Lv. 110 Polearm#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 2){ //bowman weapon
		var selStr = "Very well, then which Bowman weapon shall recieve a dragon's power?#b";
		var weapon = new Array ("Dragon Shiner Bow#k - Lv. 110 Bow#b","Dragon Shiner Cross#k - Lv. 110 Crossbow#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 3){ //magician weapon
		var selStr = "Very well, then which Magician weapon shall recieve a dragon's power?#b";
		var weapon = new Array ("Dragon Wand#k - Lv. 108 Wand#b","Dragon Staff#k - Lv. 110 Staff#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 4){ //thief weapon
		var selStr = "Very well, then which Thief weapon shall recieve a dragon's power?#b";
		var weapon = new Array ("Dragon Kanzir#k - Lv. 110 STR Dagger#b","Dragon Kreda#k - Lv. 110 LUK Dagger#b","Dragon Green Sleve#k - Lv. 110 Claw#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	    else if (selectedType == 5){ //pirate weapon
		var selStr = "Very well, then which Pirate weapon shall recieve a dragon's power?#b";
		var weapon = new Array ("Dragon Slash Claw#k - Lv. 110 Knuckle#b","Dragonfire Revolver#k - Lv. 110 Gun#b");
		for (var i = 0; i < weapon.length; i++){
		    selStr += "\r\n#L" + i + "# " + weapon[i] + "#l";
		}
		cm.sendSimple(selStr);
	    }
	}
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior weapon
	    var itemSet = new Array(1302059,1312031,1322052,1402036,1412026,1422028,1432038,1442045);
	    var matSet = new Array(new Array(1302056,4000244,4000245,4005000),new Array(1312030,4000244,4000245,4005000),new Array(1322045,4000244,4000245,4005000),new Array(1402035,4000244,4000245,4005000),
		new Array(1412021,4000244,4000245,4005000),new Array(1422027,4000244,4000245,4005000),new Array(1432030,4000244,4000245,4005000),new Array(1442044,4000244,4000245,4005000));
	    var matQtySet = new Array(new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8),new Array(1,20,25,8));
	    var costSet = new Array(120000,120000,120000,120000,120000,120000,120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman weapon
	    var itemSet = new Array(1452044,1462039);
	    var matSet = new Array(new Array(1452019,4000244,4000245,4005000,4005002),new Array(1462015,4000244,4000245,4005000,4005002));
	    var matQtySet = new Array(new Array(1,20,25,3,5),new Array(1,20,25,5,3));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician weapon
	    var itemSet = new Array(1372032,1382036);
	    var matSet = new Array(new Array(1372010,4000244,4000245,4005001,4005003),new Array(1382035,4000244,4000245,4005001,4005003));
	    var matQtySet = new Array(new Array(1,20,25,6,2),new Array(1,20,25,6,2));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief weapon
	    var itemSet = new Array(1332049,1332050,1472051);
	    var matSet = new Array(new Array(1332051,4000244,4000245,4005000,4005002),new Array(1332052,4000244,4000245,4005002,4005003),new Array(1472053,4000244,4000245,4005002,4005003));
	    var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5),new Array(1,20,25,2,6));
	    var costSet = new Array(120000,120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 5){ //pirate weapon
	    var itemSet = new Array(1482013,1492013);
	    var matSet = new Array(new Array(1482012,4000244,4000245,4005000,4005002),new Array(1492012,4000244,4000245,4005000,4005002));
	    var matQtySet = new Array(new Array(1,20,25,5,3),new Array(1,20,25,3,5));
	    var costSet = new Array(120000,120000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "You want me to make a #t" + item + "#? In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";
		
	if (stimulator){
	    stimID = getStimID(item);
	    prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";
	}

	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
	    }
	} else {
	    prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost + " meso";
		
	cm.sendYesNo(prompt);
    }
 else if (status == 3 && mode == 1) {
	var complete = true;
		
	if (cm.getMeso() < cost) {
	    cm.sendOk("My fee is for the good of all of Leafre. If you cannot pay it, then begone.");
		complete = false;
	} else {
	    if (mats instanceof Array) {
		for(var i = 0; complete && i < mats.length; i++) {
		    if (matQty[i] == 1)	{
			complete = cm.haveItem(mats[i]);
		    } else {
			complete = cm.haveItem(mats[i], matQty[i]);
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty);
	    }
	}
			
	if (stimulator){ //check for stimulator
	    if (!cm.haveItem(stimID)) {
		complete = false;
	    }
	}
			
	if (!complete){
	    cm.sendOk("I'm afraid that without the correct items, the dragon's essence would... not make for a very reliable weapon. Please bring the correct items next time.");
		cm.dispose();
	}else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    } else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    if (stimulator){ //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0){
		    cm.gainItem(item, 1, true)
		    cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
		} else {
		    cm.sendOk("Unfortunately, the dragon's essence has... conflicted with your weapon. My apologies for your loss.");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("The process is complete. Treat your weapon well, lest you bring the wrath of the dragons upon you.");
	    }
	}
	cm.dispose();
    } else if (status == 100) {
		cm.sendRepairWindow();
		cm.dispose();
	}
}

function getStimID(equipID){
    var cat = Math.floor(equipID / 10000);
    var stimBase = 4130002; //stim for 1h sword
	
    switch (cat){
	case 130: //1h sword, do nothing
	    break;
	case 131: //1h axe
	    stimBase++;
	    break;
	case 132: //1h bw
	    stimBase += 2;
	    break;
	case 140: //2h sword
	    stimBase += 3;
	    break;
	case 141: //2h axe
	    stimBase += 4;
	    break;
	case 142: //2h bw
	    stimBase += 5;
	    break;
	case 143: //spear
	    stimBase += 6;
	    break;
	case 144: //polearm
	    stimBase += 7;
	    break;
	case 137: //wand
	    stimBase += 8;
	    break;
	case 138: //staff
	    stimBase += 9;
	    break;
	case 145: //bow
	    stimBase += 10;
	    break;
	case 146: //xbow
	    stimBase += 11;
	    break;
	case 133: //dagger
	    stimBase += 12;
	    break;
	case 147: //claw
	    stimBase += 13;
	    break;
	case 148: //knuckle
	    stimBase += 14;
	    break;
	case 149: //gun
	    stimBase += 15;
	    break;
    }
	
    return stimBase;
}