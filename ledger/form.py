# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponseRedirect
import time


# 接收请求数据
def form_submit(request):
    request.encoding = 'utf-8'
    path = "ledger/static/data/bills.csv"

    if 'sort' in request.GET:
        sort = request.GET['sort']

    if sort == "收入":
        sort = "1"
    else:
        sort = "0"

    if 'date' in request.GET:
        date = request.GET['date']
        timeArray = time.strptime(date, "%Y-%m-%d %H:%M:%S")
        date = int(time.mktime(timeArray) * 1000)
        date = str(date)

    if 'type' in request.GET:
        type = request.GET['type']

    if 'money' in request.GET:
        money = request.GET['money']

    f = open(path, "a+", encoding='UTF-8')
    f.write(sort + "," + date + "," + type + "," + money)
    f.write("\n")
    f.close()

    # return render(request, "ledger/index.html")
    return HttpResponseRedirect('/')
