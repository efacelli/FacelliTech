export const WHATSAPP_NUMBER = "5493855166419";

export const products = [
  {
    id: 1,
    name: "Ryzen 3 3200G · Vidrio",
    images: ["compu-1-a.jpg", "compu-1-b.jpg", "compu-1-c.jpg", "compu-1-d.jpg"],
    cpu: "Ryzen 3 3200G",
    ram: "8GB DDR4",
    storage: "SSD 240GB",
    gpu: "Vega 8 integrado",
    extra: "Gabinete lateral de vidrio, 1 cooler trasero",
    desc: "Excelente desempeño para trabajos de diseño, edición y juegos con calidad media, con posibilidad de mejorarla.",
    software: "Windows 10 Fast + Office 2024",
    price: 350000,
    category: "diseno"
  },
  {
    id: 2,
    name: "Athlon II X2 270",
    images: ["compu-2-a.jpg", "compu-2-b.jpg", "compu-2-c.jpg", "compu-2-d.jpg"],
    cpu: "AMD Athlon II X2 270",
    ram: "4GB DDR3",
    storage: "HDD 320GB",
    gpu: "Video integrado",
    extra: "Equipo compacto para uso diario",
    desc: "Ideal para cualquier tipo de trabajo hogareño o de oficina.",
    software: "Windows 10 Fast + Office",
    price: 70000,
    category: "oficina"
  },
  {
    id: 3,
    name: "Ryzen 5 3400G · Gamer RGB",
    images: ["compu-3-a.jpg", "compu-3-b.jpg", "compu-3-c.jpg", "compu-3-d.jpg"],
    cpu: "Ryzen 5 3400G (4 núcleos / 8 hilos)",
    ram: "8GB DDR4",
    storage: "M.2 480GB",
    gpu: "Vega 11 integrado",
    extra: "Gabinete gamer 6 coolers RGB, lateral de vidrio, fuente LNZ 650W",
    desc: "Excelente desempeño en juegos calidad media, con posibilidad de mejorar la computadora.",
    software: "Windows 10 Fast + Office 2024",
    price: 500000,
    category: "gaming"
  },
  {
    id: 4,
    name: "Ryzen 3 3200G · TUF Gaming",
    images: ["compu-4-a.jpg", "compu-4-b.jpg", "compu-4-c.jpg", "compu-4-d.jpg"],
    cpu: "Ryzen 3 3200G (4 núcleos / 4 hilos, 3.6-4GHz)",
    ram: "8GB T-Force TUF Gaming Alliance 3200MHz",
    storage: "M.2 480GB",
    gpu: "Vega 8 integrado",
    extra: "Gabinete y fuente genéricos nuevos",
    desc: "Excelente rendimiento para oficina, diseño gráfico, edición de sonido y video, y para iniciarse en el gaming.",
    software: "Windows 10 Fast + Office",
    price: 350000,
    category: "diseno"
  },
  {
    id: 5,
    name: "AMD A6-7400K",
    images: ["compu-5-a.jpg", "compu-5-b.jpg", "compu-5-c.jpg", "compu-5-d.jpg"],
    cpu: "AMD A6-7400K",
    ram: "8GB DDR3 HyperX",
    storage: "SSD 240GB",
    gpu: "Video integrado",
    extra: "Equipo silencioso de uso diario",
    desc: "Excelente para trabajo hogareño o de oficina, y juegos como Roblox o Minecraft.",
    software: "Windows 10 Fast + Office",
    price: 150000,
    category: "oficina"
  },
  {
    id: 6,
    name: "Intel i5 9600K · Sentey RGB",
    images: ["compu-6-a.jpg", "compu-6-b.jpg", "compu-6-c.jpg", "compu-6-d.jpg"],
    cpu: "Intel Core i5 9600K (6 núcleos / 6 hilos, 3.70GHz)",
    ram: "8GB DDR4 RGB",
    storage: "M.2 480GB",
    gpu: "MSI Radeon RX550 2GB VRAM",
    extra: "Disipador torre doble ventilador RGB, gabinete gamer Sentey 6 coolers con leds",
    desc: "Excelente desempeño para trabajo hogareño, diseño gráfico, edición de sonido y video, y juegos con requerimientos medios.",
    software: "Windows 10 Fast + Office 2024",
    price: 450000,
    category: "gaming"
  }
];

export const tagLabel = { oficina: "Oficina / hogar", diseno: "Diseño y edición", gaming: "Gaming" };

export function formatPrice(n) {
  return "$" + n.toLocaleString("es-AR");
}
