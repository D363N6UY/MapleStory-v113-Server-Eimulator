/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
importPackage(Packages.client);
importPackage(Packages.server.quest);

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("請重新對話.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if (!(cm.getPlayer().getJob() == 110 || cm.getPlayer().getJob() == 120 || cm.getPlayer().getJob() == 130 || cm.getJob() == 2110)) {
				if (cm.getQuestStatus(6192) == 1) {
					if (cm.getParty() != null) {
						var ddz = cm.getEventManager("ProtectTylus");
						if (ddz == null) {
							cm.sendOk("Unknown error occured");
						} else {
							var prop = ddz.getProperty("state");
							if (prop == null || prop.equals("0")) {
								ddz.startInstance(cm.getParty(), cm.getMap());
							} else {
							cm.sendOk("Someone else is already trying to protect Tylus, please try again in a bit.");
							}
						}
					} else {
						cm.sendOk("Please form a party in order to protect Tylus!");
					}
					cm.dispose();
				} else if (cm.getQuestStatus(6192) == 2) {
					cm.sendOk("You have protected me. Thank you. I will teach you stance skill.");
					if (cm.getPlayer().getJob() == 112) {
						if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
							cm.teachSkill(1121002, 0, 10);
						}
					} else if (cm.getPlayer().getJob() == 122) {
						if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
							cm.teachSkill(1221002, 0, 10);
						}
					} else if (cm.getPlayer().getJob() == 132) {
						if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
							cm.teachSkill(1321002, 0, 10);
						}
					}
					cm.dispose();
				} else{
					cm.sendOk("#rOdin#k與你同在!");
					cm.dispose();
					return;
				}
			}else{
				if ((cm.getPlayer().getJob() >= 200 && cm.getJob() != 2110) || cm.getPlayer().getJob() % 10 != 0) {
					cm.sendOk("#rOdin#k與你同在!");
					cm.dispose();
					return;
				}
				if (cm.getQuestStatus(100102) == 2 ) { //完成
					cm.sendNext("#rBy Odin's ring!#k 你現在可以變得更強.");
				} else if (cm.getQuestStatus(100102) == 1 ) { //開始
					cm.sendOk("在冰原雪域內找到#r雪原聖地#k，且發現裡面的神聖石頭");
					cm.dispose();
				} else if (cm.getQuestStatus(100101) == 2) { //完成
					cm.sendNext("#rBy Odin's raven!#k 你確實很優秀");
				} else if (cm.getQuestStatus(100100) == 1 ) { // 開始
					cm.sendOk("現在，回去找#b武術教練#k. 他會幫助你.");
					cm.dispose();
				} else if (cm.getPlayer().getJob() < 200 && cm.getPlayer().getJob() % 10 == 0 && cm.getPlayer().getLevel() >= 70) {
					cm.sendNext("#rBy Odin's beard!#k你很強悍.");
				} else {
					cm.sendOk("還不是時候...");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			if (cm.getQuestStatus(100102) == 2) { //完成
				cm.changeJob(cm.getPlayer().getJob() + 1);
				cm.sendOk("你變得更加強大了!");
				cm.dispose();
			} else if (cm.getQuestStatus(100101) == 2) { //完成
				if(cm.haveItem(4031057)){
					cm.sendAcceptDecline("確定好要做最終測驗了?");
				}else{
					cm.sendOk("你沒有#b力量項鍊#k");
					cm.dispose();
				}
			} else {
				cm.sendAcceptDecline("但是我還可以讓你更強，你想要接受挑戰嗎?");
			}
		} else if (status == 2) {
			if (cm.getQuestStatus(100101) == 2) { //完成
				if(cm.haveItem(4031057)){
					cm.startQuest(100102);
					cm.gainItme(4031057,-1);
					cm.sendOk("發現#r雪原聖地#k隱藏的的神聖石頭並且帶回#b智慧項鍊#k");
					cm.dispose();
				}else{
					cm.sendOk("你沒有#b智慧項鍊#k");
					cm.dispose();
				}
			} else {
				cm.startQuest(100100);
				cm.sendOk("回去找#b武術教練#k.他會幫助你.");
				cm.dispose();
			}
		}
    }
}	
