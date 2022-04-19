import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FormPropsTextFields({ register }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
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
        <div>
          <InputLabel id="demo-simple-select-label">
            Tipo de Documento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="cc"
            label="Tipo de Documento"
            // onChange={handleChange}
            {...register("tipoDocumento", { required: true })}
          >
            <MenuItem value="cc">Cedula de Ciudadania</MenuItem>
            <MenuItem value="ce">Cedula de Extranjero</MenuItem>
            <MenuItem value="ti">Tarjeta de Identidad</MenuItem>
          </Select>
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Primer"
            defaultValue="Hello World"
            {...register("numeroDocumento", { required: true })}
          />
        </div>

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password", { required: true })}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          {...register("input3", { required: true })}
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
