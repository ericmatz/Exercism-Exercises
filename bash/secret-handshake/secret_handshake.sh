#!/usr/bin/env bash

getBinary(){
    number=$1

    while [ $((number / 2 )) -ge 0 ]
    do
        binary+=$((number % 2))
        number=$((number / 2))
        if [ $number -eq 0 ]
        then
            break
        fi
    done

    binary=`echo $binary|rev`
    
    printf -v foo "%s" "$binary"
}

decode(){

    number=$1
    reverse=0

    while [ $number -gt 0 ]
    do
        if [ $number -ge 10000 ] 
        then
            reverse=1
            number=$(($number - 10000))
        fi
        if [ $number -ge 1000 ]
        then
            echo "jump"
            number=$(($number - 1000))
        fi
        if [ $number -ge 100 ]
        then
            echo "close your eyes"
            number=$(($number - 100))
        fi
        if [ $number -ge 10 ]
        then
            echo "double blink"
            number=$(($number - 10))
        fi
        if [ $number -ge 1 ]
        then
            echo "wink"
            number=$(($number - 1))
        fi
    done
}

main(){
    getBinary $1
    decode $binary
}

main "$@"