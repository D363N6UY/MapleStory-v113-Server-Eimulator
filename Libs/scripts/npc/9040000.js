/* 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * Start of Guild Quest
 */

var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.getPlayer().hasEquipped(1032033)) {
		cm.sendOk("Please remove your protector's rock.");
		cm.dispose();
	} else {
		cm.sendSimple("The path to Sharenian starts here. What would you like to do? #b\r\n#L0#Start a Guild Quest#l\r\n#L1#Join your guild's Guild Quest#l");
	}
	
    } else if (status == 1) {
	if (selection == 0) { //Start
	    if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) { //no guild or not guild master/jr. master
		cm.sendNext("Only a Master or Jr. Master of the guild can start an instance.");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("This trial is currently under construction.");
		} else {
		    var prop = em.getProperty("started");

		    if ((prop.equals("false") || prop == null) && em.getInstance("GuildQuest") == null) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
			em.setProperty("state", "0");
			cm.guildMessage("The guild has been entered into the Guild Quest. Please report to Shuang at the Excavation Camp on channel " + cm.getClient().getChannel() + ".");
		    } else {
			cm.sendOk("Someone is already attempting on the guild quest.")
		    }
		}
		cm.dispose();
	    }
	} else if (selection == 1) { //entering existing GQ
	    if (cm.getPlayerStat("GID") == 0) { //no guild or not guild master/jr. master
		cm.sendNext("You must be in a guild to join.");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("This trial is currently under construction.");
		} else {
		    var eim = em.getInstance("GuildQuest");

		    if (eim == null) {
			cm.sendOk("Your guild is currently not registered for an instance.");
		    } else {
//			if (em.getProperty("guildid") != null && !em.getProperty//("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
//			if (cm.getPlayer().isGM()) {
//			    cm.sendOk("This instance is not your guild. Instance Guild: "  + //em.getProperty("guildid") + ", Your Guild: " + cm.getPlayerStat("GID"));
//			} else {
//			    cm.sendOk("This instance is not your guild.");
//			}
//			} else 
if (em.getProperty("started").equals("false")) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			    eim.registerPlayer(cm.getPlayer());
			} else {
			    cm.sendOk("I'm sorry, but the guild has gone on without you. Try again later.");
			}
		    }
		}
		cm.dispose();
	    }
	}
    }
}