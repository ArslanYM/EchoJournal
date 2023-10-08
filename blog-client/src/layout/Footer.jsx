import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-indigo-600 py-4 text-white mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Echo Journal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
