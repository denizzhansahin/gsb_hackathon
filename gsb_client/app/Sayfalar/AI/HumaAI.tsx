'use client';

import { useState } from 'react';

interface HomeAIProps {
  sayfa_bilgi?: string;
}

export default function HomeAI({ sayfa_bilgi = '' }: HomeAIProps) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const combinedPrompt = `${sayfa_bilgi ? sayfa_bilgi + ' ' : ''}${prompt}`;

    try {
      const result = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: combinedPrompt }),
      });

      if (!result.ok) {
        throw new Error(`Error: ${result.status}`);
      }

      const data = await result.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error sending prompt:', error);
      setResponse('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 font-sans text-center">
      <h1 className="text-2xl font-bold mb-4">Prompt Gönder ve Sonucu Gör</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Prompt yazın"
          className="px-3 py-2 w-72 mr-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white border-none rounded cursor-pointer hover:bg-blue-700"
        >
          Gönder
        </button>
      </form>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        response && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Sonuç:</h3>
            <p>{response}</p>
          </div>
        )
      )}
    </div>
  );
}