from django.urls import path

from .views import PoetList, PoetDetail, UserList, UserDetail


urlpatterns = [
    path('poet/<int:pk>/', PoetDetail.as_view()),
    path('poet/', PoetList.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
# urlpatterns = [
#     path('api/poet/', views.PoetListCreate.as_view() ),
# ]
