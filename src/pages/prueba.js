import * as React from "react";
import Container from "../components/Container/Container";
import DropDown from "../components/Dropdown/Dropdown";

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
    </Container>
  );
};

export default Prueba;
