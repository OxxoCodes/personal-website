import React from "react"
import {VrfeWrapper} from "./VrfeWrapper";
import Link from "../../Utils/Link"

const Vrfe = ({filename}) => {
  return (
    <VrfeWrapper filename={filename}>
      <div className="text">
        <h1>VRFE</h1>
        <p>VRFE, short for Virtual Reality Field Experiences, is a team I worked under from Roughly April 2021 to June
           2022. During this time, I was the lead developer of a cross-platform mobile VR Grand Canyon exploration simulation.</p>
        <p>As we wanted to reach so many target devices, from Oculus Quests to desktops to 2016 Android phones with 1GB of memory, there were some serious challenges that came about. The first of which was performance – when I arrived, performance on the existing was subpar to say the least. After getting the application running on our target Android device, we were working with roughly 2 frames per second. Some serious work needed to be done. As such, I focused on removing unused assets, simplifying geometry, optimizing sound files and textures, and refactoring a large amount of code. Thanks to these efforts, we had gone from an unusable application to one that hit a smooth 45 frames per second with ease, and took up nearly 10 times less storage space.</p>
        <p>In addition to issues with performance, there was also the challenge of even getting code to build for the target devices. This application had already begun development prior to my arrival, and the libraries that were being used targeted an older version of Unity, and had since been deprecated. As such, we had a project that couldn’t even be built for modern phones or standalone VR devices such as the Quest. This resulted in even more significant refactoring and reimplementation, replacing many of the application’s dependencies with modern equivalents. This allowed us to target both modern and legacy virtual reality devices on Android, iOS, macOS, and Windows.</p>
        <p>You can find a brief video of the VRFE Grand Canyon application running on an Oculus Quest <Link url={"https://www.youtube.com/watch?v=kPWnLB0RVC0"} text={"here"} />.</p>
      </div>
      <div className="image" />
    </VrfeWrapper>
  )
}

export default Vrfe