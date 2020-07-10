#!/bin/bash
/bin/ls -lAsh $1 | awk 'FNR > 1 {print $10 " " $6}'