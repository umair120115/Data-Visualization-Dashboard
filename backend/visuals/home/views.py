from django.shortcuts import get_object_or_404, render
from rest_framework import generics,filters,mixins
from .serializers import DataSerializer,UserSerializer,UserUpdateSerialier
from .models import Data,AppUser
from rest_framework.permissions import AllowAny,IsAuthenticated

# Create your views here.
class DataView(generics.ListCreateAPIView):
    serializer_class=DataSerializer
    permission_classes=[AllowAny]
    queryset=Data.objects.all()
    filter_backends=[filters.SearchFilter]# for searching use of django_filters library
    search_fields = ['end_year','intensity','sector','topic','insight','region','region','start_year','impact','added','published','country','relevance','likelihood','pestle','source','title']


class CreateUserView(generics.ListCreateAPIView):
    serializer_class=UserSerializer
    permission_classes=[AllowAny]
    queryset=AppUser.objects.all()


class UpdateUserView(generics.RetrieveUpdateAPIView,mixins.UpdateModelMixin):
    serializer_class=UserUpdateSerialier
    permission_classes=[AllowAny]
    queryset=AppUser.objects.all()

    
   