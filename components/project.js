var ReactGA = require('react-ga');

const Project = ({ project }) => (
    <ReactGA.OutboundLink
                eventLabel={'go-to-project-'+project.id}
                to={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="project"
            >
        <div id="triangle" style={{
            backgroundImage: 'url(./static/projects/' + project.id + '.svg)'
        }}>
        </div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

    </ReactGA.OutboundLink>
)

export default Project;