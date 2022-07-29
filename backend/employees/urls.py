from django.urls import path
from . import views

urlpatterns=[
    path('list',views.getEmp),
    path('add',views.addEmp),
    path('listby/<int:pk>',views.getEmpByID),
    path('update/<int:pk>',views.empUpdate),
    path('delete/<int:pk>',views.empDelete),
]