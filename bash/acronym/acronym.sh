#!/usr/bin/env bash

main(){
    IFS=' '
    read -ra ADDR <<< "$1"
    for i in "${ADDR[@]}"; do
        if [[ "$i" =~ "-" ]]; then
            IFS='-'
            read -ra ADDR <<< "$i"
            for j in "${ADDR[@]}"; do
                total+=$(echo "${j:0:1}" | tr '[:lower:]' '[:upper:]')
            done
        elif [[ "$i" =~ "_" ]]; then
            IFS='_'
            read -ra ADDR <<< "$i"
            for j in "${ADDR[@]}"; do
                total+=$(echo "${j:0:1}" | tr '[:lower:]' '[:upper:]')
            done
        elif [[ "$i" =~ "*" ]]; then
            IFS='*'
            read -ra ADDR <<< "$i"
            for j in "${ADDR[@]}"; do
                total+=$(echo "${j:0:1}" | tr '[:lower:]' '[:upper:]')
            done
        else
            total+=$(echo "${i:0:1}" | tr '[:lower:]' '[:upper:]')
        fi
    done
    echo "$total"
}

main "$@"