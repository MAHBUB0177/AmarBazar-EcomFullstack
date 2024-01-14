from dataclasses import field
from pyexpat import model
from urllib import request, response
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model


class customerSerializers(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields="__all__"
