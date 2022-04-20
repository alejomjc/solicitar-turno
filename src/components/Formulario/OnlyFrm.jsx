import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FormPropsTextFields({ register }) {
  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <InputLabel id="demo-simple-select-label">
            Tipo de Documento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="cc"
            label="Tipo de Documento"
            fullWidth
            variant="standard"
            // onChange={handleChange}
            {...register("tipoDocumento", { required: true })}
          >
            <MenuItem value="cc">Cedula de Ciudadania</MenuItem>
            <MenuItem value="ce">Cedula de Extranjero</MenuItem>
            <MenuItem value="ti">Tarjeta de Identidad</MenuItem>
          </Select>
        </div>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <TextField
            required
            variant="standard"
            type="number"
            id="outlined-required"
            label="Numero de documento"
            fullWidth
            {...register("cedula", { required: true })}
          />
        </div>

        <TextField
          label="Primer nombre"
          type="text"
          {...register("primerNombre", { required: true })}
        />
        <TextField
          label="Primer apellido"
          type="text"
          {...register("segundoNombre", { required: true })}
        />
        <TextField
          label="Primer apellido"
          type="text"
          {...register("primerApellido", { required: true })}
        />
        <TextField
          label="Segundo apellido"
          type="text"
          {...register("segundoApellido")}
        />
      </div>
    </Box>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
//
// export default function BasicSelect() {
//     const [age, setAge] = React.useState('');
//
//     const handleChange = (event: SelectChangeEvent) => {
//         setAge(event.target.value as string);
//     };
//
//     return (
//         <Box sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={age}
//                     label="Age"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }
