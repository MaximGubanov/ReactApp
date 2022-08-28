from rest_framework.serializers import HyperlinkedModelSerializer

from .models import Word


class WordsModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Word
        fields = '__all__'
