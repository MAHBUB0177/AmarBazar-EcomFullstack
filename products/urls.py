from django.contrib import admin
from django.urls import path
# from rest_framework import routers
# from rest_framework.authtoken.views import obtain_auth_token
# from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView

from .views import *


urlpatterns = [

    path('admin/', admin.site.urls),
     path('',current_datetime),


]