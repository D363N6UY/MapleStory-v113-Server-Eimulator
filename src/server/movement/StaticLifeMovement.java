/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.movement;

import java.awt.Point;
import tools.data.output.MaplePacketLittleEndianWriter;

/**
 *
 * @author Itzik
 */
public class StaticLifeMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond, offset;
    private short unk, fh;
    private int wui;

    public StaticLifeMovement(int type, Point position, int duration, int newstate , int newfh) {
        super(type, position, duration, newstate ,newfh);
    }

    public void setPixelsPerSecond(Point wobble) {
        this.pixelsPerSecond = wobble;
    }

    public void setOffset(Point wobble) {
        this.offset = wobble;
    }

    public void setFh(short fh) {
        this.fh = fh;
    }

    public void setUnk(short unk) {
        this.unk = unk;
    }

    public short getUnk() {
        return unk;
    }

    public void setWui(int wui) {
        this.wui = wui;
    }

    public void defaulted() {
        unk = 0;
        fh = 0;
        pixelsPerSecond = new Point(0, 0);
        offset = new Point(0, 0);
        wui = 0;
    }

    @Override
    public void serialize(MaplePacketLittleEndianWriter lew) {
        lew.write(getType());
        switch (getType()) {
            case 0:
            case 5:
            case 15:
            case 17:
                lew.writePos(getPosition());
                lew.writePos(pixelsPerSecond);
                lew.writeShort(unk);
                if (getType() == 15 || getType() == 16 ) {
                    lew.writeShort(fh);
                }
                break;
            case 1:
            case 2:
			case 6: // fj
            case 12:
            case 13:
            case 16:
            case 18:
            case 19:
            case 20:
            case 22:
            case 23:
			case 24:
                lew.writePos(pixelsPerSecond);
                break;
            case 3:
            case 4:
            case 7:
            case 8:
            case 9:
            case 11:
                lew.writePos(getPosition());
				lew.writeShort(fh);
                break;
            case 14:
                lew.writePos(getPosition());
                lew.writeShort(unk);
                break;
        }
        if (getType() != 10) {
            lew.write(getNewstate());
            lew.writeShort(getDuration());
        } else {
            lew.write(wui);
        }
    }
}