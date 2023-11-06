import Tareas_tris from "../modelos/modelo.tareas_tris.js";

// Obtenemos todas las tareas
export const Obtener_tareas = async (req, res) => {
  try {
    const tareas = await Tareas_tris.find({ user : req.user.id }).populate("usuario");
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Creamos la tarea 
export const Crear_tarea = async (req, res) => {
    try {
      const { dias_entrenamiento, description, hidratacion, dieta } = req.body;
      const nuevaTarea = new Tareas_tris({
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
  
  // Eliminamos la tarea
  export const Eliminar_tarea = async (req, res) => {
    try {
      const deletedTarea = await Tareas_tris.findByIdAndDelete(req.params.id);
      if (!deletedTarea)
        return res.status(404).json({ message: "Tarea no encontrada, no se elimina" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Actulizamos tarea
  export const actualizar_tareas = async (req, res) => {
    try {
      const { dias_entrenamiento, description, hidratacion, dieta } = req.body;
      const tareaActualizada = await Tareas_tris.findByIdAndUpdate(
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
      const tarea = await Tareas_tris.findById(req.params.id);
      if (!tarea) return res.status(404).json({ message: "Tarea not found" });
      return res.json(tarea);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };