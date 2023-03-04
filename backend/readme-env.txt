el archivo .env sirve para crear variables de entorno, esto crea variables en el sistema operativo
luego si se cambia el proyecto de pc o de server no va a funcionar a menos que tenga esas mismas variables
de entorno, esto para evitar dar datos de conexion a bd, contraseñas de bd y demas como codigo publico

una vez se ha creado la variable se usa el modulo instalado dotenv, para ello en el index.js antes de que 
empiece toda la aplicacion y todas las partes se va a requerir ese modulo dotenv para que inicie todas las
variables de entorno antes de que inicie toda la app y asi puedan estar todas las variables listas para 
usarse

Este archivo .env nunca se debe subir a github ni a ningun repositorio publico solo se debe almacenar en 
el server donde este alojado el proyecto