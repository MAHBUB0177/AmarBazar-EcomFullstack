from django.shortcuts import render
from django.http import HttpResponse
import datetime

from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
# from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Q
from django.utils import timezone
from .models import *
# from .serializers import *
from django.contrib.auth.models import User
from django.db.models import Q
from django.utils import timezone
from django.contrib.auth.models import User


def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now  %s.</body></html>" % now
    return HttpResponse(html)