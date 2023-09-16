from django.contrib import admin
from django.urls import include, path
from .views import (
    home_view,
    about_view
    
)

urlpatterns = [
    path('', home_view),
    path('about/', about_view)
]
