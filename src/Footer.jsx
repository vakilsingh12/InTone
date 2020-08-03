import React from 'react'

function Footer() {
  var year=new Date().getFullYear();
  return (
    <div>
      <footer className="mt-3 p-4 w-100 bg-light text-center">
        <p>&copy; {year} InTone. All Rights Reserved | Terma And Condition </p>
        <p>Design By : Vakil Singh</p>
      </footer>
    </div>
  )
}

export default Footer
