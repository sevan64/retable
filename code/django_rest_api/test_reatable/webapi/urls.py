from django.urls import path

from .views import PoetList, PoetDetail, UserList, UserDetail


urlpatterns = [
    path('<int:pk>/', PoetDetail.as_view()),
    path('', PoetList.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
# urlpatterns = [
#     path('api/poet/', views.PoetListCreate.as_view() ),
# ]
