#!/usr/bin/env python
#coding: utf-8

import subprocess
import datetime

# 编译
# 将后端静态文件拷贝到dist目录 所有静态文件都走前端
# git add 添加所有文件
# git commit -a -m 提交
# git push 当前分之到远程同名分支


def run_cmd(cmd):
  code = subprocess.call(cmd, shell=True)
  if code > 1:
    raise Exception("'{}' 执行失败，返回code：{}".format(cmd, code))

def get_current_branch():
  p = subprocess.Popen("git branch -a", shell=True, stdout=subprocess.PIPE,
                       stderr=subprocess.PIPE)
  out, err = p.communicate()
  rows = out.decode().split("\n")
  for row in rows:
    if row[0] == "*":
      return row.split("* ")[1]


if __name__ == '__main__':
  dt = datetime.datetime.now()
  msg = dt.strftime("%Y%m%d%H%M")
  current_branch = get_current_branch()

  run_cmd("yarn run build")
#   run_cmd("cp -r django-static dist/static")
  run_cmd("git add *")
  run_cmd("git commit -a -m {}".format(msg))
  run_cmd("git push origin {}".format(current_branch))

