from xml.etree.ElementInclude import include
from django.urls import path
from .views import CreateRoomView, GetRoom, RoomView

# api endpoint
urlpatterns = [
    # Calls main function from views.py
    path('', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view())
]
