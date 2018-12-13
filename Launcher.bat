@echo off
title TMS113
set CLASSPATH=.;dist\*;dist\lib\*
java -Xmx512M -server -Dnet.sf.odinms.wzpath=wz  server.Start
pause
