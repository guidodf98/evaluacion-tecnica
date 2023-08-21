# Evaluación técnica
Evaluación Técnica Guido Di Fiore

## API ENDPOINTS

- [Evaluación técnica](#evaluación-técnica)
  - [API ENDPOINTS](#api-endpoints)
    - [Personas](#personas)
      - [Listar Personas](#listar-personas)
      - [Crear Persona](#crear-persona)
      - [Mostrar Persona](#mostrar-persona)
      - [Actualizar Persona](#actualizar-persona)
      - [Eliminar Persona](#eliminar-persona)
    - [Cursos](#cursos)
      - [Listar Cursos](#listar-cursos)
      - [Crear Curso](#crear-curso)
      - [Mostrar Curso](#mostrar-curso)
      - [Actualizar Curso](#actualizar-curso)
      - [Eliminar Curso](#eliminar-curso)
      - [Inscribir Persona en Curso](#inscribir-persona-en-curso)
      - [Listar Cursos con Personas](#listar-cursos-con-personas)
      - [Listar Últimos Cursos](#listar-últimos-cursos)
    - [Categorias](#categorias)
      - [Listar Categorías](#listar-categorías)
      - [Crear Categoría](#crear-categoría)
      - [Mostrar Categoría](#mostrar-categoría)
      - [Actualizar Categoría](#actualizar-categoría)
      - [Eliminar Categoría](#eliminar-categoría)

### Personas

#### Listar Personas
Descripción: Retorna una colección de todas las personas registradas.
Ruta: GET /personas

#### Crear Persona
- Descripción: Crea una nueva persona y la agrega a la base de datos.
- Ruta: POST /persona
- Body: 
```json5
{
  "nombre": "Nombre de la persona",
  "apellido": "Apellido de la persona",
  "genero": "masculino", // Opciones: "masculino", "femenino", "otro"
  "edad": 30,
  "dni": 12345678
}
```

#### Mostrar Persona
- Descripción: Muestra los detalles de la persona con el ID especificado.
- Ruta: GET /persona/{id}
- Parámetros: {id} - ID de la persona a mostrar.

#### Actualizar Persona
- Descripción: Actualiza la información de la persona con el ID especificado.
- Ruta: PUT /persona/{id}
- Parámetros: {id} - ID de la persona a actualizar.
- Body: 
```json5
{
  "nombre": "Nuevo nombre",
  "apellido": "Nuevo apellido",
  "genero": "femenino", // Opciones: "masculino", "femenino", "otro"
  "edad": 35,
  "dni": 87654321
}
```

#### Eliminar Persona
- Descripción: Elimina la persona con el ID especificado de la base de datos.
- Ruta: DELETE /persona/{id}
- Parámetros: {id} - ID de la persona a eliminar.


### Cursos

#### Listar Cursos
- Descripción: Retorna una colección de todos los cursos registrados.
- Ruta: GET /cursos

#### Crear Curso
- Descripción: Crea un nuevo curso y lo agrega a la base de datos.
- Ruta: POST /curso
- Body: 
```json5
{
  "nombre": "Nombre del curso",
  "descripcion": "Descripción del curso",
  "categoria_id": 1 // ID de la categoría a la que pertenece el curso
}
```

#### Mostrar Curso
- Descripción: Muestra los detalles del curso con el ID especificado.
- Ruta: GET /curso/{id}
- Parámetros: {id} - ID del curso a mostrar.

#### Actualizar Curso
- Descripción: Actualiza la información del curso con el ID especificado.
- Ruta: PUT /curso/{id}
- Parámetros: {id} - ID del curso a actualizar.
- Body: 
```json5
{
  "nombre": "Nuevo nombre del curso",
  "descripcion": "Nueva descripción del curso",
  "categoria_id": 2 // ID de la nueva categoría del curso
}
```

#### Eliminar Curso
- Descripción: Elimina el curso con el ID especificado de la base de datos.
- Ruta: DELETE /curso/{id}
- Parámetros: {id} - ID del curso a eliminar.

#### Inscribir Persona en Curso
- Descripción: Registra una persona en un curso específico.
- Ruta: POST /curso/{idCurso}/anotar/{idPersona}
- Parámetros: {idCurso} - ID del curso en el que se inscribirá la persona. 
            {idPersona} - ID de la persona a inscribir.

#### Listar Cursos con Personas
- Descripción: Retorna una colección de cursos con las personas inscritas en cada uno.
- Ruta: GET /cursos/personas

#### Listar Últimos Cursos
- Descripción: Retorna una colección de los últimos cursos agregados (cantidad específica).
- Ruta: GET /cursos/ultimos/{cant}
- Parámetros: {cant} - Cantidad de cursos a mostrar.


### Categorias

#### Listar Categorías
- Descripción: Retorna una colección de todas las categorías registradas.
- Ruta: GET /categorias

#### Crear Categoría
- Descripción: Crea una nueva categoría y la agrega a la base de datos.
- Ruta: POST /categoria
- Body: 
```json5
{
  "nombre": "Nombre de la categoría"
}
```

#### Mostrar Categoría
- Descripción: Muestra los detalles de la categoría con el ID especificado.
- Ruta: GET /categoria/{id}
- Parámetros: {id} - ID de la categoría a mostrar.

#### Actualizar Categoría
- Descripción: Actualiza la información de la categoría con el ID especificado.
- Ruta: PUT /categoria/{id}
- Parámetros: {id} - ID de la categoría a actualizar.
- Body: 
```json5
{
  "nombre": "Nuevo nombre de la categoría"
}
```

#### Eliminar Categoría
- Descripción: Elimina la categoría con el ID especificado de la base de datos.
- Ruta: DELETE /categoria/{id}
- Parámetros: {id} - ID de la categoría a eliminar.