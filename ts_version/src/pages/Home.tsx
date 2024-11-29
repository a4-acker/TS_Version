import { useEffect, useState } from 'react';
import { fetchProjects, Project } from '../utils/getProjects';

const Home = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                        <a href={project.path}>{project.name}</a> - Version: {project.version}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
