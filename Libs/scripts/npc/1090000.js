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
/*
   @Author Moogra
   Pirate Job Advancement
*/

var status = 0;
var job = 510;
var jobName = "Gunslinger";

function start() {
    if (cm.getPlayer().getJob() == 0) {
        if (cm.getPlayer().getLevel() >= 10)
            cm.sendNext("你想要成為#r海盜#k?");
        else {
            cm.sendOk("如果你想成為 #r海盜#k，歡迎找我.")
            cm.dispose();
        }
    } else {
        if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 500) {
			if(cm.getQuestStatus(2191) == 2 || cm.getQuestStatus(2192) == 2){
				cm.sendNext("你已經完成了我的任務");
				status = 9;
			}else if(cm.getQuestStatus(2191) == 1 || cm.getQuestStatus(2192) == 1){
				cm.sendNext("要準備開始進行轉職任務嗎?");
				status = 11;
			}else{
				cm.sendOk("你必須完成我的任務");
				cm.dispose();
			}
		}else if ( (cm.getPlayer().getJob()==510 || cm.getPlayer().getJob()==520) && cm.getPlayer().getLevel() >= 70)
		{
					if(cm.getQuestStatus(100100) == 1) //三轉開始
					{
						cm.sendOk("看起來你十分強壯，若是要三轉的話，請到#b異次元空間#k打倒我的分身，並且把#b黑符#k帶回來給我");
						cm.completeQuest(100100);
						cm.startQuest(100101);
						cm.dispose();
					}else if(cm.getQuestStatus(100101) == 1){
						if(cm.haveItem(4031059)){
							if(cm.canHold(4031057)){
								cm.sendOk("看來你已經打倒我的分身了，把這#b力量項鍊#k帶回去給長老吧!");
								cm.gainItem(4031057,1);
								cm.gainItem(4031059,-1);
								cm.completeQuest(100101);
							}else{
								cm.sendOk("請整理物品欄!");
							}
						}else{
							cm.sendOk("請盡快到#b異次元空間#k打倒我的分身，並且把#b黑符#k帶回來給我!");
						}
						cm.dispose();
					}else if(cm.getQuestStatus(100101) == 2){
						if(!cm.haveItem(4031057)){
							cm.sendOk("把#b力量項鍊#k搞丟了嗎?沒關係，我再給你");
							cm.gainItem(4031057,1);
						}else{
							cm.sendOk("趕緊去找長老吧!");
						}
						cm.dispose();
					}else{
						cm.sendOk("你似乎可以更加強大");
						cm.dispose();
					}
		}else if ( (cm.getPlayer().getJob()==512 || cm.getPlayer().getJob()==522) && cm.getPlayer().getLevel() >= 120)
		{
			if(cm.getQuestStatus(6330) == 1) //變強的方法
			{
				var dd = cm.getEventManager("KyrinTrainingGroundC");
				if (dd != null) {
					dd.startInstance(cm.getPlayer());
				} else {
					cm.sendOk("發生未知錯誤，請通知GM");
				}
			}else if(cm.getQuestStatus(6370) == 1){
				var dd = cm.getEventManager("KyrinTrainingGroundV");
				if (dd != null) {
					dd.startInstance(cm.getPlayer());
				} else {
					cm.sendOk("發生未知錯誤，請通知GM");
				}
				cm.dispose();
			}else{
				cm.sendOk("你非常的強悍");
				cm.dispose();
			}
        } else{
            cm.sendOk("我是一名海盜船長!");
			cm.dispose();
		}
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
        if (status == 1)
            cm.sendNextPrev("當個海盜是需要有自由自在的心，且這個選擇不能後悔!.");
        else if (status == 2)
            cm.sendYesNo("你確定要成為#r海盜#k?");
        else if (status == 3) {
            if (cm.getPlayer().getJob() == 0){
                cm.changeJob(500);
				cm.sendOk("你現在是一位海盜了!掠奪天下!");
			}else{
				cm.sendOk("出錯了!");
			}
			cm.dispose();
        }else if( status == 10 ){
			if(cm.getQuestStatus(2191) == 2 ){
				cm.sendYesNo("你確定要成為#r打手#k?");
				status = 10;
			}else if(cm.getQuestStatus(2192) == 2 ){
				cm.sendYesNo("你確定要成為#r槍手#k?");
				status = 10;
			}else{
				cm.sendOk("出錯了!");
				cm.dispose();
			}
		}else if(status == 11 ){
			if(cm.getQuestStatus(2191) == 2 && cm.getPlayer().getJob() == 500 ){
				cm.changeJob(510);
				cm.sendOk("你現在一名#r打手#k了");
				cm.dispose();
			}else if(cm.getQuestStatus(2192) == 2 && cm.getPlayer().getJob() == 500 ){
				cm.changeJob(520);
				cm.sendOk("你現在一名#r槍手#k了");
				cm.dispose();
			}
		}else if(status == 12){
			if(cm.getQuestStatus(2191) == 1)
				cm.warp(108000501);
			else
				cm.warp(108000500);
			cm.dispose();
		}
    } else if (mode == 0) {
        cm.sendOk("如果你改變想法，隨時歡迎你回來");
        cm.dispose();
    }  else {
        cm.dispose();
    }
}