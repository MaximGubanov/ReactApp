import os
import json

from django.core.management.base import BaseCommand

from wordapp.models import Word


JSON_PATH = 'wordapp/json'


def load_from_json(file_name):
    with open(os.path.join(JSON_PATH, file_name + '.json'), mode='r', encoding='utf8') as infile:
        return json.load(infile)


class Command(BaseCommand):

    def handle(self, *args, **options):

        words = load_from_json('en_words_translate')

        for w in words:
            Word.objects.create(en=w['en'], ru=w['ru'], learned=False, repeat=False, show_translate=False)
