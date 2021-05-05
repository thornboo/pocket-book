from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import Http404, HttpResponse


@login_required
# 网站主页
def index(request):
    return render(request, "ledger/index.html")


@login_required
# 图表数据可视化
def chart_overview(request):
    return render(request, "ledger/chart_overview.html")


@login_required
# 展示所有账单信息
def all_bills(request):
    return render(request, "ledger/all_bills.html")


@login_required
# 记一笔页面
def record(request):
    return render(request, "ledger/record.html")


# 网站帮助
def help(request):
    return render(request, "ledger/help.html")
