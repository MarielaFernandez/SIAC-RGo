import gql from 'graphql-tag';

export const NUEVO_USUARIO = gql`

mutation crearUsuario($input : UsuarioInput){
      createUser(input : $input){
        document
        name
        email
        rol
      }
}
`;

export const ACTUALIZAR_USUARIO = gql`
  mutation actualizarUsuario($input:UsuarioInput){
  actualizarUsuario(input:$input){
    document
    name    
    age
    email
    rol
  }
}
`;

export const CAMBIAR_ESTADO_USUARIO = gql`
    mutation cambiarEstadoUsuario($estado:CambiarEstadoInput){
      cambiarEstadoUsuario(estado:$estado)
    }                              

`;



export const NUEVA_FORMACION_ACADEMICA=gql`

mutation inse
rtarFormacionAcademica($input: FormacionAcademicaInput){
  insertarFormacionAcademica(input: $input){
    institucion
    observaciones
    fecha
  }
}

`;

export const ACTUALIZAR_FORMACION_ACADEMICA=gql`

mutation actualizarFormacionAcademica($input: FormacionAcademicaInput){
  actualizarFormacionAcademica(input: $input){
    institucion
    titulo
    fecha
  }
}

`;

export const ELIMINAR_FORMACION_ACADEMICA = gql`
  mutation eliminarFormacionAcademica($id:ID!){
    eliminarFormacionAcademica(id:$id)
  }
`;

export const INSERTAR_EXPERIENCIA_LABORAL=gql`

mutation insertarExperienciaLaboral($input: ExperienciaLaboralInput){
  insertarExperienciaLaboral(input: $input){
    puesto
    empresa
    responsabilidades
  }
}

`;

export const ACTUALIZAR_EXPERIENCIA_LABORAL=gql`

mutation actualizarExperienciaLaboral($input: ExperienciaLaboralInput){
  actualizarExperienciaLaboral(input: $input){
    empresa
    fechaFinal
  }
}

`;

export const DESACTIVAR_EXPERIENCIA_LABORAL= gql`

mutation desactivarExperienciaLaboral($input: ExperienciaLaboralInput){
  desactivarExperinciaLaboral(input: $input)
}

`;

export const INSERTAR_PRODUCCION_INTELECTUAL=gql`

mutation insertarProduccionIntelectual($input: ProduccionIntelectualInput){
  insertarProduccionIntelectual(input: $input){
    categoria
    nombreProduccion
    tema
    lugarPresentacion
  }
}

`;

export const ACTULIZAR_PRODUCCION_INTELECTUAL=gql`

mutation actualizarProduccionIntelectual($input: ProduccionIntelectualInput){
  actualizarProduccionIntelectual(input: $input){
    categoria
  }
}

`;

export const DESACTIVAR_PRODUCCION_INTELECTUAL=gql`

mutation desactivarProduccionIntelectual($input: ProduccionIntelectualInput){
  desactivarProduccionIntelectual(input: $input)
}
`;

export const NUEVA_LENGUA = gql `
  mutation insertarLengua($input : LenguaInput){
    insertarLengua(input:$input){
      id
      idioma
      idUsuario
      lectura
      escritura
      conversacion
      estado
    }
  }
`;

export const ACTUALIZAR_LENGUA = gql `
  mutation actualizarLengua($input:LenguaInput){
    actualizarLengua(input:$input){
      id
      idUsuario
      idioma
      lectura
      conversacion
      escritura
      tipo
      estado
    }
  }
`;

export const ELIMINAR_LENGUA = gql `
  mutation eliminarLengua($id: ID){
    eliminarLengua(id:$id)
  }
`;

export const INSERTAR_PPAA = gql`

mutation insertarPpaa($input: PpaaInput){
  insertarPpaa(input: $input){
    nombreActividad
    fechaActividad
    tipoActividad
  }
}

`;

export const ACTUALIZAR_PPAA = gql`

mutation actualizarPpaa($input: PpaaInput){
  actualizarPpaa(input: $input){
    nombreActividad
    fechaActividad
    tipoActividad
  }
}

`;

export const DESACTIVAR_PPAA= gql`

mutation desactivarPpaa($input: PpaaInput){
  desactivarPpaa(input: $input)
}

`;

export const INSERTAR_TRABAJO_FINAL = gql`
  mutation insertarTrabajoFinal($input:TrabajoFinalInput){
    insertarTrabajoFinal(input:$input){
      id
      
      estado
      
    }
  }

`;

export const ACTUALIZAR_TRABAJO_FINAL = gql `
mutation actualizarTrabajoFinal($input:TrabajoFinalInput){
  actualizarTrabajoFinal(input:$input){
    idUsuario
    
    estado
  }
}
`;

export const CAMBIAR_ESTADO_TRABAJO_FINAL = gql `

mutation cambiarEstadoTrabajoFinal($input: CambiarEstadoInput){
  cambiarEstadoTrabajoFinal(input:$input)
}
`;