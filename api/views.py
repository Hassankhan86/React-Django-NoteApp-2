from django.http import request, response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Note
from .serializers import NoteSerializer ,UserSerializer
from api import serializers
# from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
# Create your views here.
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User



@api_view(['GET'])
def getRoutes(request):

  routes = [
    {
      'Endpoint': '/notes/',
      'method': 'GET',
      'body': None,
      'description': 'Returns an array of notes'
    },
    {
      'Endpoint': '/notes/id',
      'method': 'GET',
      'body': None,
      'description': 'Returns a single note object'
    },
    {
      'Endpoint': '/notes/create/',
      'method': 'POST',
      'body': {'body': ""},
      'description': 'Creates new note with data sent in post request'
    },
    {
      'Endpoint': '/notes/id/update/',
      'method': 'PUT',
      'body': {'body': ""},
      'description': 'Creates an existing note with data sent in post request'
    },
    {
      'Endpoint': '/notes/id/delete/',
      'method': 'DELETE',
      'body': None,
      'description': 'Deletes and exiting note'
    },
  ]
  return Response(routes)



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # authentication_classes = [TokenAuthentication, ]
    # permission_classes = [IsAuthenticated, ]
    # def get_object(self):
    #     pk = self.kwargs.get('pk')

    #     if pk == "current":
    #         return self.request.user

    #     return super(UserViewSet, self).get_object()


class NoteViewSet(viewsets.ModelViewSet):
  
    queryset = Note.objects.all().order_by('-updated')
    # print('Dataa ....',queryset)
    # useree = request.user
    # print('Useree ....',useree)

    serializer_class = NoteSerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE

# @api_view(['GET'])
# def getNotes(request):

#   notes = Note.objects.all().order_by('-updated')
#   serializer = NoteSerializer(notes,many=True)
#   authentication_classes = [TokenAuthentication, ]
#   permission_classes = [IsAuthenticated, ]
#   return Response(serializer.data,)
 
# @api_view(['GET'])
# def getNote(request,pk):

#   notes = Note.objects.get(id=pk)
#   serializer = NoteSerializer(notes,many=False)
#   return Response(serializer.data)


# @api_view(['POST'])
# def createNote(request):
#   data = request.data
#   note = Note.objects.create(
#       body=data['body']
#   )
#   serializer = NoteSerializer(note, many=False)
#   return Response(serializer.data)


# @api_view(['PUT'])
# def updateNote(request, pk):
#   data = request.data
#   note = Note.objects.get(id=pk)
#   serializer = NoteSerializer(instance=note, data=data)
#   if serializer.is_valid():
#       serializer.save()

#   return Response(serializer.data)


# @api_view(['DELETE'])
# def deleteNote(request, pk):
#   note = Note.objects.get(id=pk)
#   note.delete()
#   return Response('Note was deleted!')


