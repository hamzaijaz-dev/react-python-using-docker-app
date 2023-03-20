from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from wordcounter.serializers import FileSerializer
from wordcounter.utils import find_most_frequent_words


class FrequentWords(APIView):
    serializer_class = FileSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=    request.data)
        serializer.is_valid(raise_exception=True)
        response_data = find_most_frequent_words(serializer.validated_data)

        return Response(data=response_data, status=status.HTTP_200_OK)
