from django.contrib import admin
from .models import Stix

class StixAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')

# Register your models here.

admin.site.register(Stix, StixAdmin)

