import React from "react"
import BackCardWrapper from "../../Card/BackCardWrapper";
import Link from "../../Utils/Link"

const PiCade = ({filename}) => {
  return (
    <BackCardWrapper filename={filename}>
      <div className="text">
        <h1>Pi-Cade</h1>
        <p>Short for "Raspberry Pi Arcade", Pi-Cade is a homemade, completely from-scratch full-size and tabletop arcade
           cabinet.</p>
        <p>The star of the show here is a Raspberry Pi 4 4GB, which runs Retroarch for emulation and EmulationStation for
           the frontend through <Link url={"https://retropie.org.uk/"} text={"RetroPie"}/>.</p>
        <p>The cabinet features two-player support, with one 8-way joystick and six buttons per player, a working coin
           slot, powerful stereo speakers, customizable RGB LEDs, USB, and storage space for external peripherals - all
           wrapped up in a completely custom design.</p>
        <p>The top half of the cabinet is also completely detachable from the bottom half. This means that, depending on
           your desired use case, you can go from having a full-size arcade cabinet to a tabletop without losing any of
           the important features! Minus the coin slot, of course.</p>
        <p>The frame was 3D modeled prior to being cut out of MDF wood. All vinyl was custom-printed using a custom
           compilation of arcade-related artwork.</p>
      </div>
      {window.innerWidth > window.innerHeight && <div className="image"/>}
    </BackCardWrapper>
  )
}

export default React.memo(PiCade)