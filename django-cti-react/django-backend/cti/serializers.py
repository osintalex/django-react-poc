from rest_framework import serializers
from .models import Stix


class StixSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stix
        fields = ('id', 'name', 'description')