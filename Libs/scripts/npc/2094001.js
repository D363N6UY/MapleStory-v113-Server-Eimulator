var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.sendSimple("#b#L0#我要離開#l\r\n#L1#我要兌換海賊王帽子#l#k");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.gainExp(50000);
	    cm.getPlayer().endPartyQuest(1204);
	    cm.warp(251010404,0);
	} else {
	    var cmp = cm.getPlayer().getOneInfo(1204, "cmp");
	    var have0 = cm.getPlayer().getOneInfo(1204, "have0");
	    var have1 = cm.getPlayer().getOneInfo(1204, "have1");
	    var have2 = cm.getPlayer().getOneInfo(1204, "have2");
	    var have3 = cm.getPlayer().getOneInfo(1204, "have3");
	    if (cmp == null) {
		cm.sendOk("30 Pirate PQ = Lord Pirate's Hat(1)\r\n80 Pirate PQ = Lord Pirate's Hat(2)\r\n200 Pirate PQ = Lord Pirate's Hat(3)\r\n350 Pirate PQ = Lord Pirate's Hat(4)");
	    } else {
		var cmp_i = parseInt(cmp);
		var have0_i = parseInt(have0);
		var have1_i = parseInt(have1);
		var have2_i = parseInt(have2);
		var have3_i = parseInt(have3);
		if (have3_i > 0) {
		    if (cm.canHold(1002574,1)) {
		    	cm.gainItem(1002574,1);
			cm.sendOk("I have given you the hat.");
		    } else {
			cm.sendOk("I have already given you the hat,but if you want another,please make room.");
		    }
		} else if (have2_i > 0) {
		    if (cmp_i >= 350) {	
			if (cm.canHold(1002574,1)) {
		    	    cm.gainItem(1002574,1);
			    cm.sendOk("I have given you the hat.");
		    	} else {
			    cm.sendOk("Please make room.");
		        } 
		    } else {
			cm.sendOk("You need 350 Pirate PQ to get the next hat. Current : " + cmp_i);
		    }
		} else if (have1_i > 0) {
		    if (cmp_i >= 200) {	
			if (cm.canHold(1002573,1)) {
		    	    cm.gainItem(1002573,1);
			    cm.sendOk("I have given you the hat.");
		    	} else {
			    cm.sendOk("Please make room.");
		        } 
		    } else {
			cm.sendOk("You need 200 Pirate PQ to get the next hat. Current : " + cmp_i);
		    }
		} else if (have0_i > 0) {
		    if (cmp_i >= 80) {	
			if (cm.canHold(1002572,1)) {
		    	    cm.gainItem(1002572,1);
			    cm.sendOk("I have given you the hat.");
		    	} else {
			    cm.sendOk("Please make room.");
		        } 
		    } else {
			cm.sendOk("You need 80 Pirate PQ to get the next hat. Current : " + cmp_i);
		    }
		} else {
		    if (cmp_i >= 30) {	
			if (cm.canHold(1002571,1)) {
		    	    cm.gainItem(1002571,1);
			    cm.sendOk("I have given you the hat.");
		    	} else {
			    cm.sendOk("Please make room.");
		        } 
		    } else {
			cm.sendOk("You need 30 Pirate PQ to get the next hat. Current : " + cmp_i);
		    }
		}
	    }
	}
	cm.dispose();
    }
}