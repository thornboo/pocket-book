from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import Http404, HttpResponse


# 网站主页
def index(request):
    return render(request, "ledger/index.html")


# 图表数据可视化
def chart_overview(request):
    return render(request, "ledger/chart_overview.html")


# 展示所有账单信息
def all_bills(request):
    return render(request, "ledger/all_bills.html")


# 记一笔页面
def record(request):
    return render(request, "ledger/record.html")


# 网站帮助
def help(request):
    return render(request, "ledger/help.html")
