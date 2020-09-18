#!/usr/bin/env bash
# -*- coding: utf-8 -*-
read -r -p "What is your post about? " ABOUT
TODAY=$(date "+%Y-%m-%d")
FOLDER_NAME="./posts/$(date "+%Y")/$TODAY-${ABOUT// /-}"
INDEX_FILE="$FOLDER_NAME/index.mdx"
mkdir -p "$FOLDER_NAME"
touch "$INDEX_FILE"
{
    echo "---";
    echo "title: $ABOUT";
    echo "date: $TODAY";
    echo "published: false";
    echo "---";
} >> "$INDEX_FILE"
