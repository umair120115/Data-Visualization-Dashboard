from rest_framework import serializers
from .models import Data,AppUser

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=AppUser
        fields=['email','password']

    def create(self, validated_data):
        user=AppUser.objects.create_user(**validated_data)
        return user
    

class UserUpdateSerialier(serializers.ModelSerializer):
    password = serializers.CharField(
        style={'input_type': 'password'}
    )
    class Meta:
        model = AppUser
        fields = (  'password',)

    def update(self, instance, validated_data):
        # instance.email = validated_data.get('email', instance.email)
        instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance