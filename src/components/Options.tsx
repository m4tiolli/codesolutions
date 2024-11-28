import React, { useState } from 'react';

interface Option {
  pergunta: string;
  id: string;
  text: string;
}

interface QuestionProps {
  options: Option[];
  onAnswer: (selectedOption: Option) => void;
}

const QuestionWithOptions: React.FC<QuestionProps> = ({ options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.id);
    onAnswer(option);
  };

  return (
    <div className="w-full max-w-md">
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option.id}>
            <button
              className={`w-full py-3 px-4 text-left rounded-md font-medium border transition-all ${selectedOption === option.id
                  ? 'bg-azul text-white border-blue-500'
                  : 'bg-zinc-100 text-preto border-zinc-300 hover:bg-zinc-200'
                }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionWithOptions;
