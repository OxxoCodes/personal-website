import React from "react"
import BackCardWrapper from "../../Card/BackCardWrapper";
import Link from "../../Utils/Link"

const IEA = ({filename}) => {
  return (
    <BackCardWrapper filename={filename}>
      <div className="text">
        <h1>Internal Enterprise Application</h1>
        <p>In the Summer of 2022 I worked as a software developer intern at <Link url={"https://www.ally.com/"} text={"Ally Financial"}/>.</p>
        <p>Technologies: TypeScript, JavaScript, React, Storybook, Docker, Node, Git, HTML, CSS.</p>
        <p>While at Ally, my job was to focus on the migration and improvement of an internal web application from
           Ember.js to React. This process involved implementing a full visual redesign, creating new application
           features, and ensuring high modularity through the use of Storybook stories and components.</p>
        <p>This application was an internal web dashboard used by others within my department and had the
           capability to pull large amounts of data from external endpoints on-demand and reflect that data to the user.</p>
        <p>As this application involved many rapid and fairly complex component state changes, a huge focus was on solid
           code practices and a deep understanding of React to ensure maximum performance. In addition, as the components
           I developed were intended to be used elsewhere within the company following the conclusion of my internship, a
           large focus needed to be placed on modularity. Lastly, since this application was being actively used by those
           within the organization, I needed to ensure that my implementation not only replicated the functionality of the
           original, but also improved upon it. The user interface was stylized to appear more modern and make the application
           more appealing, quality-of-life features were implemented to make the application easier to use, and additional
           debugging features were implemented to ease the jobs of others within my apartment.</p>
        <p>In the end, not only had I developed an application which not only improved upon the appearance and capabilities
           of its predecessor, but I had also developed features which would save the entire department time and money. I
           also created efficient and modular components that could be brought into other internal applications with
           very little tension.</p>
      </div>
      {window.innerWidth > window.innerHeight && <div className="image"/>}
    </BackCardWrapper>
  )
}

export default React.memo(IEA)