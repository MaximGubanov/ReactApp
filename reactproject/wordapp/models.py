from django.db import models


class Word(models.Model):

    en = models.CharField(max_length=32)
    ru = models.CharField(max_length=32)
