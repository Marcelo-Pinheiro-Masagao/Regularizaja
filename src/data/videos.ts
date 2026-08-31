import video1 from "@/assets/Regularização_de_imóveis_apresentação_1.mp4.asset.json";
import video2 from "@/assets/Regularização_de_imóveis_1.mp4.asset.json";
import video3 from "@/assets/Regularização_de_imóveis_registro_1.mp4.asset.json";
import video4 from "@/assets/Compromisso_de_compra_e_venda_1_1.mp4.asset.json";

export interface Video {
  title: string;
  src: string;
  detailDescription?: string;
  answeredQuestions?: string[];
}

export const videos: Video[] = [
  {
    title: "Apresentação Adv Marcelo Masagão e os cuidados na compra e venda do imóvel",
    src: video1.url,
    detailDescription:
      "Caminhos da regularização de imóveis e o investimento em bens da família",
  },
  {
    title: "Importância do reconhecimento de firma",
    src: video2.url,
    detailDescription:
      "A importância do reconhecimento de firma para justificar a data do ato, a confirmação da assinatura nos contratos e compromissos.",
    answeredQuestions: [
      "Reconhecimento de firma eletrônico pode ser utilizado nos atos ou reconhecimento de firma físico?",
    ],
  },
  {
    title: "Compromisso de compra e venda. Arrependimento?",
    src: video3.url,
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
    detailDescription:
      "Documentos particulares que podem ser registrados sem escritura!",
    answeredQuestions: [
      "Quando o vendedor desaparece?",
      "Quando o vendedor recusa-se a passar a escritura definitiva?",
      "Adjudicação Compulsória?",
    ],
  },
];
