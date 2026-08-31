import video1 from "@/assets/Regularização_de_imóveis_apresentação_1.mp4.asset.json";
import video2 from "@/assets/Regularização_de_imóveis_1.mp4.asset.json";
import video3 from "@/assets/Regularização_de_imóveis_registro_1.mp4.asset.json";
import video4 from "@/assets/Compromisso_de_compra_e_venda_1_1.mp4.asset.json";
import poster1 from "@/assets/video-poster-1.jpg";
import poster2 from "@/assets/video-poster-2.jpg";
import poster3 from "@/assets/video-poster-3.jpg";
import poster4 from "@/assets/video-poster-4.jpg";

export interface Video {
  title: string;
  src: string;
  poster: string;
  detailDescription?: string;
  answeredQuestions?: string[];
}

export const videos: Video[] = [
  {
    title: "Apresentação Adv Marcelo Masagão e os cuidados na compra e venda do imóvel",
    src: video1.url,
    poster: poster1,
    detailDescription:
      "Caminhos da regularização de imóveis e o investimento em bens da família",
  },
  {
    title: "Importância do reconhecimento de firma",
    src: video2.url,
    poster: poster2,
    detailDescription:
      "A importância do reconhecimento de firma para justificar a data do ato, a confirmação da assinatura nos contratos e compromissos.",
    answeredQuestions: [
      "Reconhecimento de firma eletrônico pode ser utilizado nos atos ou reconhecimento de firma físico?",
    ],
  },
  {
    title: "Compromisso de compra e venda. Arrependimento?",
    src: video3.url,
    poster: poster3,
    answeredQuestions: [
      "Posso registrar um compromisso de compra e venda?",
      "Quando vale a pena?",
      "Houve algum investimento?",
      "Será que haverá desistência?",
      "Posso ter um desconto no registro definitivo?",
    ],
  },
  {
    title: "Vedendor desaparece ou recusa-se a passar escritura",
    src: video4.url,
    poster: poster4,
    detailDescription:
      "Documentos particulares que podem ser registrados sem escritura!",
    answeredQuestions: [
      "Quando o vendedor desaparece?",
      "Quando o vendedor recusa-se a passar a escritura definitiva?",
      "Adjudicação Compulsória?",
    ],
  },
];
