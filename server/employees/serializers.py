from rest_framework import serializers
from employees import models

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.BkAuthor

        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.BkBook

        fields = '__all__'

class PublisherSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.BkPublisher

        fields = '__all__'