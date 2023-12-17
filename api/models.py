import email
from operator import mod
from pyexpat import model
from django.db import models
from django.contrib.auth.models import User ,AbstractBaseUser ,PermissionManager ,BaseUserManager
# Create your models here.


class Note(models.Model):
  body = models.TextField(null=True, blank=True)
  updated = models.DateTimeField(auto_now=True)
  created = models.DateTimeField(auto_now_add=True)
  # user = models.ForeignKey(
  #   User,
  #   related_name='leads',
  #   on_delete=models.CASCADE,
  #   null=True)

  def __str__(self):
      return str(self.body) + '---'  + str(self.updated)
      #  return  self.userid +  "---" + self.password + "-----" + str(self.status)



