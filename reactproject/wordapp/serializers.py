from rest_framework.serializers import HyperlinkedModelSerializer

from .models import Word


class WordsModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Word
        fields = ['id', 'en', 'ru', 'learned', 'repeat', 'show_translate']
