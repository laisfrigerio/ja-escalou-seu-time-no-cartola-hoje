#!/bin/sh

NODE_PATH=$(which node)
BOT_PATH=$(find /home -type d -name ja-escalou-seu-time-no-cartola-hoje)

${NODE_PATH} "$BOT_PATH/src/index.js"