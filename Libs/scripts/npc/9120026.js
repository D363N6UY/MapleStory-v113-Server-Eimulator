/*
	Crysta; - Kamuma (Neo Tokyo Teleporter)
*/

function start() {
    switch (cm.getMapId()) {
	case 802000211:
	    if (cm.getQuestStatus(4686) == 2) {
		cm.gainItem(4032181, 100);
		cm.warp(802000212, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);
		cm.forceCompleteQuest(4686);
	    }
	    cm.dispose();
	    break;
	case 802000313:
	    if (cm.getQuestStatus(4689) == 2) {
		cm.gainItem(4032181, 50);
		cm.warp(802000312, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 50);
		cm.forceCompleteQuest(4689);
	    }
	    cm.dispose();
	    break;
	case 802000411:
	    if (cm.getQuestStatus(4693) == 2) {
		cm.gainItem(4032181, 100);
		cm.warp(802000412, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);
		cm.forceCompleteQuest(4693);
	    }
	    cm.dispose();
	    break;
	case 802000611:
	    if (cm.getQuestStatus(4696) == 2) {
		cm.gainItem(4032181, 100);
		cm.warp(802000612, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);
		cm.forceCompleteQuest(4696);
	    }
	    cm.dispose();
	    break;
	case 802000111:
	    if (cm.getQuestStatus(4698) == 2) {
		cm.gainItem(4032181, 100);
		cm.warp(802000112, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);
		cm.forceCompleteQuest(4698);
	    }
	    cm.dispose();
	    break;
	case 802000711:
	    if (cm.getQuestStatus(50003) == 2) {
		cm.gainItem(4032181, 100);
		cm.warp(802000712, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);
		cm.forceCompleteQuest(50003);
	    }
	    cm.dispose();
	    break;
	case 802000803:
	    if (cm.getQuestStatus(50016) == 2) {
		cm.gainItem(4032181, 100);
		cm.gainItem(4032361,1);
		cm.warp(802000804, 0);
	    } else {
		cm.showEffect(false, "quest/party/clear");
		cm.playSound(false, "Party1/Clear");
		cm.gainItem(4032181, 100);

		cm.forceCompleteQuest(50016);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.sendSimple("I am responsible for expanding Asia's vast strengths. If you have received permission from Asia on time warp, then I will send you to the past or future of Zipangu. \r #b#L0#Future - Odaiba, Tokyo, 2100#l \r #L1#Future - Tokyo Park, 2095#l \r #L2#Future - Akihabara, Tokyo, 2102#l \r #L3#Future - Tokyo Skies, 2102#l \r #L4#Future - Shibuya, Tokyo, 2102#l \r #L5#Future - Top Floor of Roppongi Mall, Tokyo, 2102#l  \r #L7#Future - 2102 Roppongi Mall - Top Floor#l \r #L6#Past - Ninja Castle#l");
	    break;
    }
}

function action(mode, type, selection) {
    if (selection != 6) {

	var questid = true, mapid = 0, portal = 0;

	switch (selection) {
	    case 0:
		questid = cm.getQuestStatus(4682) == 2;
		mapid = 802000200;
		portal = 2;
		break;
	    case 1:
		questid = cm.getQuestStatus(4687) == 2;
		mapid = 802000300;
		portal = 0;
		break;
	    case 2:
		questid = cm.getQuestStatus(4690) == 2;
		mapid = 802000500;
		portal = 0;
		break;
	    case 3:
		questid = cm.getQuestStatus(4694) == 2;
		mapid = 802000600;
		portal = 0;
		break;
	    case 4:
		questid = cm.getQuestStatus(50001) == 2;
		mapid = 802000700;
		portal = 0;
		break;
	    case 5:
		questid = cm.getQuestStatus(50015) == 2;
		mapid = 802000800;
		portal = 0;
		break;
	    case 7:
		questid = cm.getQuestStatus(50017) == 2;
		mapid = 802000820;
		portal = 0;
		break;
	}
	if (questid && mapid > 0) {
	    cm.warp(mapid, portal);
	} else {
	    cm.sendOk("I don't think Asia has permitted you to use the Time Warp just yet. Complete your mission first before reporting to Asia");
	}
    }

    cm.dispose();
}