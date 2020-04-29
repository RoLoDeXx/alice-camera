import React from "react";

export default function index() {
  return (
    <div className="stepper">
      <li className="stepper__item complete">Step 1</li>
      <li className="stepper__item current">Step 2</li>
      <li className="stepper__item">Step 3</li>
      <li className="stepper__item">Step 4</li>
      <li className="stepper__item">Step 5</li>
    </div>
  );
}
