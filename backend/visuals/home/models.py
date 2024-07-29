from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class AppUserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra__fields):
        email=self.normalize_email(email)
        extra__fields.setdefault('is_active',True)
        extra__fields.setdefault('is_staff',True)
        user=self.model(email=email,**extra__fields)
        
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self,email,password=None,**extra__fields):
        extra__fields.setdefault('is_superuser',True)
        return self.create_user(email,password,**extra__fields)
    

class AppUser(AbstractBaseUser):
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=20)
    is_active=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['password']
    objects=AppUserManager()
    def __str__(self):
        return self.name
    def has_module_perms(self,app_label):
        return True
    def has_perm(self,perm,obj=None):
        return True
    

class Data(models.Model):
    end_year=models.CharField(max_length=200,blank=True,null=True)
    intensity=models.IntegerField(blank=True,null=True)
    sector=models.CharField(max_length=200,blank=True)
    topic=models.CharField(max_length=200,blank=True)
    insight=models.CharField(max_length=200,blank=True)
    url=models.URLField(max_length=200)
    region=models.CharField(max_length=200,null=True,blank=True)
    start_year=models.CharField(max_length=200,blank=True,null=True)
    impact=models.CharField(max_length=200,null=True,blank=True)
    added=models.CharField(max_length=200,null=True,blank=True)
    published=models.CharField(max_length=200,blank=True,null=True)
    country=models.CharField(max_length=200,null=True,blank=True)
    relevance=models.IntegerField(default=0)
    pestle=models.CharField(max_length=200,blank=True,null=True)
    source=models.CharField(max_length=200,blank=True,null=True)
    title=models.CharField(max_length=200,blank=True,null=True)
    likelihood=models.IntegerField(null=True,blank=True)
    