/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package server.shops;

import java.util.concurrent.ScheduledFuture;
import client.inventory.IItem;
import java.util.concurrent.locks.Lock;
import client.inventory.ItemFlag;
import constants.GameConstants;
import client.MapleCharacter;
import client.MapleClient;
import server.MapleItemInformationProvider;
import handling.channel.ChannelServer;
import java.util.LinkedList;
import java.util.List;
import java.util.LinkedHashMap;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import server.MapleInventoryManipulator;
import server.Timer.EtcTimer;
import server.maps.MapleMapObjectType;
import tools.MaplePacketCreator;
import tools.packet.PlayerShopPacket;

public class HiredFishing extends AbstractPlayerStore {

    public ScheduledFuture<?> schedule;
    private int storeid;
    private long start;
	private ReentrantReadWriteLock FishingLock = new ReentrantReadWriteLock();

    public HiredFishing(MapleCharacter owner, int itemId) {
        super(owner, itemId, "", "", 3);
        start = System.currentTimeMillis();
        this.schedule = EtcTimer.getInstance().schedule(new Runnable() {

            @Override
            public void run() {
                closeShop(true, true);
            }
        }, 1000 * 60 * 60 * 24);
    }

    public byte getShopType() {
        return IMaplePlayerShop.HIRED_FISHING;
    }

    public final void setStoreid(final int storeid) {
        this.storeid = storeid;
    }

    @Override
    public void buy(MapleClient c, int item, short quantity) {
        // hack ?
        c.getPlayer().dropMessage(1, "Hacking?");
        c.getSession().write(MaplePacketCreator.enableActions());
        return;
    }

    @Override
    public void closeShop(boolean saveItems, boolean remove) {
		FishingLock.writeLock().lock();
		try{
            if (schedule != null) {
                schedule.cancel(false);
            }
            if (saveItems) {
                saveItems(false);
//              items.clear();
            }
            if (remove) {
                ChannelServer.getInstance(channel).removeFishing(this);
                getMap().broadcastMessage(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
            }
            getMap().removeMapObject(this);
            schedule = null;
        }finally{
			FishingLock.writeLock().unlock();
		}
	}

    public int getTimeLeft() {
        return (int) ((System.currentTimeMillis() - start) / 1000);
    }

    public final int getStoreId() {
        return storeid;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.HIRED_FISHING;
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        if (isAvailable()) {
            client.getSession().write(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
        }
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        if (isAvailable()) {
            client.getSession().write(PlayerShopPacket.spawnHiredFishing(this));
        }
    }
	
}
