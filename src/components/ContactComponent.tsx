"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Options from '@/components/Options';
import { useTranslations } from 'next-intl';

const ContactComponent = ({ divRef }: { divRef: React.RefObject<HTMLDivElement> }) => {
  const [start, setStart] = useState(0);
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  const handleNext = () => {
    setStart(start + 1);
  };

  const handleAnswer = (selectedOption: { pergunta: string; id: string; text: string }) => {
    setRespostas((prev) => ({
      ...prev,
      [selectedOption.pergunta]: selectedOption.text,
    }));
  };

  const handleFinish = async () => {
    setStart(start + 1)
    const ipRequest = await fetch("https://ipinfo.io/json?token=90ee1bc0f3a268")
    const ipResponse = await ipRequest.json()
    const localizacao = `${ipResponse.city}, ${ipResponse.country}`
    const body = {
      negocio: respostas[1],
      nome: respostas[2],
      email: respostas[3],
      whatsapp: respostas[4],
      pedido: respostas[5],
      orcamento: respostas[6],
      localizacao,
      timezone: ipResponse.timezone
    }
    const mailResponse = await fetch("/api/send", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const response = await mailResponse
    console.log(response.status)
  }

  const first = useTranslations("contact");

  return (
    <motion.div className={`w-full h-dvh relative flex items-center justify-center flex-col overflow-hidden`} ref={divRef} id='contact'>
      <AnimatePresence mode="wait">
        {!start && (
          <motion.div
            key="startScreen"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 p-8 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'linear' }}
          >
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("title")}
            </h1>
            <p className="text-gray-600 dark:text-zinc-200 text-sm sm:text-md">
              {first("description")}
            </p>
            <button
              className="button w-full"
              onClick={handleNext}
            >
              {first("actions.start")}
            </button>
          </motion.div>
        )}

        {start === 1 && (
          <motion.div
            key="question1"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto font-extrabold text-xl sm:text-4xl dark:text-zinc-200 ">
              {first("questions.1")}
            </h1>
            <Options
              options={[
                { pergunta: '1', id: '1', text: first("options.1") },
                { pergunta: '1', id: '2', text: first("options.2") },
                { pergunta: '1', id: '3', text: first("options.3") },
                { pergunta: '1', id: '4', text: first("options.4") },
                { pergunta: '1', id: '5', text: first("options.5") },
              ]}
              onAnswer={handleAnswer}
            />
            <button className='button w-full' onClick={handleNext}>{first("actions.next")}</button>
          </motion.div>
        )}

        {start === 2 && (
          <motion.div
            key="question2"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("questions.2")}
            </h1>
            <input
              className='w-full border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200 px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder={first("placeholders.name")}
              value={respostas['2'] || ''}
              onChange={(e) => handleAnswer({ id: '1', pergunta: '2', text: e.target.value })}
            />
            <button className='button w-full' onClick={handleNext}>{first("actions.next")}</button>
          </motion.div>
        )}

        {start === 3 && (
          <motion.div
            key="question3"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("questions.3")}
            </h1>
            <input
              className='w-full border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200 px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="email"
              placeholder={first("placeholders.email")}
              value={respostas['3'] || ''}
              onChange={(e) => handleAnswer({ id: '2', pergunta: '3', text: e.target.value })}
            />
            <button className='button w-full' onClick={handleNext}>{first("actions.next")}</button>
          </motion.div>
        )}

        {start === 4 && (
          <motion.div
            key="question4"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("questions.4")}
            </h1>
            <input
              className='w-full border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200 px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder={first("placeholders.phone")}
              value={respostas['4'] || ''}
              onChange={(e) => handleAnswer({ id: '3', pergunta: '4', text: e.target.value })}
            />
            <button className='button w-full' onClick={handleNext}>{first("actions.next")}</button>
          </motion.div>
        )}

        {start === 5 && (
          <motion.div
            key="question5"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("questions.5")}
            </h1>
            <input
              className='w-full border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200 px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder={first("placeholders.idea")}
              value={respostas['5'] || ''}
              onChange={(e) => handleAnswer({ id: '4', pergunta: '5', text: e.target.value })}
            />
            <button className='button w-full' onClick={handleNext}>{first("actions.next")}</button>
          </motion.div>
        )}

        {start === 6 && (
          <motion.div
            key="question6"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <button onClick={() => setStart(start - 1)} className='bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-200  hover:bg-zinc-200 transition-all size-6 rounded-full grid place-items-center absolute top-3 left-3'> {"<-"} </button>
            <p className='absolute top-4 left-12 text-sm text-zinc-500 dark:text-zinc-200 '>{first("step", { step: start, totalSteps: "6" })}</p>
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("questions.6")}
            </h1>
            <input
              className='w-full border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-200 px-4 py-2 rounded-md outline-none ring-azul hover:ring-1 focus:ring-2 transition-all'
              type="text"
              placeholder={first("placeholders.price")}
              value={respostas['6'] || ''}
              onChange={(e) => handleAnswer({ id: '4', pergunta: '6', text: e.target.value })}
            />
            <button className='button w-full' onClick={handleFinish}>{first("actions.finish")}</button>
          </motion.div>
        )}

        {start === 7 && (
          <motion.div
            key="finalScreen"
            className="w-4/5 sm:w-2/5 flex flex-col items-center justify-center gap-6 px-8 py-10 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50 text-center relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h1 className="text-preto dark:text-zinc-200 font-extrabold text-2xl sm:text-4xl">
              {first("done.title")}
            </h1>
            <p className="text-gray-600 dark:text-zinc-200 text-sm sm:text-md">
              {first("done.description")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="background">
        {Array.from({ length: 20 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ContactComponent;
