import * as React from "react";
import Container from "../../components/Container/Container";
import DropDown from "../../components/Dropdown/Dropdown";
import DropDownText from "../../components/CountriesSelect/CountriesSelect";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import BreadCrumb from "../../components/BreadCrumb/BreadCrump";
import Table from "../../components/Table/Table";
import "./prueba.css";
import Loader from "../../components/Loader/Loader";
import ModalComponent from "../../components/Modal/Modal";
import Tooltip from "../../components/ToolTip/Tooltip";
import {
  faWrench,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
var _ = require("lodash");

const valuesDrop = [
  {
    idPrueba: 1,
    text: "primero",
    disabled: true,
  },
  {
    idPrueba: 2,
    text: "segundo",
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
const colums = [
  {
    key: "primera",
    text: "primera",
  },
  {
    key: "segunda",
    text: "segunda",
  },
];

const data = [
  {
    primera: "valor1",
    segunda: "xvalor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
  {
    primera: "vvalor1",
    segunda: "valor2",
  },
];

const rowsToColor = [
  { id: "row-0", color: "red" }, //id de la fila (siempre es row-indiceData)
  { id: "row-3", color: "yellow" },
];
const columnsToColor = ["0", "1"];

const users = [
  { group: "editor", name: "Adam", age: 23 },
  { group: "admin", name: "John", age: 28 },
  { group: "editor", name: "William", age: 34 },
  { group: "admin", name: "Oliver", age: 28 },
  { group: "editor", name: "Javier", age: 22 },
  { group: "admin", name: "Exequiel", age: 30 },
  { group: "admin", name: "Exequiel", age: 25 },
  { group: "admin", name: "Exequiel", age: 25 },
  { group: "admin", name: "Exequiel", age: 29 },
  { group: "admin", name: "Exequiel", age: 20 },
  { group: "editor", name: "Joaquin", age: 15 },
  { group: "admin", name: "Carlos", age: 50 },
];

const Prueba = (props) => {
  const [value, setValue] = React.useState(2);
  const [modalProps, setModalProps] = React.useState({
    openModal: false,
    text: "",
    header: "Confirmacion",
    onConfirm: () => {},
  });

  const routes = [
    {
      path: "/pag",
      title: "pag",
    },
    {
      path: "/pag",
      title: "pag",
    },
  ];

  const viewDetail = (id) => {
    alert("Hola soy", id);
  };

  const buttons = [
    {
      key: "viewDetail",
      text: "Check",
      icon: faWrench,
      color: "success", //error, primary(por defecto)
      behaviour: viewDetail,
    },
  ];

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  //Tratamiento de listas
  React.useEffect(() => {
    let sorted = _.orderBy(users, ["name", "age"], ["asc", "desc"]);
    let grouping = _.groupBy(users, "age");
    let sumed = _.sumBy(users, "age");
    let uniq = _.uniqBy(users, "name");
  }, []);

  return (
    <Container>
      <h1>{props.test}</h1>
      <div name="BreadCrumb" style={{ margin: "2%" }}>
        <BreadCrumb currentRoute="Actual" routes={routes}></BreadCrumb>
      </div>
      <div name="Dropdown">
        <DropDown
          items={valuesDrop}
          value={value}
          label="Prueba"
          set={setValue}
          width="30%"
          NameId="idPrueba"
        ></DropDown>
        <DropDownText Id="id"></DropDownText>
      </div>
      <div name="Buttons" style={{ margin: "2%" }}>
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
      <div className="Pruebas_TextFields" style={{ margin: "2%" }}>
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
      <div name="Table">
        <Table
          idColumn="primera"
          columns={colums}
          data={data}
          width="70%"
          height="300px"
          striped
          rowsToColor={rowsToColor}
          columnsToColor={columnsToColor}
          iconButtons={buttons}
        ></Table>
      </div>
      <div name="Spinner">
        <Loader></Loader>
      </div>
      <div name="Modal">
        <ModalComponent
          open={modalProps.openModal}
          setModalProps={setModalProps}
          type={"confirmation"}
          header={modalProps.header}
          onConfirm={modalProps.onConfirm}
        >
          {modalProps.text}
        </ModalComponent>
      </div>
      <div name="ToolTip">
        <Tooltip type="icon" placement="top" title="TEST"></Tooltip>
      </div>
    </Container>
  );
};

Prueba.defaultProps = {
  test: "TEST",
};
export default Prueba;
