
import React, { useState } from 'react';
import { Heart, Share2, Pause, Instagram, Facebook, Twitter } from 'lucide-react';

function SocialTaskVedio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(31);
  const totalDuration = 184; // 3:04 in seconds

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="">
      <h1 className="text-xl font-semibold text-gray-900">Thriller - Michael Jackson</h1>
      <div className="mt-5 flex justify-between w-full overflow-hidden">
        <div className="w-[55%] p-3 bg-white shadow-lg">
          {/* <div className="flex justify-between items-center mb-4">
           
            <button 
              className="text-gray-400 hover:text-gray-600"
              onClick={() => setShowShareModal(true)}
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div> */}

          <div className="relative mb-6 ">
            <img
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800"
              alt="Thriller"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-3 left-3 flex items-center space-x-2">
              <span className="text-sm text-white bg-black/60 px-2 py-1 rounded-full">Mirror</span>
              <span className="text-sm text-white">KendrickLemar</span>
            </div>
            <button className="absolute bottom-3 right-3 text-white hover:text-pink-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="h-1 bg-gray-200 rounded">
                <div 
                  className="h-1 bg-teal-600 rounded"
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalDuration)}</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Pause className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total points to be earned - </span>
                <span className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full">
                  100 Points
                </span>
              </div>
              <button className="w-full bg-gray-100 text-gray-400 py-2 rounded-md font-medium">
                Earn
              </button>
            </div>
          </div>
        </div>
        
      
        <div className="rounded-lg w-[40%] p-6 bg-white shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Share in a Post</h2>
            <button 
              onClick={() => setShowShareModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          <button className="w-full bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 mb-6">
            Create post
          </button>

          <div className="space-y-4">
            <p className="text-gray-600 font-medium">Share</p>
            <div className="flex justify-between">
              <a href="#" className="flex flex-col items-center space-y-1">
                <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center space-y-1">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600">Facebook</span>
              </a>
              <a href="#" className="flex flex-col items-center space-y-1">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600">X</span>
              </a>
              <a href="#" className="flex flex-col items-center space-y-1">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <img src="https://www.svgrepo.com/show/327400/logo-tiktok.svg" className="w-6 h-6 text-white" alt="TikTok" />
                </div>
                <span className="text-xs text-gray-600">TikTok</span>
              </a>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <input
                type="text"
                value="https://instagram.com/view/55e//"
                readOnly
                className="flex-1 text-sm border rounded-md px-3 py-2 bg-gray-50"
              />
              <button className="bg-teal-600 text-white text-sm px-4 py-2 rounded-md hover:bg-teal-700">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      
        
      </div>
    </div>
  );
}

export default SocialTaskVedio;