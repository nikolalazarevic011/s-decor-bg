import { RectangleHorizontal, Wrench, Palette, Shield, Sparkles, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Reparacija PVC Stolarije",
      description: "Profesionalna reparacija oštećenih PVC prozora i vrata, uključujući zamenu delova i popravku mehanizma.",
      features: ["Reparacija Okvira"]
    },
    {
      icon: <RectangleHorizontal className="w-12 h-12 text-blue-600" />,
      title: "Reparacija Aluminijumske Stolarije",
      description: "Stručna reparacija aluminijumskih prozora, vrata i drugih elemenata sa garancijom kvaliteta.",
      // features: ["Popravka Aluminijumskih Okvira", "Zamena Elemenata"]
      features: []
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Farbanje PVC Elemenata",
      description: "Profesionalno farbanje PVC stolarije specijalnim bojama koje garantuju dugotrajnost i otpornost.",
      features: ["Specijalne Boje za PVC", "Priprema Površine", "Jednoslojno/Višeslojno Farbanje", "UV Zaštita"]
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-blue-600" />,
      title: "Promena Boje Aluminijuma",
      description: "Kompletna promena boje aluminijumske stolarije sa dugotrajnim rezultatima i modernim finish-om.",
      features: ["Skidanje Starih Slojeva", "Tretiranje Površine", "Nanošenje Nove Boje", "Završna Zaštita"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Zaštita i Održavanje",
      description: "Preventivno održavanje i zaštita PVC i aluminijumske stolarije za produžavanje životnog veka.",
      features: ["Čišćenje i Održavanje", "Zaštitni Premazi"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Renovacija i Obnova",
      description: "Kompletna renovacija starih PVC i aluminijumskih elemenata za vraćanje originalnog izgleda.",
      features: ["Kompletna Obnova", "Modernizacija Starih Elemenata", "Estetska Obnova"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Naše Usluge
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Specijalizovani za reparaciju, farbanje i kompletnu obnovu PVC i aluminijumske stolarije. 
            Profesionalan pristup sa garancijom kvaliteta.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-shadow duration-300 bg-white border-0 shadow-lg hover:shadow-xl">
              <CardHeader className="pb-4 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 mr-3 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
