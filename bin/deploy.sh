#!/bin/sh

rsync -e ssh -ravP  build/production/* visionis@corridorclassic.us:/home3/visionis/public_html/corridorclassic/dev/

