from rest_framework import serializers
from django.core.validators import FileExtensionValidator


class FileSerializer(serializers.Serializer):
    """Validates the file."""
    file = serializers.FileField(required=True, validators=[FileExtensionValidator(['txt'])])
