import { useState } from 'react';
import api from '../api/axios';

export default function Invite() {
  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault();

    try {
      await api.post(
        '/users/request-invite',
        {
          name,
          email,
        },
      );

      alert(
        'Invite Request Submitted',
      );

      setName('');
      setEmail('');
    } catch {
      alert('Error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2">
          WeatherGuard
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Request Invite
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value,
              )
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition duration-200"
          >
            Request Invite
          </button>
        </form>
      </div>
    </div>
  );
}