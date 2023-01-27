from django.shortcuts import render

def index(request):
    return render(request, 'reactapp/templates/frontend/index.html')




    