#! /usr/bin/env sh

DIR=$(dirname "$0")
cd "$DIR"

source ../.env

cmd="ganache-cli --gasLimit 10000000"

if [ ! -z "$MNEMONIC" ]; then cmd="$cmd --mnemonic $MNEMONIC"; fi
if [ ! -z "$INFURA_ID" ]; then cmd="$cmd --fork https://mainnet.infura.io/v3/$INFURA_ID"; fi

eval "$cmd"
