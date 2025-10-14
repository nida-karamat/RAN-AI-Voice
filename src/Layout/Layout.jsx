import React, { useState } from "react";
import Navbar from "../Components/Navbar"; // Adjust path correctly
import BookaDemo from "../Components/BookaDemo"; // Adjust path correctly

export default function Layout() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <Navbar onBookDemo={() => setShowDemo(true)} />
      {showDemo && <BookaDemo onClose={() => setShowDemo(false)} />}
    </>
  );
}
