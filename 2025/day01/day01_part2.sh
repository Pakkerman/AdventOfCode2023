#!/usr/bin/env bash

dial=50
acc=0

while read -r line; do
  direction=${line:0:1}
  amount=${line:1}
  echo "$direction $amount"

  case "$direction" in
  L)
    for ((i = 0; i < amount; i++)); do
      ((dial -= 1))
      if ((dial == 0)); then
        echo touched 0
        ((acc++))
      fi
      if ((dial < 0)); then
        ((dial += 100))
      fi

    done
    ;;
  R)
    for ((i = 0; i < amount; i++)); do
      ((dial += 1))
      if ((dial >= 100)); then
        ((dial -= 100))
      fi
      if ((dial == 0)); then
        echo touched 0
        ((acc++))
      fi
    done
    ;;

  *) exit ;;
  esac

done

echo "number of zeros is $acc"
