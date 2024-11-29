export interface Project {
    name: string;
    version: string;
    path: string;
}

export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch('/subprojects.json'); // 假設你有一個靜態 JSON 檔案來描述子目錄
    const projects: Project[] = await response.json();
    return projects;
}
