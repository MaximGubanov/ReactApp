from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from wordapp.views import WordsModelViewSet


router = DefaultRouter()
router.register('words', WordsModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
