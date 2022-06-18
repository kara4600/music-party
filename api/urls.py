from xml.etree.ElementInclude import include
from django.urls import path
from .views import RoomView

# api endpoint
urlpatterns = [
    # Calls main function from views.py
    path('', RoomView.as_view()),
]
