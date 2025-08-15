import { useState } from 'react';
import { Button } from './ui/button';
import { Instagram, ExternalLink } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const instagramPosts = [
    {
      id: 1,
      category: "pvc",
      embedUrl: "https://www.instagram.com/p/DLRa9jLCA2f/embed",
      title: "Reparacija PVC Prozora",
      description: "Kompletan servis PVC prozora sa zamenom zaptivača"
    },
    {
      id: 2,
      category: "aluminum", 
      embedUrl: "https://www.instagram.com/p/DLzMUlxCeuf/embed",
      title: "Farbanje Aluminijumskih Vrata",
      description: "Profesionalna promena boje aluminijumskih ulaznih vrata"
    },
    {
      id: 3,
      category: "pvc",
      embedUrl: "https://www.instagram.com/p/DL4AGpCC7Wn/embed",
      title: "Renovacija PVC Stolarije",
      description: "Kompletna renovacija PVC prozora i vrata"
    },
    {
      id: 4,
      category: "aluminum",
      embedUrl: "https://www.instagram.com/p/DE2RoI4iAjY/embed",
      title: "Aluminijumska Ventilacija",
      description: "Reparacija i farbanje aluminijumskih elemenata"
    },
    {
      id: 5,
      category: "pvc",
      embedUrl: "https://www.instagram.com/p/DGxarOriAqa/embed",
      title: "PVC Balkonska Vrata",
      description: "Servis i obnova PVC balkonskih vrata"
    },
    {
      id: 6,
      category: "aluminum",
      embedUrl: "https://www.instagram.com/p/DHrFEfesPn9/embed",
      title: "Aluminijumski Okviri",
      description: "Reparacija i promena boje aluminijumskih okvira"
    }
  ];

  const filters = [
    { id: 'all', label: 'Svi Radovi' },
    { id: 'pvc', label: 'PVC Stolarija' },
    { id: 'aluminum', label: 'Aluminijumska Stolarija' }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? instagramPosts 
    : instagramPosts.filter(post => post.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Naši Radovi
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
            Pogledajte naše završene projekte reparacije i farbanja PVC i aluminijumske stolarije 
            direktno sa našeg Instagram profila. Svaki rad predstavlja našu posvećenost kvalitetu i preciznosti.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
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

          {/* Instagram Profile Link */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Instagram className="w-5 h-5 text-pink-500" />
            <a 
              href="https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700"
            >
              Pratite nas na Instagramu @s_decor_bg
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div key={post.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="relative">
                <iframe
                  src={post.embedUrl}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="w-full"
                  title={post.title}
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More on Instagram */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Instagram className="w-5 h-5" />
            Pogledajte sve naše radove na Instagramu
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
