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
function enter(pi) {
	var elevator = pi.getEventManager("elevator");
	if (elevator == null) {
		pi.getPlayer().dropMessage(5, "電梯好像故障了...");
		return false;
	}
	if (pi.getPlayer().getMapId() == 222020200 && elevator.getProperty("isDown").equals("false") ) {
		pi.warp(222020210 , "out00");
		return true;
	} else if (pi.getPlayer().getMapId() == 222020100 && elevator.getProperty("isUp").equals("false")) {
		pi.warp(222020110 , "out00");
		return true;
	} else {
		pi.getPlayer().dropMessage(5, "電梯門關著...");
		return false;
	}
}