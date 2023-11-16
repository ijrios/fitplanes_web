import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-80 bg-zinc-700 text-white px-2 py-2 rounded-md"
    style={{ fontSize: "14px" }} // Ajusta el tamaño de la fuente según sea necesario
  />
));
