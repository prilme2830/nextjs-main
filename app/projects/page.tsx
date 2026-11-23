const projects = [
    {id: 1, name: "Portfolio", description: "A personal portfolio website"},
    {id: 2, name: "Restaurant Management System", description: "A system for managing restaurant operations"},
    {id: 3, name: "BusGo", description: "A bus tracking and scheduling application"}
]
export default function ProjectPage(){
    return(
        <main className="p-8">
        <h1 className="text-2xl font-bold">Project</h1>
        <ul>
            {projects.map((p) => (
            <li key={p.id}>
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p>{p.description}</p>
            </li>
            ))}
        </ul>
        
        </main>
    );
}