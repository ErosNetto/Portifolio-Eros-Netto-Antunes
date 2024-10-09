import { useState } from "react";

// Component
import ProjectCard from "../ProjectCard/ProjectCard";

// Projects
import projectsData from "../../locales/projectsData";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [techFilters, setTechFilters] = useState([]);

  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  );

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "favorite" && project.isFavorite) ||
      filter === project.type;
    const matchesTech =
      techFilters.length === 0 ||
      project.technologies.some((tech) => techFilters.includes(tech));
    return matchesSearch && matchesFilter && matchesTech;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setFilter("all");
    setTechFilters([]);
  };

  const toggleTechFilter = (tech) => {
    setTechFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>

        {/* Filtro */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Pesquisar projetos..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" /> */}
              </div>

              <select
                className="w-full md:w-auto border rounded-lg px-4 py-2"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todos os Projetos</option>
                <option value="favorite">Favoritos</option>
                <option value="personal">Projetos Pessoais</option>
                <option value="freelance">Projetos Freelance</option>
              </select>

              <button
                onClick={clearFilters}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center"
              >
                {/* <XCircleIcon className="h-5 w-5 mr-2" /> */}
                Limpar Filtros
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Filtrar por tecnologia:
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTechFilter(tech)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      techFilters.includes(tech)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            Nenhum projeto encontrado.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
