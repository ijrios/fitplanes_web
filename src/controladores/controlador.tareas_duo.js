import Tareas_duo from "../modelos/modelo.tareas_duo.js";

// Obtenemos todas las tareas
export const obtener_tareas = async (req, res) => {
  try {
    const tareas = await Tareas_duo.find({ user : req.user.id }).populate("usuario");
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Creamos las tareas
export const crear_tarea = async (req, res) => {
    try {
      const { dias_entrenamiento, descripcion, hidratacion, dieta, peso, fecha } = req.body;
      const nuevaTarea = new Tareas_duo({
        dias_entrenamiento,
        descripcion,
        hidratacion,
        dieta,
        peso,
        fecha,
        usuario: req.user.id
      });
      const tareas_guardada = await nuevaTarea.save();
      res.json(tareas_guardada);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Eiminamos tareas segun id
  export const eliminar_tarea = async (req, res) => {
    try {
      const deletedTarea = await Tareas_duo.findByIdAndDelete(req.params.id);
      if (!deletedTarea)
        return res.status(404).json({ message: "Tarea no encontrada, no se elimina" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizamos tareas segun id
  export const actualizar_tareas = async (req, res) => {
    try {
      const { dias_entrenamiento, descripcion, hidratacion, dieta, peso } = req.body;
      const tareaActualizada = await Tareas_duo.findByIdAndUpdate(
        req.params.id,
        { dias_entrenamiento, descripcion, hidratacion, dieta, peso },
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
      const tarea = await Tareas_duo.findById(req.params.id);
      if (!tarea) return res.status(404).json({ message: "Tarea not found" });
      return res.json(tarea);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };