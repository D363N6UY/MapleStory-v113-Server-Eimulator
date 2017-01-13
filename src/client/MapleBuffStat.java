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
package client;

import java.io.Serializable;

public enum MapleBuffStat implements Serializable {
    //DICE = 0x100000, the roll is determined in the long-ass packet itself as buffedvalue
    //ENERGY CHARGE = 0x400000
    //teleport mastery = 0x800000
    //PIRATE'S REVENGE = 0x4000000
    //DASH = 0x8000000 and 0x10000000
    //SPEED INFUSION = 0x40000000
    //MONSTER RIDER = 0x20000000
    //COMBAT ORDERS = 0x1000000

    ENHANCED_WDEF(0x1, true),
    ENHANCED_MDEF(0x2, true),
    PERFECT_ARMOR(0x4, true),
    SATELLITESAFE_PROC(0x8, true),
    SATELLITESAFE_ABSORB(0x10, true),
    CRITICAL_RATE_BUFF(0x40, true),
    MP_BUFF(0x80, true),
    DAMAGE_TAKEN_BUFF(0x100, true),
    DODGE_CHANGE_BUFF(0x200, true),
    CONVERSION(0x400, true),
    REAPER(0x800, true),
    MECH_CHANGE(0x2000, true), //determined in packet by [skillLevel or something] [skillid] 1E E0 58 52???
    DARK_AURA(0x8000, true),
    BLUE_AURA(0x10000, true),
    YELLOW_AURA(0x20000, true),
    ENERGY_CHARGE(0x80000000000L, true),
    DASH_SPEED(0x100000000000L, true),
    DASH_JUMP(0x200000000000L, true),
    MONSTER_RIDING(0x400000000000L, true),
    SPEED_INFUSION(0x800000000000L, true),
    HOMING_BEACON(0x1000000000000L, true),
	ELEMENT_RESET(0x100000000L),
    ARAN_COMBO(0x400000000L, true),
    COMBO_DRAIN(0x800000000L, true),
	COMBO_BARRIER(0x1000000000L, true),
	BODY_PRESSURE(0x2000000000L, true),
    SMART_KNOCKBACK(0x4000000000L, true),
    PYRAMID_PQ(0x2, false),
    LIGHTNING_CHARGE(0x4, false),
    //POST BB
    //DUMMY_STAT0     (0x8000000L, true), //appears on login
    //DUMMY_STAT1     (0x10000000L, true),
    //DUMMY_STAT2     (0x20000000L, true),
    //DUMMY_STAT3     (0x40000000L, true),
    //DUMMY_STAT4     (0x80000000L, true),

    SOUL_STONE(0x20000000000L, true), //same as pyramid_pq
    MAGIC_SHIELD(0x800000000000L, true),
    MAGIC_RESISTANCE(0x1000000000000L, true),
    SOARING(0x4000000000000L, true),
    //    LIGHTNING_CHARGE(0x10000000000000L, true),
    //db stuff
    MIRROR_IMAGE(0x20000000000000L, true),
    OWL_SPIRIT(0x40000000000000L, true),
    FINAL_CUT(0x100000000000000L, true),
    THORNS(0x200000000000000L, true),
    DAMAGE_BUFF(0x400000000000000L, true),
    RAINING_MINES(0x1000000000000000L, true),
    ENHANCED_MAXHP(0x2000000000000000L, true),
    ENHANCED_MAXMP(0x4000000000000000L, true),
    ENHANCED_WATK(0x8000000000000000L, true),
    MORPH(0x2),
    RECOVERY(0x4),
    MAPLE_WARRIOR(0x8),
    STANCE(0x10),
    SHARP_EYES(0x20),
    MANA_REFLECTION(0x40),
    DRAGON_ROAR(0x80), // Stuns the user

    SPIRIT_CLAW(0x100),
    INFINITY(0x200),
    HOLY_SHIELD(0x400),
    HAMSTRING(0x800),
    BLIND(0x1000),
    CONCENTRATE(0x2000),
    ECHO_OF_HERO(0x8000),
    UNKNOWN3(0x10000),
    GHOST_MORPH(0x20000),
    ARIANT_COSS_IMU(0x40000), // The white ball around you

    DROP_RATE(0x100000),
    MESO_RATE(0x200000),
    EXPRATE(0x400000),
    ACASH_RATE(0x800000),
    GM_HIDE(0x1000000),
    BERSERK_FURY(0x2000000),
    ILLUSION(0x4000000),
	SPARK(0x8000000),
    DIVINE_BODY(0x10000000),
	FINAL_MEL_ATTACK(0x20000000),
	FINALATTACK(0x40000000),
    ARIANT_COSS_IMU2(0x40000000), // no idea, seems the same
    WATK(0x100000000L),
    WDEF(0x200000000L),
    MATK(0x400000000L),
    MDEF(0x800000000L),
    ACC(0x1000000000L),
    AVOID(0x2000000000L),
    HANDS(0x4000000000L),
    SPEED(0x8000000000L),
    JUMP(0x10000000000L),
    MAGIC_GUARD(0x20000000000L),
    DARKSIGHT(0x40000000000L),
    BOOSTER(0x80000000000L),
    POWERGUARD(0x100000000000L),
    MAXHP(0x200000000000L),
    MAXMP(0x400000000000L),
    INVINCIBLE(0x800000000000L),
    SOULARROW(0x1000000000000L),
    COMBO(0x20000000000000L),
    SUMMON(0x20000000000000L), //hack buffstat for summons ^.- (does/should not increase damage... hopefully <3)
    WK_CHARGE(0x40000000000000L),
    DRAGONBLOOD(0x80000000000000L),
    HOLY_SYMBOL(0x100000000000000L),
    MESOUP(0x200000000000000L),
    SHADOWPARTNER(0x400000000000000L),
    PICKPOCKET(0x800000000000000L),
    PUPPET(0x800000000000000L), // HACK - shares buffmask with pickpocket - odin special ^.-

    MESOGUARD(0x1000000000000000L),;
    private static final long serialVersionUID = 0L;
    private final long buffstat;
    private final boolean first;

    private MapleBuffStat(long buffstat) {
        this.buffstat = buffstat;
        first = false;
    }

    private MapleBuffStat(long buffstat, boolean first) {
        this.buffstat = buffstat;
        this.first = first;
    }

    public final boolean isFirst() {
        return first;
    }

    public final long getValue() {
        return buffstat;
    }
}
