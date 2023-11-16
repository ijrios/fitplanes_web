import { useForm } from "react-hook-form";

function Registro() {
    const { signup, errors: registerErrors, isAuthenticated } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(registerSchema),
    });
    const navigate = useNavigate();
  
    const [selectedPlan, setSelectedPlan] = React.useState([]);

    const handleCheckboxChange = (plan) => {
      if (selectedPlan.includes(plan)) {
        setSelectedPlan(selectedPlan.filter((selected) => selected !== plan));
      } else {
        setSelectedPlan([...selectedPlan, plan]);
      }
    };

    const onSubmit = async (value) => {
      await signup(value);
    };
  
    useEffect(() => {
      if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);
  
    return (
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <Card>
          {registerErrors.map((error, i) => (
            <Message message={error} key={i} />
          ))}
          <h1 className="text-3xl font-bold">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="nombre">Nombre completo :</Label>
            <Input
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre completo"
              {...register("nombre")}
              autoFocus
            />
            {errors.nombre?.message && (
              <p className="text-red-500">{errors.nombre?.message}</p>
            )}

            <Label htmlFor="usuario">Usuario:</Label>
            <Input
              type="text"
              name="usuario"
              placeholder="Escribe tu usario de acceso"
              {...register("usuario")}
              autoFocus
            />
            {errors.usuario?.message && (
              <p className="text-red-500">{errors.usuario?.message}</p>
            )} 
            
            <Label htmlFor="plan">Plan:</Label>
          <div>
            <input
              type="checkbox"
              id="planUnus"
              name="plan"
              value="Plan 1"
              checked={selectedPlan.includes('Plan 1')}
              onChange={() => handleCheckboxChange('Plan 1')}
            />
            <label htmlFor="planUnus">Plan unus</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="planDuo"
              name="plan"
              value="Plan 2"
              checked={selectedPlan.includes('Plan 2')}
              onChange={() => handleCheckboxChange('Plan 2')}
            />
            <label htmlFor="planDuo">Plan duo</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="planTris"
              name="plan"
              value="Plan 3"
              checked={selectedPlan.includes('Plan 3')}
              onChange={() => handleCheckboxChange('Plan 3')}
            />
            <label htmlFor="planTris">Plan tris</label>
            {...register("plan", { required: true })}
            </div>
  
            <Label htmlFor="correo">Correo Electrónico:</Label>
            <Input
              name="correo"
              placeholder="youremail@domain.tld"
              {...register("correo")}
            />
            {errors.correo?.message && (
              <p className="text-red-500">{errors.correo?.message}</p>
            )}
  
            <Label htmlFor="contraseña">Contraseña:</Label>
            <Input
              type="contraseña"
              name="contraseña"
              placeholder="********"
              {...register("contraseña")}
            />
            {errors.contraseña?.message && (
              <p className="text-red-500">{errors.contraseña?.message}</p>
            )}
  
            <Label htmlFor="confirmarContraseña">Confirmar Contraseña:</Label>
            <Input
              type="contraseña"
              name="confirmarContraseña"
              placeholder="********"
              {...register("confirmarContraseña")}
            />
            {errors.confirmarContraseña?.message && (
              <p className="text-red-500">{errors.confirmarContraseña?.message}</p>
            )}
            <Button>Enviar</Button>
          </form>
          <p>
            ¿Ya tienes una cuenta?
            <Link className="text-sky-500" to="/login">
              Acceder
            </Link>
          </p>
        </Card>
      </div>
    );
  }

export default Registro