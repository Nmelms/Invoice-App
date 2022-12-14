import React, { useRef, useState, useEffect } from "react";

export default function FormAlert({ alertRef, setShowAlert }) {
  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div ref={alertRef} className="alert-danger">
      All fields must be complete in order to submit. Try saving as draft
    </div>
  );
}
