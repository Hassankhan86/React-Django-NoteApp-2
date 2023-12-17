from calendar import c
from curses.ascii import US
from dataclasses import field
from django.forms import models
from rest_framework.serializers import ModelSerializer
from .models import Note
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class NoteSerializer(ModelSerializer):
	class Meta:
		model = Note
		fields = '__all__'
		  


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username', 'password']
		# extra_kwargs = {'password': {'write_only': True, 'required': True}}

	def create(self, validated_data):
		user = User.objects.create_user(**validated_data)
		Token.objects.create(user=user)
		return user

