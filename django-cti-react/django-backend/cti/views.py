from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import StixSerializer
from .models import Stix

# Create your views here.


@api_view(['GET', 'POST'])
def hello_world(request):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    return Response({"message": "Hello, world!"})

class StixView(viewsets.ModelViewSet):
    serializer_class = StixSerializer
    queryset = Stix.objects.all()