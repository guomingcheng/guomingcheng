#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

rm -fr docs/.vuepress/dist

git add -A

git commit -m 'deplayTwo'

git push -f git@github.com:guomingcheng/guomingcheng.git master

cd -