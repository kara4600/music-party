from lib2to3.pgen2.token import RPAR
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class CreateRoomSerializer(serializers.ModelSerializer):
    '''Serializes a request'''
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')
