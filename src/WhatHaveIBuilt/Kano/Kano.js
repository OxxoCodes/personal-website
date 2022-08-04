import React from "react"
import {KanoWrapper} from "./KanoWrapper";
import Link from "../../Utils/Link"

const Kano = ({filename}) => {
  return (
    <KanoWrapper filename={filename}>
      <div className="text">
        <h1>Kano</h1>
        <p>Kano is an interpreter for the CHIP-8 interpreted programming language, and was my first introduction to the
           world of low-level programming. Developing this application is what laid the foundation for my future
           interest in reverse engineering and cyber security as a whole.</p>
        <p>CHIP-8 was an early form of modern-day virtual machines, and ran on systems such as the COSMAC VIP.
           Due to its simplicity, and usage in early game development, CHIP-8 serves as an excellent entrypoint into the
           world of emulator development.</p>
        <p>Developed in my Sophomore year of high school, Kano supports the full CHIP-8 fontset and
           all non-MegaChip and non-SuperChip <Link url={"https://en.wikipedia.org/wiki/CHIP-8#Opcode_table"} text={"opcodes"}/>.</p>
        <p>When provided with a CHIP-8 ROM via the command-line, Kano uses SDL2 to display a window with accurately
           emulated graphics and capture user input. If you are interestesd in testing Kano, you can find a helpful
           collection of software written for CHIP-8 <Link url={"https://github.com/kripod/chip8-roms"} text={"here"}/>.</p>
        <p>You can access Kano's source code <Link url={"https://github.com/OxxoCodes/Kano"} text={"here"}/>.</p>
      </div>
      <div className="image" />
    </KanoWrapper>
  )
}

export default Kano