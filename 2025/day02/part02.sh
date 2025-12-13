#!/usr/bin/env bash

is-valid() {
  local num=$1
  local len=${#num}
  local mid=$((len / 2))

  local i
  for ((i = 1; i <= mid; i++)); do
    local substr=${num:0:i}

    if ((len % i == 0)); then
      # is divisible, this could be invalid
      amount=$((len / i))

      local j
      local newstr=''
      for ((j = 0; j < amount; j++)); do
        newstr+=$substr
      done

      if ((newstr == num)); then
        return 1
      fi
    fi
  done

  return 0
}

line=$(</dev/stdin)
acc=0

IFS=, read -ra elements <<<"$line"

total=${#elements[@]}
n=1
for element in "${elements[@]}"; do
  IFS=- read -r low high <<<"$element"

  echo "checking $n/$total"
  for ((i = low; i <= high; i++)); do
    if is-valid "$i"; then
      true
    else
      # number is bad
      ((acc += i))
    fi
  done
  ((n++))

done

echo "sum is $acc"
