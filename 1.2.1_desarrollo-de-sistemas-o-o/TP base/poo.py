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

    def mostrar_resumen(self):
        senia = self.pagos[0].monto if self.pagos else 0
        return f"[{self.fecha} | {self.hora} hs] {self.cliente.nombre} - {self.tratamiento.nombre} (Seña: ${senia})"


# SIMULADOR DE BASE DE DATOS Y SISTEMA
base_de_datos_turnos = []

def cargar_datos_de_prueba():
    turnos_prueba = [
        Turno(
            Cliente("Marta Lopez", "1144556677"),
            Tratamiento("Limpieza Facial", 15000),
            "2026-06-30",
            "15:00",
            Pago(5000, "Transferencia", "Seña")
        ),
        Turno(
            Cliente("Julia Gomez", "1122334455"),
            Tratamiento("Lifting de Pestañas", 12000),
            "2026-07-01",
            "10:30",
            Pago(3000, "Efectivo", "Seña")
        ),
        Turno(
            Cliente("Ana Gómez", "1199887766"),
            Tratamiento("Masaje Descontracturante", 18000),
            "2026-07-01",
            "14:00",
            Pago(6000, "Transferencia", "Seña")
        ),
        Turno(
            Cliente("Carla Rodríguez", "1166677788"),
            Tratamiento("Limpieza Facial", 15000),
            "2026-07-02",
            "09:00",
            Pago(5000, "Mercado Pago", "Seña")
        )
    ]

    base_de_datos_turnos.extend(turnos_prueba)

def mostrar_agenda():
    print("\n")
    print("AGENDA DE TURNOS")
    print("="*40)
    
    if not base_de_datos_turnos:
        print("No hay turnos registrados en el sistema.")
    else:
        for turno in base_de_datos_turnos:
            print(turno.mostrar_resumen())
    print("="*40 + "\n")

def crear_turno_interactivo():
    print("\n--- CARGAR NUEVO TURNO ---")
    nombre = input("Nombre del cliente: ")
    tel = input("Teléfono: ")
    
    print("\nTratamientos disponibles:")
    print("1. Limpieza Facial ($15.000)")
    print("2. Lifting de Pestañas ($12.000)")
    print("3. Masaje Descontracturante ($18.000)")
    opcion_trat = input("Seleccione el tratamiento (1/2/3): ")
    
    if opcion_trat == "1":
        trat = Tratamiento("Limpieza Facial", 15000)
    elif opcion_trat == "2":
        trat = Tratamiento("Lifting de Pestañas", 12000)
    else:
        trat = Tratamiento("Masaje Descontracturante", 18000)
        
    fecha = input("\nFecha (Ej: 2026-07-02): ")
    hora = input("Hora (Ej: 16:30): ")
    monto_senia = float(input("Monto de la seña abonada $: "))
    
    # Se instancian los objetos restantes
    cli = Cliente(nombre, tel)
    pago = Pago(monto_senia, "Efectivo", "Seña")
    
    # Se ensambla el turno y se guarda
    nuevo_turno = Turno(cli, trat, fecha, hora, pago)
    base_de_datos_turnos.append(nuevo_turno)
    base_de_datos_turnos.sort(key=lambda t: (t.fecha, t.hora))
    
    print("\nTurno guardado exitosamente.")

def iniciar_sistema():
    cargar_datos_de_prueba()
    
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