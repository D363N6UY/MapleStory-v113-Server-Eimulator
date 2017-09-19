package handling.netty;

/**
 *
 * @author even
 * from http://forum.ragezone.com/f427/netty-1079315/
 */
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import handling.MapleServerHandler;


public class ServerInitializer extends ChannelInitializer<SocketChannel> {
	
    //private int world;
    private int channels;
	
    public ServerInitializer(int channels) {// int world, 
        //this.world = world;
        this.channels = channels;
    }
	
    @Override
    protected void initChannel(SocketChannel channel) throws Exception {
    	ChannelPipeline pipe = channel.pipeline();
        pipe.addLast("decoder", new MaplePacketDecoder()); // decodes the packet
        pipe.addLast("encoder", new MaplePacketEncoder()); //encodes the packet
        pipe.addLast("handler", new MapleServerHandler(channels, (channels == -10)));
    }
}