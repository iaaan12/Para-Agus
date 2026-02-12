import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
async function guardarVisita() {
  try {
    await addDoc(collection(db, "visitas"), {
      fecha: new Date(),
      origen: "web"
    });
    console.log("Visita guardada");
  } catch (error) {
    console.error("Error guardando visita:", error);
  }
}

guardarVisita();
