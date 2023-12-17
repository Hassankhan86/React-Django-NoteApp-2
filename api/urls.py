from django.urls import path
from . import views
from rest_framework import routers
from .views import UserViewSet ,NoteViewSet
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('notes', NoteViewSet)



urlpatterns = [
  path('', include(router.urls)),

  # path('', views.getRoutes, name="routes"),
  # path('notes/', views.getNotes, name="notes"),
  # path('notes/create/', views.createNote, name="create-note"),
  # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
  # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),

  # path('notes/<str:pk>/', views.getNote, name="note"),


]