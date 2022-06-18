from django.shortcuts import render

# Render index template for react

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
