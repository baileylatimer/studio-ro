import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"




const ProjectCard = props => (
  
    <li className={props.classes + " reveal-fx reveal-fx--translate-up"}>
      <Link className=" project-card" to={props.url}>
        <StaticImage src="../images/img--01.jpg" alt={props.title} objectFit="cover" width="2000" />
          <div class="flex justify-between my-4 mx-4">
              <h1 class="">{props.title}</h1>
              <h1 className="lg:mt-0 color-contrast-medium"id="card-title-2">{props.desc}</h1>
          </div>
        </Link>
    </li>
);

export default ProjectCard