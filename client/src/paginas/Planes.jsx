import React from 'react';
import PlanCard from './PlanCard'; 

const Planes = () => (
  <div className="flex justify-center gap-4">
    <PlanCard
      title="Plan 1: Perder Grasa y Tonificar"
      training={[
        'Días de entrenamiento: 4-5 días a la semana.',
        'Tipo de ejercicio: Una combinación de entrenamiento de fuerza y cardio.',
        'Ejercicios de fuerza: Sentadillas, flexiones, press de banca, dominadas, peso muerto.',
        'Ejercicio cardiovascular: Carrera, ciclismo, saltar la cuerda.',
      ]}
      nutrition={[
        'Consumir una dieta rica en proteínas magras, como pollo, pavo, pescado y legumbres.',
        'Limitar la ingesta de carbohidratos refinados y azúcares procesados.',
        'Incluir una variedad de frutas, verduras y granos enteros en tu dieta.',
        'Mantener el control de las porciones y evitar el exceso de calorías.',
        'Beber suficiente agua para mantenerse hidratado.',
      ]}
    />

    <PlanCard
      title="Plan 2: Ganar Músculo"
      training={[
        'Días de entrenamiento: 4-6 días a la semana.',
        'Tipo de ejercicio: Principalmente entrenamiento de fuerza.',
        'Rutina dividida: Dedicar días a grupos musculares específicos.',
        'Ejercicios de fuerza: Levantamiento de pesas, máquinas de gimnasio, ejercicios con pesas rusas.',
      ]}
      nutrition={[
        'Aumentar la ingesta de proteínas para apoyar el crecimiento muscular.',
        'Consumir carbohidratos complejos para obtener energía.',
        'Incluir grasas saludables, como aguacates, nueces y aceite de oliva.',
        'Comer comidas equilibradas a lo largo del día para mantener un aporte constante de nutrientes.',
        'Realizar un seguimiento de las calorías y macro nutrientes para asegurarse de estar en superávit calórico (consumiendo más calorías de las que se queman).',
      ]}
    />

    <PlanCard
      title="Plan 3: Mantenimiento y Bienestar General"
      training={[
        'Días de entrenamiento: 3-4 días a la semana.',
        'Tipo de ejercicio: Combinación de cardio, ejercicios de fuerza y flexibilidad.',
        'Ejercicios de fuerza: Ejercicios de cuerpo completo con pesas ligeras o el peso corporal.',
        'Cardio: Caminar, nadar, andar en bicicleta.',
        'Yoga o estiramientos para mejorar la flexibilidad.',
      ]}
      nutrition={[
        'Seguir una dieta equilibrada con una variedad de alimentos.',
        'Controlar las porciones para mantener un peso corporal saludable.',
        'Consumir alimentos ricos en fibra, como granos enteros, frutas y verduras.',
        'Evitar el exceso de azúcares y alimentos ultraprocesados.',
        'Beber suficiente agua y limitar el consumo de alcohol.',
      ]}
    />
  </div>
);

export default Planes;
