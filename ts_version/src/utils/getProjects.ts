export interface Project {
    name: string;
    version: string;
    path: string;
}

export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch('./subprojects.json'); 
    const projects: Project[] = await response.json();
    return projects;
}
