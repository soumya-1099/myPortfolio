"use client";
import Link from "next/link";
import React from "react";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  List,
  Button,
  Box,
} from "@mui/material";
import hamburgerIcon from "../images/hamburgerMenu.svg";
import Image from "next/image";
const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Projects", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <header className="h-20 w-full px-4 shadow-lg shadow-teal-950 fixed top-0 left-0 flex justify-between items-center z-[100] bg-white">
        <div>
          <h2 className="relative custom-h2 text-4xl">Portfolio</h2>
        </div>
        <div className="lg:hidden md:hidden">
          <Button onClick={toggleDrawer("right", true)}>
            <Image src={hamburgerIcon} alt="menuIcon" />
          </Button>
          <SwipeableDrawer
            anchor="right" // Make sure to set the correct anchor value here
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            PaperProps={{ style: { width: "50%" } }}
          >
            {list("right")}
          </SwipeableDrawer>
        </div>

        <nav className="sm:hidden">
          <Link
            href="/"
            className="inline-block text-lg text-grey font-medium ml-8 hover:text-green hover:underline "
          >
            Home
          </Link>

          <Link
            href="/about"
            className="inline-block text-lg text-grey font-medium ml-8 hover:text-green hover:underline"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="inline-block text-lg text-grey font-medium ml-8 hover:text-green hover:underline"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="inline-block text-lg text-grey font-medium ml-8 hover:text-green hover:underline "
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
