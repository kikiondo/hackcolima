import { firebaseAuth } from '../../data/'
import { firebaseApp } from '../../data/'

const auth = (email, password, user) => (
  firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
      .then(res => {
        createUserInDB (user)
      })
      .catch(err => console.log(err.message)) 
)

const createUserInDB = (user) => {
  let usersRef = firebaseApp.database().ref().child('users')
  usersRef.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    school: user.school
  })
  console(usersRef)
}

const createEmpleoInDB = (empleo) => {
  let empleoRef = firebaseApp.database().ref().child('empleos')
  empleoRef.push({
    nombre: empleo.nombre,
    empresa: empleo.empresa,
    escolaridad: empleo.escolaridad,
    pais: empleo.pais,
    ciudad: empleo.ciudad,
    direccion: empleo.direccion,
    telefono: empleo.telefono
  })
}

const getDatosInDB = (callback) =>{
  const db = firebaseApp.database();
  const refText = db.ref().child('empleos');

  return refText.on('value', callback);
    
    
}
const login = (email, password) => firebaseAuth().signInWithEmailAndPassword(email, password)

const logout = () => firebaseAuth().signOut()

const resetPassword = email => firebaseAuth().sendPasswordResetEmail(email)


export {
  auth,
  login,
  logout,
  resetPassword,
  createEmpleoInDB,
  getDatosInDB
}
