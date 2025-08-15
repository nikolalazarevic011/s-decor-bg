import { Phone, Mail, Clock, Star, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Telefon",
      content: "+381 60 7473 865",
      action: "tel:+381607473865"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "farbanjepvcialustolarije@gmail.com",
      action: "mailto:farbanjepvcialustolarije@gmail.com"
    },
    {
      icon: <Instagram className="w-6 h-6 text-blue-600" />,
      title: "Instagram",
      content: "@s_decor_bg",
      action: "https://www.instagram.com/s_decor_bg?igsh=MThwcWRpaWtvZDRmeg=="
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Radno Vreme",
      content: "Pon-Sub: 8:00-18:00",
      action: null
    }
  ];

  const testimonials = [
    {
      name: "Milica Stojanović",
      text: "Savršeno su reparirali naše PVC prozore. Sada se zatvaraju kao novi i izgleda kao da su tek ugrađeni.",
      rating: 5
    },
    {
      name: "Aleksandar Marković",
      text: "Promena boje aluminijumskih vrata je bila neverovatna. Profesionalan rad i odličan rezultat.",
      rating: 5
    },
    {
      name: "Jovana Dimitrijević",
      text: "Brza i efikasna reparacija PVC stolarije. Preporučujem svima koji imaju problema sa prozorima.",
      rating: 5
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zatražite Besplatan Predračun
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Potrebna vam je reparacija ili farbanje PVC/aluminijumske stolarije? Kontaktirajte nas za 
            besplatnu procenu i stručne savete.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    {item.action ? (
                      <a
                        href={item.action}
                        target={item.action.startsWith('http') ? '_blank' : undefined}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Šta Kažu Naši Klijenti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-2">"{testimonial.text}"</p>
                      <p className="text-sm font-medium text-gray-900">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
