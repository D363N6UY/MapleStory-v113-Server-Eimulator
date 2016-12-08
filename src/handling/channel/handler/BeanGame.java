package handling.channel.handler;

import java.util.ArrayList;
import java.util.List;
import client.MapleCharacter;
import client.MapleClient;
import tools.MaplePacketCreator;
import tools.data.input.SeekableLittleEndianAccessor;

public class BeanGame {

    public static final void BeanGame1(SeekableLittleEndianAccessor slea, MapleClient c) {
        //System.out.println("豆�?�出?��???" +slea.toString());
        MapleCharacter chr = c.getPlayer();
        List<Beans> beansInfo = new ArrayList<Beans>();
        int type = slea.readByte();
        int 力度 = 0;
        int 豆豆序號 = 0;
        if (type == 1) { //?��开始�?�时?�? 确认??��?��?��?��?�度
            //01 E8 03
            力度 = slea.readShort();
            chr.setBeansRange(力度);
            //System.out.println("??��?��?��?�度1�?"+??�度);
            //c.getSession().write(MaplePacketCreator.enableActions());
        } else if (type == 2) { //没�?�在??��?��??
/*  30: 37 */ if ((type == 11) || (type == 0)) /*  31:    */ {
                /*  32: 42 */ 力度 = slea.readShort();
                /*  33: 43 */ 豆豆序號 = slea.readInt() + 1;
                /*  34: 44 */ chr.setBeansRange(力度);
                /*  35: 45 */ chr.setBeansNum(豆豆序號);
                /*  36: 46 */ if (豆豆序號 == 1) {
                    /*  37: 47 */ chr.setCanSetBeansNum(false);
                    /*  38:    */                }
                /*  39:    */            }
            /*  40: 53 */        } else if (type == 6) {
            /*  41:    */ {
                /*  42: 68 */ slea.skip(1);
                /*  43: 69 */ int 循環次數 = slea.readByte();
                /*  44: 70 */ if (循環次數 == 0) {
                    /*  45: 71 */ return;
                    /*  46:    */                }
                /*  47: 72 */ if (循環次數 != 1) {
                    /*  48: 73 */ slea.skip((循環次數 - 1) * 8);
                    /*  49:    */                }
                /*  50: 76 */ if (chr.isCanSetBeansNum()) {
                    /*  51: 77 */ chr.setBeansNum(chr.getBeansNum() + 循環次數);
                    /*  52:    */                }
                /*  53: 80 */ chr.gainBeans(-循環次數);
                /*  54: 81 */ chr.setCanSetBeansNum(true);
                /*  55:    */            }
            /*  56:    */        } else {
            /*  57:    */ {
                /*  58: 85 */ System.out.println("未處理的類型【" + type + "】\n包" + slea.toString());
                /*  59:    */            }
            /*  60:    */        }
        /*  61: 87 */ if ((type == 11) || (type == 6)) /*  62:    */ {
            /*       for (int i = 0; i < 5; i++) {
             beansInfo.add(new Beans(chr.getBeansRange() + rand(-100, 100), getBeanType(), chr.getBeansNum() + i));
             }*/
            byte size = slea.readByte();
            short Pos = slea.readShort();
            byte Type = slea.readByte();
            /*  66: 91 */ c.getSession().write(MaplePacketCreator.showBeans(size, Pos, Type));
            /*  67:    */        }
        /*  68:    */    }

    private static int getBeanType() {
        int random = rand(1, 100);
        int beanType = 0;
        //3 - �?, 2 - ???, 1 - �?, 0 - ?��?�?
        switch (random) {
            case 2:
                beanType = 1; //�?
                break;
            case 49:
                beanType = 2; //???
                break;
            case 99:
                beanType = 3; //�?
                break;
        }
        return beanType;
    }

    private static int rand(int lbound, int ubound) {
        return (int) ((Math.random() * (ubound - lbound + 1)) + lbound);
    }

    public class Beans {

        private int number;
        private int type;
        private int pos;

        public Beans(int pos, int type, int number) {
            this.pos = pos;
            this.number = number;
            this.type = type;
        }

        public int getType() {
            return type;
        }

        public int getNumber() {
            return number;
        }

        public int getPos() {
            return pos;
        }
    }

    public static final void BeanGame2(SeekableLittleEndianAccessor slea, MapleClient c) {
        c.getSession().write(MaplePacketCreator.updateBeans(c.getPlayer().getId(), c.getPlayer().getBeans()));
        c.getSession().write(MaplePacketCreator.enableActions());
    }
}
