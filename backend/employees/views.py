from os import stat
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from yaml import serialize
from .models import *
from .serializers import EmployeeSerializer

# Create your views here.
@api_view(['GET'])
def getEmp(request):
    emp = Employee.objects.all()
    serializer = EmployeeSerializer(emp, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getEmpByID(request, pk):
    emp = Employee.objects.get(empid=pk)
    serializer = EmployeeSerializer(emp, many = False)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def addEmp(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def empUpdate(request, pk):
    emp = Employee.objects.get(empid=pk)
    serializer = EmployeeSerializer(instance=emp, data=request.data, many = False)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def empDelete(request,pk):
    emp = Employee.objects.get(empid=pk)
    emp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

