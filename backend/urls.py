from django.urls import path
from . import views


urlpatterns = [
    
    path('', views.home, name='home'),
    path('api-overview', views.apiOverview, name="api-overview"),
]
