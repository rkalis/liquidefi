#! /usr/bin/env sh

DIR=$(dirname "$0")
cd "$DIR"

source ../.env

cmd="ganache-cli --gasLimit 10000000"

if [ ! -z "$MNEMONIC" ]; then cmd="$cmd --mnemonic $MNEMONIC"; fi
if [ ! -z "$INFURA_ID" ]; then cmd="$cmd --fork https://mainnet.infura.io/v3/$INFURA_ID --unlock 0x9eb7f2591ed42dee9315b6e2aaf21ba85ea69f8c --unlock 0xe126b3E5d052f1F575828f61fEBA4f4f2603652a --unlock 0xcd8393b5b0ec5ab8dad4e648f709be6bac11874d"; fi

eval "$cmd"
