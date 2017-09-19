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
package handling.netty;

import client.MapleClient;
import handling.MaplePacket;
import tools.MapleAESOFB;
import tools.MapleCustomEncryption;
import tools.HexTool;

import java.util.concurrent.locks.Lock;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

public class MaplePacketEncoder extends MessageToByteEncoder<Object> {

    @Override
    protected void encode(ChannelHandlerContext ctx, Object message, ByteBuf buffer) throws Exception {	
        final MapleClient client = (MapleClient)ctx.channel().attr(MapleClient.CLIENT_KEY).get();
        if (client != null) {
            final MapleAESOFB send_crypto = client.getSendCrypto();
            final byte[] input = ((MaplePacket) message).getBytes();
            final byte[] unencrypted = new byte[input.length];
            System.arraycopy(input, 0, unencrypted, 0, input.length);
            final byte[] ret = new byte[unencrypted.length + 4];
            //MapleCustomEncryption.encryptData(unencrypted);

            final Lock mutex = client.getLock();
            mutex.lock();
            try {
                final byte[] header = send_crypto.getPacketHeader(unencrypted.length);
                send_crypto.crypt(unencrypted);
                System.arraycopy(header, 0, ret, 0, 4);
                System.arraycopy(unencrypted, 0, ret, 4, unencrypted.length);
                buffer.writeBytes(ret);
            } finally {
                mutex.unlock();
            }
//            System.arraycopy(unencrypted, 0, ret, 4, unencrypted.length);
//            out.write(ByteBuffer.wrap(ret));
        } else {
            buffer.writeBytes((((MaplePacket) message).getBytes()));
        }
    }

}
