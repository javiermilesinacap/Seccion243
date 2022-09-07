#Este es el primer programa
#Esto es un comentario
print("Hola Mundo")
#variables: Caracteres, enteros, decimales, 
nombre ="Juan"
apellido = 'Pérez'
edad = 22
estatura = 1.66
nota1,nota2,nota3, estado = 4,5,6, "Aprobado"
print(estado) #Imprime una variable
print(estado[0])
print(estado[0:3])
print(estado[5:])
print(estado * 5)
print(estado+"concatenando texto")
print(estado+":"+str(nota1))
#listas
lista = ['abc','def',123,22.3,555,["5,0","5,1","5,2","5,3"]]
lista[2]=55.6
print(lista)
print(lista[2])
print(lista[1:3])
print(lista[5][1])
#tuplas
tupla = ('abc','def',123,22.3,555)
#tupla[2]=55.6
print(tupla)
print(tupla[2])
print(tupla[1:3])
#diccionarios
persona = {'nombre':'juan', 'apellido':'perez', 'edad':22}
print(persona)
print(persona['nombre'])