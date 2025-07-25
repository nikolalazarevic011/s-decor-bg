import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-blue-600">S_Decor_Bg</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">
              Početna
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              O nama
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">
              Usluge
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-600 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Kontakt
            </button>
            <a 
              href="https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-blue-600 transition-colors">
                Početna
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-blue-600 transition-colors">
                O nama
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-blue-600 transition-colors">
                Usluge
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-blue-600 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-blue-600 transition-colors">
                Kontakt
              </button>
              <a 
                href="https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-left py-2 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
