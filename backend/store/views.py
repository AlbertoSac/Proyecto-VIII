"""
from django.shortcuts import render
from .models import Producto

def index(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos': productos})
"""
from django.http import JsonResponse
from .models import Producto
from django.shortcuts import get_object_or_404

from django.http import JsonResponse
from .models import Producto
from django.shortcuts import get_object_or_404

def lista_productos_api(request, producto_id=None):
    if producto_id is not None:
        # Si se proporciona un producto_id, intenta obtener el producto correspondiente
        producto = get_object_or_404(Producto, pk=producto_id)
        # Aquí puedes hacer cualquier manipulación adicional que necesites con el objeto Producto
        data = {
            'id': producto.id,
            'nombre': producto.nombre,
            'descripcion': producto.descripcion,
            'precio': producto.precio,
            'imagen': producto.imagen.url if producto.imagen else None,
        }
        return JsonResponse(data)
    else:
        # Si no se proporciona un producto_id, devuelve la lista completa de productos
        productos = Producto.objects.all()
        data = []
        for producto in productos:
            data.append({
                'id': producto.id,
                'nombre': producto.nombre,
                'descripcion': producto.descripcion,
                'precio': producto.precio,
                'imagen': producto.imagen.url if producto.imagen else None,
            })
        return JsonResponse({'productos': data})
