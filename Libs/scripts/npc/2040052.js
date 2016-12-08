/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Wiz the Librarian - Helios Tower <Library>(222020000)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var questid = new Array(3615,3616,3617,3618,3630,3633,3639);
var questitem = new Array(4031235,4031236,4031237,4031238,4031270,4031280,4031298);
var i;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	var counter = 0;
	var books = "";

	for (var i = 0; i < questid.length; i++) {
	    if (cm.getQuestStatus(questid[i]) == 2) {
		counter++;
		books += "\r\n#v"+questitem[i]+"# #b#t"+questitem[i]+"##k";
	    }
	}
	if(counter == 0) {
	    cm.sendOk("#b#h ##k has not returned a single storybook yet.");
	    cm.safeDispose();
	} else {
	    cm.sendNext("Let's see.. #b#h ##k have returned a total of #b"+counter+"#k books. The list of returned books is as follows:"+books);
	}
    } else if (status == 1) {
	cm.sendNextPrev("The library is settling down now thanks chiefly to you, #b#h ##k's immense help. If the story gets mixed up once again, then I'll be counting on you to fix it once more.");
    } else if (status == 2) {
	cm.dispose();
    }
}