import React from "react"
import {DriveManWrapper} from "./DriveManWrapper";
import Link from "../../Utils/Link"

const DriveMan = ({filename}) => {
  return (
    <DriveManWrapper filename={filename}>
      <div className="text">
        <h1>DriveMan</h1>
        <p>DriveMan is cloud file management software.</p>
        <p>With support for Google Drive, DriveMan allows users comfortable with the command-line
           to manage their files, both locally and in the cloud. It supports uploading, downloading, moving, copying, and
           deleting files.</p>
        <p>DriveMan's copying feature stands out in particular, as it allows users to copy the contents of any folder in
           Google Drive from one location to another - a capability that is not currently available in Drive's web UI.</p>
        <p>Support for DropBox is currently underway, which will allow users to also move and copy file between cloud
           file storage providers.</p>
        <p>You can access DriveMan <Link url={"https://github.com/OxxoCodes/DriveMan"} text={"here"} />.</p>
      </div>
      <div className="image" />
    </DriveManWrapper>
  )
}

export default React.memo(DriveMan)