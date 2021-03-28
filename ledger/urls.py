from django.contrib import admin
from django.urls import path
from . import views

app_name = 'ledger'

urlpatterns = [
    # 应用主页
    path('', views.index, name="index"),
    # 图表展示
    path('chart/', views.chart_overview, name="chart_overview"),
    # 按月份展示账单
    path('month_display/', views.month_display, name="month_display"),
    # 展示所有账单信息
    path('all_bills/', views.all_bills, name="all_bills"),
    # 单个账单详细信息
    path('details/', views.details, name="details"),
    # 帮助页面
    path('FAQ/', views.help, name="help"),
]
