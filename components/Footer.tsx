import { Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">S_Decor_Bg</h3>
            <p className="mb-4 text-gray-400">
              Specijalizovani za reparaciju, farbanje i kompletnu obnovu PVC i aluminijumske stolarije. 
              Profesionalan pristup sa garancijom kvaliteta.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Stručnost u PVC i Aluminijumu</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Naše Usluge</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Reparacija PVC Stolarije</li>
              <li>Reparacija Aluminijumske Stolarije</li>
              <li>Farbanje PVC Elemenata</li>
              <li>Promena Boje Aluminijuma</li>
              <li>Održavanje i Servis</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+381607473865"
                  className="transition-colors hover:text-white"
                >
                  +381 60 7473 865
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:farbanjepvcialustolarije@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  farbanjepvcialustolarije@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @s_decor_bg
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 S_Decor_Bg. Sva prava zadržana. | Created by <a href="https://nikola-apps.com" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-400 transition-colors hover:text-blue-300">nikola-apps</a></p>
        </div>
      </div>
    </footer>
  );
}
