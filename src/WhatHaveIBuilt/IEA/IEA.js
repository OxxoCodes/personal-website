import React from "react"
import BackCardWrapper from "../../Card/BackCardWrapper";
import Link from "../../Utils/Link"

const IEA = ({filename}) => {
  return (
    <BackCardWrapper filename={filename}>
      <div className="text">
        <h1>Internal Enterprise Application</h1>
        <p>In the Summer of 2022, from May 5th to August 5th, I have been working as a software developer intern at <Link url={"https://www.ally.com/"} text={"Ally Financial"}/>.</p>
        <p>During my time here, I have been using the following technologies: TypeScript, JavaScript, React, Storybook, Docker, Node, Git, HTML, and CSS.</p>
        <p>While at Ally, my job has been to focus on the development of a single web application. This process involved
           the migration of an older web application from Ember.js to React as well as implementing a full visual redesign,
           creating new features, ensuring high modularity through the usage of Storybook.</p>
        <p>This application was an internal web dashboard used by many of those within my department, and had the
           capability to pull large amounts of data from external endpoints on-demand, and reflect that data to the user.</p>
        <p>As this application involved many rapid and fairly complex component state changes, a huge focus was on solid
           code practices and a deep understanding of React to ensure maximum performance. In addition, as the components
           I developed are intended to be used elsewhere within the company following the conclusion of my internship, a
           large focus needed to be placed on modularity. Lastly, since this application was being actively used by those
           within the organization, I needed to ensure that my implementation not only replicated the functionality of the
           original, but also improved upon it. The user interface was stylized to appear more modern and make the application
           more appealing, quality-of-life features were implemented to make the application easier to use, and additional
           debugging features were implemented to make the jobs of others within my department easier.</p>
        <p>In the end, not onlyI had developed an application which not only improved upon the appearance and capabilities
           of its predecessor, but I had also developed features which would save the entire department time and money,
           and created efficient and modular components that could be brought into other internal applications with
           very little tension.</p>
      </div>
      <div className="image" />
    </BackCardWrapper>
  )
}

export default React.memo(IEA)