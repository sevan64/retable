from rest_framework import serializers
from django.contrib.auth import get_user_model
from webapi.models import Poet, User
class PoetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poet
        fields = ('id', 'name', 'books_title', 'author', 'bio','purchased_date','finished_date','created_at')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username')
