from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny

from .serializers import WordsModelSerializer
from .models import Word


class WordsModelViewSet(ModelViewSet):

    queryset = Word.objects.all()
    serializer_class = WordsModelSerializer
    permission_classes = [AllowAny]
