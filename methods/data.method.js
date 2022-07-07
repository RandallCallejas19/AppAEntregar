import { getDatabase, ref, set } from "firebase/database"
import db from "../database/firebase"

/** Funcion inserta datos  */
const writeUserData = async ({ name, email, phone }) => new Promise(async (res, rej) => {
  try {
    // const db = getDatabase();
    const ref = ref(db, 'users/' + email)

    const response = await set(ref, {
      username: name,
      email: email,
      phone
    });

    console.log(response)

    resolve(response)

  } catch (error) {
    alert(error.toString())
  }

  // }
  // export async function writeUserData({ name, email, phone }) {
})