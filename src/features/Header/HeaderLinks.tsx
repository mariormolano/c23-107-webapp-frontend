interface HeaderTypes {
  to: string;
  text: string;
  extraClass?: string;
}

const Headerlinks = (loggedIn: boolean): HeaderTypes[] => loggedIn
   ? [
       { to: '/profile', text: 'Ir al perfil' },
       { to: '/create-recipe', text: 'Crear Receta' },
     ]
   : [
       { to: '/register', text: 'Registro', extraClass: 'bg-azulOscuro text-white' },
       { to: '/login', text: 'Iniciar Sesión', extraClass: 'bg-celesteClaro text-black border-2 border-azulOscuro' },
     ];

export default Headerlinks;
