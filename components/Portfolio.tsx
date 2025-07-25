import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Reparacija PVC Prozora",
      category: "pvc",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kompletan servis PVC prozora sa zamenom zaptivača"
    },
    {
      id: 2,
      title: "Farbanje Aluminijumskih Vrata",
      category: "aluminum",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Profesionalna promena boje aluminijumskih ulaznih vrata"
    },
    {
      id: 3,
      title: "Renovacija PVC Stolarije",
      category: "pvc",
      image: "https://images.unsplash.com/photo-1571069422119-2cd90b11ad4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kompletna renovacija PVC prozora i vrata na stambenom objektu"
    },
    {
      id: 4,
      title: "Aluminijumska Ventilacija",
      category: "aluminum",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reparacija i farbanje aluminijumskih ventilacijskih elemenata"
    },
    {
      id: 5,
      title: "PVC Balkonska Vrata",
      category: "pvc",
      image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Servis i obnova PVC balkonskih vrata"
    },
    {
      id: 6,
      title: "Aluminijumski Okviri",
      category: "aluminum",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reparacija i promena boje aluminijumskih okvira"
    },
    {
      id: 7,
      title: "PVC Prozorska Krila",
      category: "pvc",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reparacija mehanizma i zaptivača PVC prozorskih krila"
    },
    {
      id: 8,
      title: "Aluminijumska Fasada",
      category: "aluminum",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Održavanje i farbanje aluminijumskih fasadnih elemenata"
    }
  ];

  const filters = [
    { id: 'all', label: 'Svi Radovi' },
    { id: 'pvc', label: 'PVC Stolarija' },
    { id: 'aluminum', label: 'Aluminijumska Stolarija' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naši Radovi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Pogledajte naše završene projekte reparacije i farbanja PVC i aluminijumske stolarije. 
            Svaki rad predstavlja našu posvećenost kvalitetu i preciznosti.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
