import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Actual from "../../screens/actual";
import Mantenimiento from "../../screens/mantenimiento";
import Total from "../../screens/total";

const Navbar = () => {
  return (
    <Router>
      <div>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <ReactBootStrap.Navbar.Brand>
            Recopilación de datos
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link as={Link} to={"/actual"}>
                Datos Actuales
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to={"/total"}>
                Datos totales
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to={"/mantenimiento"}>
                Mantenimiento
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/actual">
            <Actual />
          </Route>
          <Route path="/total">
            <Total />
          </Route>
          <Route path="/mantenimiento">
            <Mantenimiento />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
