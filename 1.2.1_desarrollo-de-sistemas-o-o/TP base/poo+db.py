import sqlite3
from pathlib import Path

# CONFIGURACIÓN DE BASE DE DATOS
# Busca (o crea) el archivo turnos.db en la misma carpeta que este script
carpeta_actual = Path(__file__).parent
ruta_db = carpeta_actual / "turnos.db"

# CLASES DEL SISTEMA (POO)
class Cliente:
    def __init__(self, nombre, telefono):
        self.nombre = nombre
        self.telefono = telefono

class Tratamiento:
    def __init__(self, nombre, precio_base):
        self.nombre = nombre
        self.precio_base = precio_base

class Pago:
    def __init__(self, monto, metodo_pago, tipo):
        self.monto = monto
        self.metodo_pago = metodo_pago
        self.tipo = tipo

class Turno:
    def __init__(self, cliente, tratamiento, fecha, hora, pago_inicial):
        self.cliente = cliente
        self.tratamiento = tratamiento
        self.fecha = fecha
        self.hora = hora
        self.pagos = [pago_inicial] 

# FUNCIONES DE BASE DE DATOS Y SISTEMA
def inicializar_db():
    conexion = sqlite3.connect(ruta_db)
    cursor = conexion.cursor()
    
    # Armamos la query usando paréntesis y comillas
    query_crear_tabla = (
        "CREATE TABLE IF NOT EXISTS turnos ("
        "id INTEGER PRIMARY KEY AUTOINCREMENT, "
        "cliente_nombre TEXT, "
        "cliente_tel TEXT, "
        "tratamiento_nombre TEXT, "
        "tratamiento_precio INTEGER, "
        "fecha TEXT, "
        "hora TEXT, "
        "senia INTEGER"
        ")"
    )
    
    # Ejecutamos la variable
    cursor.execute(query_crear_tabla)
    
    conexion.commit()
    conexion.close()

def mostrar_agenda():
    print("\n")
    print("AGENDA DE TURNOS")
    print("="*40)
    
    conexion = sqlite3.connect(ruta_db)
    cursor = conexion.cursor()
    
    cursor.execute('SELECT * FROM turnos ORDER BY fecha ASC, hora ASC')
    turnos = cursor.fetchall()
    
    if not turnos:
        print("No hay turnos registrados en el sistema.")
    else:
        for id_turno, nombre, tel, trat_nombre, trat_precio, fecha, hora, senia in turnos:
            print(f"[{fecha} | {hora} hs] {nombre} - {trat_nombre} (Seña: ${senia})")
            
    print("="*40 + "\n")
    conexion.close()

# 2. SQLITE: Extraemos los datos de los objetos y los guardamos
def guardar_turno_en_db(turno):
    """Recibe un objeto Turno y lo inserta en la base de datos SQLite"""
    conexion = sqlite3.connect(ruta_db)
    cursor = conexion.cursor()
    
    query_insertar = (
        "INSERT INTO turnos (cliente_nombre, cliente_tel, tratamiento_nombre, tratamiento_precio, fecha, hora, senia) "
        "VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
    
    # Usamos los atributos del objeto directamente en los parámetros
    cursor.execute(query_insertar, (
        turno.cliente.nombre, 
        turno.cliente.telefono, 
        turno.tratamiento.nombre, 
        turno.tratamiento.precio_base, 
        turno.fecha, 
        turno.hora, 
        turno.pagos[0].monto
    ))
    
    conexion.commit()
    conexion.close()
    
    print("\nTurno guardado exitosamente en la base de datos.")

def crear_turno_interactivo():
    print("\n--- CARGAR NUEVO TURNO ---")
    nombre = input("Nombre del cliente: ")
    tel = input("Teléfono: ")
    
    opcion_trat = ""
    while opcion_trat not in ["1", "2", "3"]:
        print("\nTratamientos disponibles:")
        print("1. Limpieza Facial ($15.000)")
        print("2. Lifting de Pestañas ($12.000)")
        print("3. Masaje Descontracturante ($18.000)")
        opcion_trat = input("Seleccione el tratamiento (1/2/3): ")
    
        if opcion_trat == "1":
            trat_nombre = "Limpieza Facial"
            trat_precio = 15000
        elif opcion_trat == "2":
            trat_nombre = "Lifting de Pestañas"
            trat_precio = 12000
        elif opcion_trat == "3":
            trat_nombre = "Masaje Descontracturante"
            trat_precio = 18000
        else:
            print("\nHa ingresado una opción incorrecta, intente nuevamente.")
        
    fecha = input("\nFecha (Ej: 2026-07-02): ")
    hora = input("Hora (Ej: 16:30): ")
    monto_senia = int(input("Monto de la seña abonada $: "))
    
    # Ensamblamos los objetos
    cliente_nuevo = Cliente(nombre, tel)
    tratamiento_nuevo = Tratamiento(trat_nombre, trat_precio)
    pago_nuevo = Pago(monto_senia, "Efectivo", "Seña")
    
    turno_nuevo = Turno(cliente_nuevo, tratamiento_nuevo, fecha, hora, pago_nuevo)
    
    guardar_turno_en_db(turno_nuevo)
    
    print("\nTurno guardado exitosamente en la base de datos.")

def iniciar_sistema():
    # Nos aseguramos de que la base y la tabla existan antes de mostrar el menú
    inicializar_db()
    
    while True:
        print("Seleccione una opción para continuar:")
        print("1. Ver Agenda de Turnos")
        print("2. Agregar Nuevo Turno")
        print("3. Salir")
        
        opcion = input("Ingrese una opción: ")
        
        if opcion == "1":
            mostrar_agenda()
        elif opcion == "2":
            crear_turno_interactivo()
        elif opcion == "3":
            print("\nCerrando sistema...")
            break
        else:
            print("\nOpción inválida. Intente nuevamente.\n")

# Punto de entrada del programa
if __name__ == "__main__":
    iniciar_sistema()