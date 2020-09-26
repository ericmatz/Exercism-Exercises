#!/usr/bin/env bash

main(){
    if (( "$#" != 2 )); then
        echo "Usage: hamming.sh <string1> <string2>"
        exit 1
    elif (( ${#1} != ${#2} )); then
        echo "left and right strands must be of equal length"
    else
        for ((i = 0 ; i < ${#1} ; i++)); do
            if [[ "${1:$i:1}" != "${2:$i:1}" ]]; then
                ((count++))
            fi
        done
        echo ${count:-0}
    fi
}

main "$@"