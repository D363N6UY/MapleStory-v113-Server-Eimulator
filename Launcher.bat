@echo off
title TMS113
set CLASSPATH=.;dist\*
java -Xmx4G -Xms2G -server -Dnet.sf.odinms.wzpath=wz  server.Start
pause
