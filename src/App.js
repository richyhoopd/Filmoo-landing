import React, { useState, useEffect } from 'react';
import { Play, Users, Calendar, MapPin, Star, ArrowRight, Mail, Check, Film, Clock, Heart, Zap, Target, Sparkles } from 'lucide-react';
import cinemaguys from './assets/freepik.avif'

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const movieExamples = [
  { 
    title: "Babylon", 
    votes: 28, 
    city: "Guadalajara, Centro Magno, 10 Agosto 2025 7:00 p.m", 
    genre: "Drama, Comedia", 
    color: "bg-blue-400", 
    textColor: "text-blue-900",
    poster: "https://m.media-amazon.com/images/I/71oRuadhIbL._UF894,1000_QL80_.jpg"
  },
  { 
    title: "La Red Social", 
    votes: 31, 
    city: "Guadalajara, Plaza Galerias, 15 Agosto 2025 7:00 p.m", 
    genre: "Drama", 
    color: "bg-pink-400", 
    textColor: "text-pink-900",
    poster: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2883928/5972062/MOVAB00214__42004.1679613155.jpg?c=2"
  },
  { 
    title: "Que pasó ayer?", 
    votes: 45, 
    city: "Guadalajara, Tolsá, 5 Agosto 2025 7:00 p.m", 
    genre: "Comedia", 
    color: "bg-orange-400", 
    textColor: "text-orange-900",
    poster: "https://pics.filmaffinity.com/the_hangover-726045836-large.jpg"
  },
  { 
    title: "Parasitos", 
    votes: 22, 
    city: "Guadalajara, Cineteca FICG, 28 Agosto 2025 8:00 p.m", 
    genre: "Thriller", 
    color: "bg-green-400", 
    textColor: "text-green-900",
    poster: "https://image.tmdb.org/t/p/original/9PSifrJfKl8sy9tBOd5Vcg0jbN6.jpg"
  }
];


  const steps = [
    { 
      icon: "🎬", 
      title: "Solicita o Únete a una Película", 
      desc: "Inicia una votacion con la película que quieras ver o únete a una ya activa comprando tu entrada.",
      color: "bg-yellow-400",
      accent: "bg-yellow-100"
    },
    { 
      icon: "👥", 
      title: "Invita a gente para llegar a 30 personas", 
      desc: "Comparte con amigos, Cuando 30 o más personas compran entradas tu funcion se confirma en cartelera.",
      color: "bg-blue-400",
      accent: "bg-blue-100"
    },
    { 
      icon: "🎭", 
      title: "Disfruten juntos la pantalla grande", 
      desc: "Nosotros rentamos la sala, tu disfrutas de tu pelicula como debe de ser: en el cine.",
      color: "bg-green-400",
      accent: "bg-green-100"
    }
  ];

  const FloatingShape = ({ children, className = "", style = {} }) => (
    <div className={`absolute ${className}`} style={style}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShape className="top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
      <FloatingShape className="top-40 right-20 w-12 h-12 bg-blue-400 rotate-45" style={{animationDelay: '1s'}} />
      <FloatingShape className="top-60 left-1/4 w-8 h-8 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      <FloatingShape className="bottom-40 right-10 w-20 h-20 bg-green-400 rounded-full opacity-50" />
      <FloatingShape className="bottom-60 left-20 w-14 h-14 bg-purple-400 rotate-12" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black flex items-center justify-center relative">
                <Film className="w-6 h-6 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Filmoo</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#how" className="text-gray-600 hover:text-black transition-colors font-medium">Como funciona?</a>
              <a href="#parties" className="text-gray-600 hover:text-black transition-colors font-medium">Fiestas Activas</a>
<button className="text-white px-6 py-2 hover:bg-gray-800 transition-colors font-medium flex items-center gap-2" style={{ backgroundColor: '#232121' }}>
  <Sparkles className="w-4 h-4" />
  Unete a la Beta
</button>
            </div>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
<section className="pt-20 px-6 relative">
  <div className="max-w-5xl mx-auto text-center">
    <div className="mb-8">
      {/* Cinema Guys Image */}
      <div className="mb-0">
        <img 
          src={cinemaguys} 
          alt="Cinema guys illustration"
          className="mx-auto max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 mb-6 text-yellow-800 font-medium">
        <Zap className="w-4 h-4" />
        Now in Beta • 12 Cities
      </div> */}
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight style={{ color: '#232121' }}">
        <span className="block">Mira las peliculas que amas</span>
        <span className="block relative">
          como debe ser: En el cine.
          <div className="absolute -bottom-2 left-0 w-full h-6 bg-pink-400 -z-10"></div>
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Vota por las películas que quieres ver. Reúne a 30 amantes del cine en tu ciudad. Disfruta la pelicula en la pantalla grande.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <button className="text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center text-lg" style={{ backgroundColor: '#232121' }}>
        <Play className="w-5 h-5" />
        Mira el Trailer
      </button>
      <button className="border-2 border-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-lg">
        Registrate a la Beta
      </button>
    </div>


    {/* <div className="relative max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-400 p-6 text-center text-white font-bold text-lg">
          <div className="text-3xl mb-2">🎬</div>
          Vota por la Pelicula
        </div>
        <div className="bg-green-400 p-6 text-center text-white font-bold text-lg">
          <div className="text-3xl mb-2">👥</div>
          Invita a Amigos
        </div>
        <div className="bg-purple-400 p-6 text-center text-white font-bold text-lg">
          <div className="text-3xl mb-2">🍿</div>
          Disfruta en el cine
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-yellow-400 px-8 py-4 font-bold text-xl">
          = Perfect Cinema Experience
        </div>
      </div>
    </div> */}
  </div>
