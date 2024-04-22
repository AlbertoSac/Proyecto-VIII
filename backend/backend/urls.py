from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from store import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/productos/', views.lista_productos_api, name='lista_productos_api'),
        path('api/productos/<int:producto_id>/', views.lista_productos_api, name='detalle_producto_api'),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
