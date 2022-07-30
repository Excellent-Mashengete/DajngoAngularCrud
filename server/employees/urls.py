from django.urls import path
from . import views

urlpatterns=[

    #initialize server
    path('', views.getServer),

    #books api
    path('api/listbook', views.getBook),
    path('api/addbook', views.addBook),
    path('api/bookid/<int:pk>', views.getBookById),
    path('api/deletebook/<int:pk>', views.deleteBook),
    path('api/updatebook/<int:pk>', views.updatebook),

    #add new Author and Publisher
    path('api/addauth',views.addAuth),
    path('api/addpub',views.addPublish),
    
    #delete author
    path('api/deleteauth/<int:pk>',views.deleteAuth),
    
    #get user
    path('api/getauth',views.getAuthor),
]