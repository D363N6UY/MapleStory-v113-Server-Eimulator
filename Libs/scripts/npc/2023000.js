var map;
var cost;
var location;
var mapname;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("Hmm... think it over. This taxi is worth its service! You will never regret it!");
	cm.dispose();
	return;
    }

    if (status == 0) {
	switch (cm.getMapId()) {
	    case 540000000: // CBD
		map = 541020000;
		cost = 30000;
		mapname = "Ulu City";
		break;
	    case 240000000: // Leafre
		map = 240030000;
		cost = 55000;
		mapname = "Ossyria Continent";
		break;
	    case 220000000: // Ludi
		map = 220050300;
		cost = 45000;
		mapname = "Ossyria Continent";
		break;
	    case 211000000: // El Nath
		map = 211040200;
		cost = 45000;
		mapname = "Ossyria Continent";
		break;
	    default:
		map = 211040200;
		cost = 45000;
		mapname = "Ossyria Continent";
		break;
	}
	cm.sendNext("Hello there! This Bullet Taxi will take you to any danger zone from #m"+cm.getMapId()+"# to #b#m"+map+"##k on the "+mapname+"! The transportation fee of #b"+cost+" meso#k may seem expensive, but not that much when you want to easily transport through danger zones!");
    } else if (status == 1) {
	cm.sendYesNo("#bDo you want to pay meso#k and transport to #b#m"+map+"##k?");
    } else if (status == 2) {
	if (cm.getMeso() < cost) {
	    cm.sendNext("You don't seem to have enough mesos. I am terribly sorry, but I cannot help you unless you pay up. Bring in the mesos by hunting more and come back when you have enough.");
	    cm.dispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(map, 0);
	    cm.dispose();
	}
    }
}