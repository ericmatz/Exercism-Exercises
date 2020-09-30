#!/usr/bin/env bash

getLetter(){
    return total+=$(echo "${1:0:1}" | tr '[:lower:]' '[:upper:]')
}

main(){
    IFS=' '
    read -ra ADDR <<< "$1"
    for i in "${ADDR[@]}"; do
        if [[ "$i" =~ "-" ]]; then
            IFS='-'
            read -ra ADDR <<< "$i"
            for j in "${ADDR[@]}"; do
                total+=$(getLetter ${j})
            done
        else
            total+=$(getLetter ${i})
        fi
    done
    echo "$total"
}




main "$@"