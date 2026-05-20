export interface Product {
  id: string
  label: string
  title: string
  subtitle: string
  image: string
  theme: "light" | "dark"
  aspectRatio: string
}

export const products: Product[] = [
  {
    id: "iphone",
    label: "iPhone 16 Pro",
    title: "Titânio Inteligente Inovador",
    subtitle:
      "Chip A18 Pro. Camera Fusion de 48 MP. Zoom óptico 5x. Bateria para o dia todo. O smartphone mais avançado que já existiu.",
    image: "/products/iphone.png",
    theme: "light",
    aspectRatio: "9 / 19.5",
  },
  {
    id: "macbook",
    label: "MacBook Pro",
    title: "Velocidade sem concessões",
    subtitle:
      "Chip M4 Pro. Até 24 horas de bateria. Display Liquid Retina XDR. Performance que redefine o que um notebook pode fazer.",
    image: "/products/macbook.png",
    theme: "light",
    aspectRatio: "16 / 10",
  },
  {
    id: "ipad",
    label: "iPad Pro",
    title: "Leve e potente, do jeito que você precisa",
    subtitle:
      "Display Ultra Retina XDR de 13 polegadas. Chip M4. O dispositivo mais fino que a Apple já criou - e o mais capaz.",
    image: "/products/ipad.png",
    theme: "light",
    aspectRatio: "3 / 4",
  },
  {
    id: "airpods",
    label: "AirPods Pro",
    title: "O som que você nunca ouviu antes",
    subtitle:
      "Cancelamento ativo de ruído de próxima geração. Audio Espacial personalizado. Mais de 30 horas de bateria com o estojo.",
    image: "/products/airpods.png",
    theme: "dark",
    aspectRatio: "1 / 1",
  },
  {
    id: "apple-watch",
    label: "Apple Watch Series 10",
    title: "Cuidando da sua saúde, com estilo",
    subtitle:
      "Monitoramento de ECG e oxigênio no sangue. Display maior e mais brilhante. O smartwatch mais vendido do mundo, por uma razão.",
    image: "/products/apple-watch.png",
    theme: "dark",
    aspectRatio: "1 / 1",
  },
]