</section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-bold mb-6">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ni muchas, ni pocas. Sí 30 personas pagan su entrada se confirma la función.
                ¿Sí no? Se cancela la función y obtienes un reembolso completo automaticamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`${step.accent} p-8 border-4 border-black`}>
                  <div className={`${step.color} w-20 h-20 flex items-center justify-center mb-6 text-4xl rounded-full`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <div className="inline-block bg-black text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">The Magic Number: 30</h3>
              <p className="text-lg text-gray-300">
                Ni muchos, ni pocos. 30 personas crean la atmósfera perfecta para vivir el cine en comunidad.
                ¿Menos de 30? Reembolso total, sin preguntas.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Active Parties */}
<section id="parties" className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-5xl font-bold mb-6">
        Funciones Beta
      </h2>
      <p className="text-xl text-gray-600">Se una de las primeras personas en participar en nuestras funciones votando por una de las siguientes</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {movieExamples.map((movie, index) => (
        <div key={index} className="border-4 border-black bg-white hover:translate-x-1 hover:translate-y-1 transition-transform">
          {/* <div className={`${movie.color} p-4 border-b-4 border-black`}>
            <div className="flex justify-between items-center text-white">
              <span className="font-bold text-sm">{movie.genre}</span>
              <span className="text-2xl">🎬</span>
            </div>
          </div> */}
          
          {/* Movie Poster */}
          <div className="relative">
            <img 
              src={movie.poster} 
              alt={`${movie.title} poster`}
              className="w-full h-full object-cover border-b-4 border-black"
            />
          </div>
          
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              {movie.city}
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-3xl font-bold">{movie.votes}</span>
                <span className="text-sm text-gray-600">/ 30 people</span>
              </div>
              <div className="w-full bg-gray-200 h-3 border-2 border-black">
                <div 
                  className={`${movie.color} h-full transition-all duration-500`}
                  style={{ width: `${(movie.votes / 30) * 100}%`, maxWidth: '100%' }}
                ></div>
              </div>
            </div>
            <button className="w-full bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors">
              Comprar boletos
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="bg-yellow-400 text-black px-8 py-4 font-bold hover:bg-yellow-500 transition-colors text-lg">
        Comienza tu propia función
      </button>
    </div>
  </div>
</section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-5xl font-bold mb-8">
                Cine Democratico
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Olvídate de conformarte con lo que hay en cartelera. Con Filmoo, es la comunidad quien decide qué merece proyectarse en la gran pantalla.


              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desde clásicos de culto hasta joyas independientes, desde obras maestras extranjeras hasta películas experimentales—si 30 personas quieren verla, la haremos realidad.
              </p>
              <div className="bg-white p-6 border-4 border-black">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-400 flex items-center justify-center rounded-full">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold">Hecho por amantes del cine</span>
                </div>
                <p className="text-gray-600">
                  Somos un equipo de Artistas, ingenieros, cineastas, ejecutivos de cines y entusiastas que compartimos la creencia de que las peliculas son mejores en el cine y que nunca debería ser tarde para ver una pelicula en una gran pantalla
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-400 p-8 text-white border-4 border-black">
                <h3 className="font-bold text-2xl mb-4">🎯 Impulsado por la comunidad</h3>
                <p>Cada película es elegida por personas reales, no por algoritmos ni ejecutivos.</p>
              </div>
              <div className="bg-green-400 p-8 text-white border-4 border-black">
                <h3 className="font-bold text-2xl mb-4">🏙️ En tus cines favoritos</h3>
                <p>Disfruta de tu pelicula en tu cine favorito, si más gente quiere verla ahí, ahí será.</p>
              </div>
              <div className="bg-purple-400 p-8 text-white border-4 border-black">
                <h3 className="font-bold text-2xl mb-4">✨ Precio accesible</h3>
                <p>por $100 por función, convierte las noches de película en experiencias inolvidables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-yellow-400">284</div>
              <div className="text-gray-400">Cinefilos esperando la beta</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-blue-400">3</div>
              <div className="text-gray-400">Ciudades Filmoo</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">150+</div>
              <div className="text-gray-400">Peliculas solicitadas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-pink-400">30</div>
              <div className="text-gray-400">Personas promedio por función</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-5xl font-bold mb-6 text-black">
            Listo para volver a ir al cine?
          </h2>
          <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Únete a miles de amantes del cine que están listos para transformar la forma en que vivimos las películas. Recibe una notificación cuando Filmoo esté disponible.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu email"
                  className="w-full px-6 py-4 border-4 border-black focus:outline-none text-lg"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-8 py-4 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Estás dentro!
                  </>
                ) : (
                  <>
                    Registrate en la Beta
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-gray-700 text-sm">
            No spam, solo la magía del cine. Lanzando en Guadalajara, CDMX y Monterrey Primero.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-black flex items-center justify-center">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Filmoo</span>
              </div>
              <p className="text-gray-600 mb-4">
                Regresando la magía de ir al cine una función a la vez.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-400"></div>
                <div className="w-8 h-8 bg-pink-400"></div>
                <div className="w-8 h-8 bg-green-400"></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Compañia</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-black transition-colors">Acerca</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Blog</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Internships</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Prensa</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soporte</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-black transition-colors">Ayuda</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Contacto</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Privacidad</a></div>
                <div><a href="#" className="hover:text-black transition-colors">Terminos y Condiciones</a></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 Filmoo.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;