#!/usr/bin/env bash

dail=50
acc=0

while read -r line; do
  direction=${line:0:1}
  amount=${line:1}
  echo "$direction $amount"

  case "$direction" in
  L)
    ((dail -= amount))
    while ((dail < 0)); do
      ((dail += 100))
    done

    ;;
  R)
    ((dail += amount))
    while ((dail >= 100)); do
      ((dail -= 100))
    done
    ;;

  esac

  if ((dail == 0)); then
    ((acc++))
  fi

done

echo "number of zeros is $acc"
