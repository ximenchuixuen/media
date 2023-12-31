// Copyright 2023 shawn
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/api/isLoggedIn")
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data.isLoggedIn);
      });
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Welcome to CLK's Load File Website</Navbar.Brand>
      <div style={{ position: "absolute", right: 0, display: "flex"}}>
      <Nav className="mr-auto">
        {isLoggedIn ? (
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink href="/login" >Login</NavLink>
          </NavItem>
        )}
      </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
