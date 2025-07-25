import Image from 'next/image';
import { Award, Users, Clock, Wrench } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "150+",
      label: "Zadovoljnih Klijenata"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      number: "8+",
      label: "Godina Iskustva"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      number: "300+",
      label: "Repariranih Elemenata"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      number: "100%",
      label: "Stručnost i Preciznost"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Specijalizovani za PVC i Aluminijum
              </h2>
              <p className="text-lg text-gray-600">
                Sa dugogodišnjim iskustvom u reparaciji i farbanju PVC i aluminijumske stolarije, posvećeni smo vraćanju originalnog izgleda i funkcionalnosti vašim prozorima i vratima.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Naša specijalizacija obuhvata kompletan pristup reparaciji i obnovi PVC i aluminijumskih elemenata. Koristimo najkvalitetnije materijale i tehnike prilagođene specifičnostima ovih materijala.
              </p>
              <p className="text-gray-600">
                Bez obzira da li se radi o oštećenjima, promeni boje ili kompletnoj obnovi, pristupamo svakom projektu sa pažnjom prema detaljima i garancijom kvaliteta. Naš cilj je da vaša stolarija izgleda kao nova.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Reparacija PVC prozora"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Godina Iskustva</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
