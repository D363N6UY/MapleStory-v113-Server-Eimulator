/*
	Made by RMZero213 of RaGEZONE forums.
	Just keep this header here and don't claim that you made it.
*/

/*
	1032102.js
	Mar the Fairy
	Dragon Evolver
*/

var status = 0;
var pet = null;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("Alright, see you next time.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("I am Mar the Fairy. If you have an evolving pet at level 15 or higher and a rock of evolution. I can evolve your pet. Would you like me to do so?#b\r\n#L0#Evolve my dragon.#l\r\n#L1#Evolve my robo.#l#k");
		} else if (status == 1) {
			if (selection == 0) {
				var currentpet = null;
				for (var i = 0; i < 3; i++) {
					currentpet = cm.getPlayer().getPet(i);
					if (currentpet != null && pet == null) {
						if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000028 && currentpet.getPetItemId() < 5000034 && currentpet.getLevel() >= 15) {
							pet = currentpet;
							break;
						}
					}
				}
				if (pet == null || !cm.haveItem(5380000,1)) {
					cm.sendOk("You do not meet the requirements. You need #i5380000##t5380000#, as well as either one of #d#i5000029##t5000029##k, #g#i5000030##t5000030##k, #r#i5000031##t5000031##k, #b#i5000032##t5000032##k, or #e#i5000033##t5000033##n equipped at level 15 or higher. Please come back when you do.");
					cm.dispose();
				} else {
					var id = pet.getPetItemId();
					var name = pet.getName();
					var level = pet.getLevel();
					var closeness = pet.getCloseness();
					var fullness = pet.getFullness();
					var flag = pet.getFlags();
					var slot = pet.getInventoryPosition();
					var rand = 0;
					var after = id;
					while (after == id) {
						rand = 1 + Math.floor(Math.random() * 10);
						if (rand >= 1 && rand <= 3) {
							after = 5000030;
						} else if (rand >= 4 && rand <= 6) {
							after = 5000031;
						} else if (rand >= 7 && rand <= 9) {
							after = 5000032;
						} else if (rand == 10) {
							after = 5000033;
						}
					}
					if (name.equals(cm.getItemName(id))) {
						name = cm.getItemName(after);
					}
					cm.getPlayer().unequipPet(pet, true, false);
					cm.gainItem(5380000, -1);
					cm.removeSlot(5, slot, 1);
					cm.gainPet(after, name, level, closeness, fullness, 45,flag);
					cm.getPlayer().spawnPet(slot);
					cm.sendOk("Your dragon has now evolved!! It used to be a #i" + id + "##t" + id + "#, and now it's a #i" + after + "##t" + after + "#!");
					cm.dispose();
				}
			} else if (selection == 1) {
				var currentpet = null;
				for (var i = 0; i < 3; i++) {
					currentpet = cm.getPlayer().getPet(i);
					if (currentpet != null && pet == null) {
						if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000047 && currentpet.getPetItemId() < 5000054 && currentpet.getLevel() >= 15) {
							pet = currentpet;
							break;
						}
					}
				}
				if (pet == null || !cm.haveItem(5380000,1)) {
					cm.sendOk("You do not meet the requirements. You need #i5380000##t5380000#, as well as either one of #g#i5000048##t5000048##k, #r#i5000049##t5000049##k, #b#i5000050##t5000050##k, #d#i5000051##t5000051##k, #d#i5000052##t5000052##k, or #e#i5000053##t5000053##n equipped at level 15 or higher. Please come back when you do.");
					cm.dispose();
				} else {
					var id = pet.getPetItemId();
					var name = pet.getName();
					var level = pet.getLevel();
					var closeness = pet.getCloseness();
					var fullness = pet.getFullness();
					var flag = pet.getFlags();
					var slot = pet.getInventoryPosition();
					var rand = 0;
					var after = id;
					while (after == id) {
						rand = 1 + Math.floor(Math.random() * 9);
						if (rand >= 1 && rand <= 2) {
							after = 5000049;
						} else if (rand >= 3 && rand <= 4) {
							after = 5000050;
						} else if (rand >= 5 && rand <= 6) {
							after = 5000051;
						} else if (rand >= 7 && rand <= 8) {
							after = 5000052;
						} else if (rand == 9) {
							after = 5000053;
						}
					}
					if (name.equals(cm.getItemName(id))) {
						name = cm.getItemName(after);
					}
					cm.getPlayer().unequipPet(pet, true, false);
					cm.gainItem(5380000, -1);
					cm.removeSlot(5, slot, 1);
					cm.gainPet(after, name, level, closeness, fullness, 45 ,flag);
					cm.getPlayer().spawnPet(slot);
					cm.sendOk("Your robo has now evolved!! It used to be a #i" + id + "##t" + id + "#, and now it's a #i" + after + "##t" + after + "#!");
					cm.dispose();
				}
			}
		}
	}
}