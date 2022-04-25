import * as React from "react";
import Container from "../components/Container/Container";
import DropDown from "../components/Dropdown/Dropdown";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const valuesDrop = [
  {
    idPrueba: 1,
    descripcion: "primero",
  },
  {
    idPrueba: 2,
    descripcion: "segundo",
  },
];

const styles = (theme) => ({
  tr: {
    background: "#f1f1f1",
    "&:hover": {
      background: "#f00",
    },
  },
});

const Prueba = () => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Container>
      <DropDown
        items={valuesDrop}
        value={value}
        label="Prueba"
        set={setValue}
        width="30%"
        NameId="idPrueba"
      ></DropDown>
      <div style={{ margin: "2%" }}>
        <Button
          sx={{ width: "500px", height: "100px" }}
          onClick={() => {
            alert("clicked");
          }}
        >
          Primary
        </Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="primary">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div style={{ margin: "2%" }}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </div>
    </Container>
  );
};

export default Prueba;
