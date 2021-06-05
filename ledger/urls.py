from django.contrib import admin
from django.urls import path
from . import views
from . import form

app_name = 'ledger'

urlpatterns = [
    # 应用主页
    path('', views.index, name="index"),
    # 展示所有账单信息
    path('all_bills/', views.all_bills, name="all_bills"),
    # 记一笔页面
    path('record/', views.record, name="record"),
    # 帮助页面
    path('FAQ/', views.help, name="help"),
    # 提交表单数据
    path('form_submit/', form.form_submit),
]
