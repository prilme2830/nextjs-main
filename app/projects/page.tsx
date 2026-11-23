const projects = [
    {id: 1, name: "Portfolio"},
    {id: 2, name: "Restaurant Management System"},
    {id: 3, name: "BusGo"}
]
export default function ProjectPage(){
    return(
        <main className="p-8">
        <h1 className="text-2xl font-bold">Project</h1>
        <ul>
            {projects.map((p) => (
            <li key={p.id}>{p.name}</li>
            ))}
        </ul>
        
        </main>
    );
}