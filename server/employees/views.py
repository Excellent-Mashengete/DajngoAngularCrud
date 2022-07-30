from os import stat
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from yaml import serialize
from .models import *
from .serializers import AuthorSerializer, BookSerializer, PublisherSerializer 

# Create your views here.

@api_view(['GET'])
def getServer(request):
    return Response("Sever Initialized and Online. Ready to take OFF!", status=status.HTTP_200_OK)

#get all books
@api_view(['GET'])
def getBook(request):
    book = BkBook.objects.all()
    serializer = BookSerializer(book, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)

#get books by id
@api_view(['GET'])
def getBookById(request, pk):
    book =BkBook .objects.get(id=pk)
    serializer = BookSerializer(book, many = False)
    return Response(serializer.data, status=status.HTTP_200_OK)

#post new book
@api_view(['POST'])
def addBook(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#update book by id
@api_view(['PUT'])
def updatebook(request, pk):
    book = BkBook.objects.get(id=pk)
    serializer = BookSerializer(instance=book, data=request.data, many = False)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#delete book by id
@api_view(['DELETE'])
def deleteBook(request,pk):
    emp = BkBook.objects.get(empid=pk)
    emp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#post new author
@api_view(['POST'])
def addAuth(request):
    serializer = AuthorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#post new publisher
@api_view(['POST'])
def addPublish(request):
    serializer = PublisherSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#delete book by id
@api_view(['DELETE'])
def deleteBook(request,pk):
    emp = BkPublisher.objects.get(pubId=pk)
    emp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#delete book by id
@api_view(['DELETE'])
def deleteAuth(request,pk):
    emp = BkAuthor.objects.get(authorid=pk)
    emp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def getAuthor(request):
    book = BkAuthor.objects.all()
    serializer = AuthorSerializer(book, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)
