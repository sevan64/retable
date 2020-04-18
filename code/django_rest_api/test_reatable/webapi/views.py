from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import viewsets

from webapi.models import Poet
# from webapi.permissions import IsAuthorOrReadOnly
from webapi.serializers import PoetSerializer, UserSerializer
from rest_framework import generics


# ListCreateAPIView -> read-write endpoint
class PoetList(generics.ListCreateAPIView):
    queryset = Poet.objects.all()
    serializer_class = PoetSerializer


# RetrieveUpdateDestoryAPIView -> ALlows read, update, delete
class PoetDetail(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsAuthorOrReadOnly,)
    queryset = Poet.objects.all()
    serializer_class = PoetSerializer

# 追加
class UserList(generics.ListCreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

# 追加
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
