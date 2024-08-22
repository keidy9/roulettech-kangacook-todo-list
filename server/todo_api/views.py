from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Task
from .serializers import TaskSerializer

# Create your views here.
class TodoListApiView(APIView):
    def get(self, request, *args, **kwargs):
        tasks = Task.objects
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        data = {
            'task_name': request.data.get('task_name'),
            'task_description': request.data.get('task_description')
        }
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)