import axios from 'axios';

const client = axios.create({
  baseURL: '/',
});

const questions = [
  {
    id: 1,
    question: 'Quando você precisa tomar decisões rápidas, o que faz primeiro?',
    options: [
      { label: 'Analiso fatos e penso nas consequências.', value: 'A' },
      { label: 'Vejo como isso vai impactar as pessoas.', value: 'B' },
      { label: 'Tomo uma ação inicial para já avançar.', value: 'C' },
    ],
  },
  {
    id: 2,
    question:
      'Em um grupo de trabalho, o que as pessoas mais percebem em você?',
    options: [
      { label: 'Organização e clareza lógica.', value: 'A' },
      { label: 'Empatia, escuta e facilidade com pessoas.', value: 'B' },
      { label: 'Praticidade, iniciativa e movimento.', value: 'C' },
    ],
  },
  {
    id: 3,
    question: 'Quando algo dá errado, qual é sua reação mais espontânea?',
    options: [
      { label: 'Tento entender racionalmente o que ocorreu.', value: 'A' },
      {
        label: 'Me preocupo com o clima e com as pessoas envolvidas.',
        value: 'B',
      },
      { label: 'Entro em ação para corrigir imediatamente.', value: 'C' },
    ],
  },
  {
    id: 4,
    question: 'O que mais te incomoda em outras pessoas?',
    options: [
      { label: 'Falta de lógica / desorganização mental.', value: 'A' },
      { label: 'Frieza / falta de sensibilidade.', value: 'B' },
      { label: 'Lentidão / excesso de análise.', value: 'C' },
    ],
  },
  {
    id: 5,
    question: 'Como você prefere aprender?',
    options: [
      { label: 'Estudando, estruturando, entendendo o porquê.', value: 'A' },
      {
        label: 'Conversando, trocando experiências, vivendo o clima.',
        value: 'B',
      },
      { label: 'Fazendo, testando, experimentando.', value: 'C' },
    ],
  },
  {
    id: 6,
    question: 'Quando está sob estresse, você tende a:',
    options: [
      { label: 'Fechar-se no pensamento e analisar demais.', value: 'A' },
      { label: 'Sentir emoções com mais intensidade.', value: 'B' },
      { label: 'Ficar mais impulsivo e agir rápido demais.', value: 'C' },
    ],
  },
  {
    id: 7,
    question: 'O que te dá mais sensação de "acerto"?',
    options: [
      { label: 'Quando algo faz sentido racionalmente.', value: 'A' },
      { label: 'Quando as pessoas ficam bem e conectadas.', value: 'B' },
      { label: 'Quando algo sai do papel e acontece.', value: 'C' },
    ],
  },
];

export default {
  findQuestions() {
    return Promise.resolve(questions);
  },
  sendAnswers() {
    return Promise.resolve({ value: true });
  },
};
