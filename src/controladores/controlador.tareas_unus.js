import Tareas_unus from "../modelos/modelo.tareas_unus.js";

// Obtenemos todas las tareas
export const obtener_tareas = async (req, res) => {
  try {
    const tareas = await Tareas_unus.find({ user : req.user.id }).populate("usuario");
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Creamos tareas
export const crear_tarea = async (req, res) => {
    try {
      const { dias_entrenamiento, description, hidratacion, dieta } = req.body;
      const nuevaTarea = new Tareas_unus({
        dias_entrenamiento,
        description,
        hidratacion,
        dieta,
        usuario: req.user.id,
      });
      await nuevaTarea.save();
      res.json(nuevaTarea);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Eliminamos las tareas individuales segun id
  export const eliminar_tarea = async (req, res) => {
    try {
      const deletedTarea = await Tareas_unus.findByIdAndDelete(req.params.id);
      if (!deletedTarea)
        return res.status(404).json({ message: "Tarea no encontrada, no se elimina" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizamos las tareas individuales segun id
  export const actualizar_tareas = async (req, res) => {
    try {
      const { dias_entrenamiento, description, hidratacion, dieta } = req.body;
      const tareaActualizada = await Tareas_unus.findByIdAndUpdate(
        req.params.id,
        { dias_entrenamiento, description, hidratacion, dieta },
        { new: true }
      );
      return res.json(tareaActualizada);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Obtenemos la tarea individual segun id
  export const obtener_tarea = async (req, res) => {
    try {
      const tarea = await Tareas_unus.findById(req.params.id);
      if (!tarea) return res.status(404).json({ message: "Tarea not found" });
      return res.json(tarea);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
