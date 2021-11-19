from django.contrib import admin
from django.urls import path, include
from cti import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'stix', views.StixView, 'stix')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/', views.hello_world),
    path('api/', include(router.urls)),
]