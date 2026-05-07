/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
export type Gender = 'boy' | 'girl';

export interface Face {
  id: number;
  name: string;
  gender: Gender;
  imageUrl: string;
}

export const faces: Face[] = [
  { id: 1, name: "Micah Abalahin", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7643903_120.jpg?resize=200,200" },
  { id: 2, name: "Erika Abegg", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7212241_93.jpg?resize=200,200" },
  { id: 3, name: "Ingrid Abegg", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7193710_726.jpg?resize=200,200" },
  { id: 4, name: "Elie Christopher Abogo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7280449_997.jpg?resize=200,200" },
  { id: 5, name: "Francia Ludmila Abogo", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7637634_611.jpg?resize=200,200" },
  { id: 6, name: "Lily Ackerman", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7634707_649.jpg?resize=200,200" },
  { id: 7, name: "Sebastian Aguila", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8301231_227.jpg?resize=200,200" },
  { id: 8, name: "Elena Aldana", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7934427_276.jpg?resize=200,200" },
  { id: 9, name: "Blake Alderton", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274358_938.jpg?resize=200,200" },
  { id: 10, name: "Pierce Aldridge", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7666745_594.jpg?resize=200,200" },
  { id: 11, name: "Bethel Alemu", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921069_5.jpg?resize=200,200" },
  { id: 12, name: "Beza Alemu", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7150693_574.jpg?resize=200,200" },
  { id: 13, name: "Christian Jack Alfaro", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8354508_763.jpg?resize=200,200" },
  { id: 14, name: "Keira Alfaro", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7239786_48.jpg?resize=200,200" },
  { id: 15, name: "Erin Allen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7561682_184.jpg?resize=200,200" },
  { id: 16, name: "Lucy Allen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7156352_587.jpg?resize=200,200" },
  { id: 17, name: "Maya Faye Al-Mtwali", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7616467_913.jpg?resize=200,200" },
  { id: 18, name: "Alyssa Amaya", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274910_482.jpg?resize=200,200" },
  { id: 19, name: "Sebastian Amaya", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7638804_715.jpg?resize=200,200" },
  { id: 20, name: "Henry Amaya-Perez", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921298_273.jpg?resize=200,200" },
  { id: 21, name: "Derek Amberg", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7161165_682.jpg?resize=200,200" },
  { id: 22, name: "Elijah Amond", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7572992_436.jpg?resize=200,200" },
  { id: 23, name: "Madison Andrade Diaz", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278227_953.jpg?resize=200,200" },
  { id: 24, name: "Tyler Anglin", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7923730_580.jpg?resize=200,200" },
  { id: 25, name: "Andrew Antonio", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7173255_686.jpg?resize=200,200" },
  { id: 26, name: "Nicholas Araujo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7335655_636.jpg?resize=200,200" },
  { id: 27, name: "Azael Araya", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7640611_785.jpg?resize=200,200" },
  { id: 28, name: "Avalyn Arciaga", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274654_684.jpg?resize=200,200" },
  { id: 29, name: "Victoria Arias", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7590870_99.jpg?resize=200,200" },
  { id: 30, name: "Kelly Arras", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278400_828.jpg?resize=200,200" },
  { id: 31, name: "Molly Arras", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7172958_954.jpg?resize=200,200" },
  { id: 32, name: "Grace Artz", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7962454_791.jpg?resize=200,200" },
  { id: 33, name: "Sophia Ary", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7269196_562.jpg?resize=200,200" },
  { id: 34, name: "Lucas Aschenaki", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7973376_207.jpg?resize=200,200" },
  { id: 35, name: "Anthony Asmar", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8282263_375.jpg?resize=200,200" },
  { id: 36, name: "Raiden Atienza-Rosser", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7649994_291.jpg?resize=200,200" },
  { id: 37, name: "Dominic Atwater", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7989224_713.jpg?resize=200,200" },
  { id: 38, name: "Emma Bahdi", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7255217_225.jpg?resize=200,200" },
  { id: 39, name: "Jane Bahdi", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969601_269.jpg?resize=200,200" },
  { id: 40, name: "Jackson Bahr", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7850291_716.jpg?resize=200,200" },
  { id: 41, name: "Maddox Baig", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8313736_290.jpg?resize=200,200" },
  { id: 42, name: "Edward Baker", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930780_73.jpg?resize=200,200" },
  { id: 43, name: "Braeden Bakos", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7239945_378.jpg?resize=200,200" },
  { id: 44, name: "Antonella Balderrama", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7959784_300.jpg?resize=200,200" },
  { id: 45, name: "Benjamin Balducci", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7545156_789.jpg?resize=200,200" },
  { id: 46, name: "Elliot Baltazar Galdos", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8332371_528.jpg?resize=200,200" },
  { id: 47, name: "Robert Baney", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7217328_752.jpg?resize=200,200" },
  { id: 48, name: "Meredith Barker", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8297536_572.jpg?resize=200,200" }
];

type Filter = 'boys' | 'girls' | 'both';

export default function App() {
  const [filter, setFilter] = useState<Filter>('both');
  const [elos, setElos] = useState<Record<number, number>>({});
  const [currentPair, setCurrentPair] = useState<[Face, Face] | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Load ELOs from local storage
  useEffect(() => {
    const storedElos = localStorage.getItem('facemash_elos');
    if (storedElos) {
      try {
        setElos(JSON.parse(storedElos));
      } catch (e) {
        console.error('Failed to parse elos', e);
      }
    }
    pickNewPair('both');
  }, []);

  // Save to local storage whenever Elos change
  useEffect(() => {
    if (Object.keys(elos).length > 0) {
      localStorage.setItem('facemash_elos', JSON.stringify(elos));
    }
  }, [elos]);

  // Pick a new pair
  const pickNewPair = (currentFilter: Filter) => {
    let available = faces;
    if (currentFilter === 'boys') available = faces.filter(f => f.gender === 'boy');
    if (currentFilter === 'girls') available = faces.filter(f => f.gender === 'girl');

    if (available.length < 2) return;

    // Random pick
    const idx1 = Math.floor(Math.random() * available.length);
    let idx2 = Math.floor(Math.random() * available.length);
    while (idx1 === idx2) {
      idx2 = Math.floor(Math.random() * available.length);
    }

    setCurrentPair([available[idx1], available[idx2]]);
  };

  // On filter change, pick new pair
  useEffect(() => {
    pickNewPair(filter);
  }, [filter]);

  const handleChoice = (winnerId: number, loserId: number) => {
    const winnerElo = elos[winnerId] || 1200;
    const loserElo = elos[loserId] || 1200;
    
    const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));
    
    const k = 32;
    const newWinnerElo = Math.round(winnerElo + k * (1 - expectedWinner));
    const newLoserElo = Math.round(loserElo + k * (0 - expectedLoser));

    setElos(prev => ({
      ...prev,
      [winnerId]: newWinnerElo,
      [loserId]: newLoserElo
    }));

    pickNewPair(filter);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white flex flex-col items-center p-4">
      <header className="mb-8 mt-4 md:mt-12 text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest">
          IRETONMASH
        </h1>
      </header>

      <div className="mb-12 flex flex-wrap justify-center gap-4 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
        {(['girls', 'both', 'boys'] as Filter[]).map(f => (
          <button 
            key={f}
            className={`px-6 py-2 uppercase font-black text-lg border-4 border-transparent hover:border-black transition-all ${filter === f ? 'bg-black text-white border-black shadow-inner' : 'bg-white'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        {currentPair ? (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full justify-center">
            <button 
              className="group relative border-4 border-black p-3 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 transition-all"
              onClick={() => handleChoice(currentPair[0].id, currentPair[1].id)}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-black relative">
                <img 
                  src={currentPair[0].imageUrl} 
                  alt="Choice 1" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </button>
            
            <div className="text-3xl font-black p-6 bg-white text-black border-4 border-black aspect-square flex items-center justify-center rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 shrink-0 transform -rotate-12">
              OR
            </div>

            <button 
              className="group relative border-4 border-black p-3 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 transition-all"
              onClick={() => handleChoice(currentPair[1].id, currentPair[0].id)}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-black relative">
                <img 
                  src={currentPair[1].imageUrl} 
                  alt="Choice 2" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-3xl font-black uppercase tracking-widest animate-pulse border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Loading faces...</div>
        )}
      </main>

      <footer className="mt-16 mb-12 w-full flex justify-center">
        <button 
          className="border-4 border-black bg-white px-8 py-5 font-black text-2xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          onClick={() => setShowModal(true)}
        >
          View Leaderboard
        </button>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border-8 border-black p-8 md:p-12 max-w-2xl w-full shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] relative">
            <button 
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border-4 border-black font-black text-xl hover:bg-black hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="text-5xl font-black mb-8 uppercase border-b-4 border-black pb-4 inline-block">Coming Soon</h2>
            <p className="text-2xl font-bold uppercase leading-relaxed mb-6">
               Personal ranking algorithm is coming soon.
            </p>
            <ul className="text-lg font-bold uppercase space-y-4 list-disc list-inside">
              <li>See names of all faces</li>
              <li>Global Leaderboard</li>
              <li>Custom Elo Stats</li>
            </ul>
            <div className="mt-12 bg-black text-white p-4 text-center font-black uppercase tracking-widest">
              Please check back later
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

