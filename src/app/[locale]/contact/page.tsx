"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Options from '@/components/Options';

const Contact: React.FC = () => {
  const [start, setStart] = useState(0);
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    setStart(start + 1);
  };

  const handleAnswer = (selectedOption: { pergunta: string; id: string; text: string }) => {
    console.log('Opção selecionada:', selectedOption);

    setRespostas((prev) => ({
      ...prev,
      [selectedOption.pergunta]: selectedOption.text,
    }));

    console.log(respostas);
  };

  return (
    <div className="w-full min-h-[70dvh] pb-16 flex items-center justify-start flex-col relative overflow-hidden bg-zinc-200">
      <AnimatePresence mode="wait">
        {!start && (
          <motion.div
            key="startScreen"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 p-8 bg-white shadow-lg rounded-md z-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'linear' }}
          >
            <h1 className="text-preto font-extrabold text-2xl sm:text-4xl">
              Queremos conhecer você e seu projeto!
            </h1>
            <p className="text-gray-600 text-sm sm:text-md">
              Vamos fazer algumas perguntas para que nossa equipe possa te ajudar da melhor forma possível.
            </p>
            <button
              className="button w-full"
              onClick={handleNext}
            >
              Iniciar
            </button>
          </motion.div>
        )}

        {start === 1 && (
          <motion.div
            key="question1"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual das opções mais condiz com seu negócio?
            </h1>
            <Options
              options={[
                { pergunta: '1', id: '1', text: 'Tenho uma startup' },
                { pergunta: '1', id: '2', text: 'Sou infoprodutor' },
                { pergunta: '1', id: '3', text: 'Sou empreendedor' },
                { pergunta: '1', id: '4', text: 'Quero criar uma startup' },
                { pergunta: '1', id: '5', text: 'Nenhuma das opções' },
              ]}
              onAnswer={handleAnswer}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Prosseguir</button>
          </motion.div>
        )}

        {start === 2 && (
          <motion.div
            key="question2"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual o seu nome?
            </h1>
            <input
              className='w-full border px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder='Seu nome...'
              value={respostas['2'] || ''}
              onChange={(e) => handleAnswer({ id: '1', pergunta: '2', text: e.target.value })}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Prosseguir</button>
          </motion.div>
        )}

        {start === 3 && (
          <motion.div
            key="question3"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual o seu melhor e-mail?
            </h1>
            <input
              className='w-full border px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="email"
              placeholder='Seu e-mail...'
              value={respostas['3'] || ''}
              onChange={(e) => handleAnswer({ id: '2', pergunta: '3', text: e.target.value })}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Prosseguir</button>
          </motion.div>
        )}

        {start === 4 && (
          <motion.div
            key="question4"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual o seu número de WhatsApp?
            </h1>
            <input
              className='w-full border px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder='Seu número...'
              value={respostas['4'] || ''}
              onChange={(e) => handleAnswer({ id: '3', pergunta: '4', text: e.target.value })}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Prosseguir</button>
          </motion.div>
        )}

        {start === 5 && (
          <motion.div
            key="question5"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual ideia você quer tirar do papel?
            </h1>
            <input
              className='w-full border px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder='Seu orçamento...'
              value={respostas['5'] || ''}
              onChange={(e) => handleAnswer({ id: '4', pergunta: '5', text: e.target.value })}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Prosseguir</button>
          </motion.div>
        )}

        {start === 6 && (
          <motion.div
            key="question6"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white text-zinc-500 hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500'>Etapa {start} de 6</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl">
              Qual é o seu orçamento estimado?
            </h1>
            <input
              className='w-full border px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder='Seu orçamento...'
              value={respostas['6'] || ''}
              onChange={(e) => handleAnswer({ id: '4', pergunta: '6', text: e.target.value })}
            />
            <button className='button w-full' onClick={() => setStart(start + 1)}>Finalizar</button>
          </motion.div>
        )}

        {start === 7 && (
          <motion.div
            key="finalScreen"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white shadow-lg rounded-md z-10 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h1 className="text-preto font-extrabold text-2xl sm:text-4xl">
              Obrigado por responder!
            </h1>
            <p className="text-gray-600 text-sm sm:text-md">
              Nós recebemos suas respostas e em breve entraremos em contato.
            </p>
            <button
              className="button w-full"
              onClick={() => console.log('JSON de respostas:', JSON.stringify(respostas))}
            >
              Voltar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="background">
        {Array.from({ length: 20 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
