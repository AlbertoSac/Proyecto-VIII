from django.http import JsonResponse
from .models import Producto
from django.shortcuts import get_object_or_404

def lista_productos_api(request, producto_id=None):
    try:
        if producto_id is not None:
            # Si se proporciona un producto_id, intenta obtener el producto correspondiente
            producto = get_object_or_404(Producto, pk=producto_id)
            # Aquí puedes hacer cualquier manipulación adicional que necesites con el objeto Producto
            data = {
                'id': producto.id,
                'nombre': producto.nombre,
                'descripcion': producto.descripcion,
                'precio': str(producto.precio),  # Convertir a cadena para JSON
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
                    'precio': str(producto.precio),  # Convertir a cadena para JSON
                    'imagen': producto.imagen.url if producto.imagen else None,
                })
            return JsonResponse({'productos': data})
    except Exception as e:
        # Manejo genérico de excepciones
        return JsonResponse({'error': str(e)}, status=500)
