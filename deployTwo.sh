#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -fr docs/.vuepress/dist

git add -A

git commit -m 'deplayTwo'

git push -f git@github.com:guomingcheng/guomingcheng.git master

cd -