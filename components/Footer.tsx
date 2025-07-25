import { Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">S_Decor_Bg</h3>
            <p className="text-gray-400 mb-4">
              Specijalizovani za reparaciju, farbanje i kompletnu obnovu PVC i aluminijumske stolarije. 
              Profesionalan pristup sa garancijom kvaliteta.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Stručnost u PVC i Aluminijumu</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Naše Usluge</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Reparacija PVC Stolarije</li>
              <li>Reparacija Aluminijumske Stolarije</li>
              <li>Farbanje PVC Elemenata</li>
              <li>Promena Boje Aluminijuma</li>
              <li>Održavanje i Servis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+381 60 7473 865</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:farbanjepvcialustolarije@gmail.com"
                  className="hover:text-white transition-colors"
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
                  className="hover:text-white transition-colors"
                >
                  @s_decor_bg
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 S_Decor_Bg. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
