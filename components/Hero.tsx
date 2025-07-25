import Image from 'next/image';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Reparacija i Farbanje
                <span className="text-blue-600 block">PVC i Aluminijumske Stolarije</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Specijalizovani za reparaciju, farbanje i kompletnu promenu boje PVC i aluminijumskih prozora, vrata i drugih stolarijskih elemenata.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Besplatan Predračun
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToPortfolio}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Pogledajte Radove
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Specijalizovani za PVC</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Aluminijumska Stolarija</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Profesionalna Oprema</span>
              </div>
            </div>


          </div>

          <div className="lg:order-2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80"
                alt="PVC i aluminijumska stolarija"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
