"use client";
import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  avatar: string;
}

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([
    { id: 1, name: "Novo perfil", avatar: "😊" },
  ]);

  const addProfile = () => {
    const newProfile: Profile = {
      id: Date.now(),
      name: "Novo perfil",
      avatar: "😊",
    };
    setProfiles([...profiles, newProfile]);
  };

  const removeProfile = (id: number) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      {/* Título centralizado */}
      <h1 className="text-2xl font-bold mb-8 text-center">
        Quem está assistindo?
      </h1>

      {/* Container dos perfis */}
      <div className="grid grid-cols-2 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-neutral-900 rounded-xl p-6 flex flex-col items-center shadow-md"
          >
            <div className="text-6xl mb-4">{profile.avatar}</div>
            <p className="text-lg font-semibold mb-4">{profile.name}</p>
            <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg mb-2">
              Entrar
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-2">
              Editar
            </button>
            <button
              onClick={() => removeProfile(profile.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Excluir
            </button>
          </div>
        ))}

        {/* Botão adicionar perfil */}
        <div
          onClick={addProfile}
          className="bg-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-700"
        >
          <div className="text-6xl mb-4">＋</div>
          <p className="text-lg">Adicionar perfil</p>
        </div>
      </div>

      {/* Botão para vitrine */}
      <button className="mt-12 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg">
        Ir para a vitrine (sem perfil)
      </button>
    </main>
  );
}
