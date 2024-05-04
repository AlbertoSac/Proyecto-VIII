from django.test import TestCase
from .models import Producto

class ViewsTestCase(TestCase):

    def setUp(self):
        # Creamos algunos productos para usar en las pruebas
        Producto.objects.create(nombre="Camiseta", descripcion="Una camiseta de algodón", precio=20.00)
        Producto.objects.create(nombre="Pantalón", descripcion="Un pantalón vaquero", precio=30.00)


    # Prueba para la vista lista_productos_api con un producto_id
    def test_lista_productos_api_con_id_valido(self):
        # Realizamos una solicitud GET a la vista lista_productos_api con un producto_id válido
        response = self.client.get('/api/productos/1/')
        # Verificamos que la solicitud haya sido exitosa (código de estado 200)
        self.assertEqual(response.status_code, 200)
        # Verificamos que el contenido de la respuesta sea un objeto JSON con la información del producto
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'id': 1, 'nombre': 'Camiseta', 'descripcion': 'Una camiseta de algodón', 'precio': '20.00', 'imagen': None})
