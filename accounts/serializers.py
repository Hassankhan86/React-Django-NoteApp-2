

from tkinter.ttk import Style
from django.contrib.auth.models import User
from rest_framework import serializers



class RegistrationSerializer(serializers.ModelSerializer):

  # password_confirm = serializers.CharField(style = { 'input_type' : 'password' },write_only = True)
  print(";;;;User.username...",User.username)

  class Meta:
    model = User
    fields = ['id' ,'username', 'email' ,'password']
    extra_kwargs = {
      'password': {'write_only': True,}
      }


  def save(self):
    password = self.validated_data['password']
    username = self.validated_data['username']

    # password_confirm = self.validated_data['password_confirm']

    # if password !=  password_confirm:
    #   raise serializers.ValidationError({'error': 'Pass1 and Pass2 is not matching'})

    # if User.objects.filter(username=username).exists():
    #   return serializers.ValidationError({'error': 'username Already Exists'})

    if User.objects.filter(email=self.validated_data['email']).exists():
      raise serializers.ValidationError({'Error': 'Email Already Exists'})


    account = User(email=self.validated_data['email'],username = self.validated_data['username'])
    account.set_password(password)
    account.save()

    return account

  # def create(self, validated_data):
  #   user = User.objects.create_user(**validated_data)
  #   # Token.objects.create(user=user)
  #   return user


class ChangePasswordSerializer(serializers.Serializer):
    model = User
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
