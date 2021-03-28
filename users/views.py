from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import logout, authenticate  # 导入django自带的登陆验证模块
from django.contrib.auth.forms import UserCreationForm


def logout_view(request):
    """注销用户"""
    logout(request)
    return HttpResponseRedirect(reverse('ledger:index'))


def register(request):
    """注册新用户"""
    if request.method != 'POST':
        # 显示空的注册表单
        form = UserCreationForm()
    else:
        # 处理填写好的表单
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            new_user = form.save()
            # 让用户自动登录，再重新定向到主页
            authenticated_user = authenticate(username=new_user.name, password=request.POST['password1'])
            login(request, authenticated_user)
            return HttpResponseRedirect(reverse('ledger:index'))
    context = {'form': form}
    return render(request, 'users/register.html', context)


def login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        return HttpResponseRedirect('/index')

    return render(request, 'users/login.html')
