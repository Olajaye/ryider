import { Clock, Music } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router';

const SocialTask = () => {
  const tasks = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: "Thriller - Michael Jackson",
    category: "Music",
    description: "Earn Money, Enjoy Music. Like, comment, listen to, and share Michael Jackson's \"Thriller\" to complete this task and boost your earnings.",
    completedCount: 50,
    totalCount: 120,
  }));
  
  return (
    <div className="bg-gray-50">
      <div className=" mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Available tasks</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=400&h=200"
                  alt="Music background"
                  className="w-full h-[50px] object-cover"
                />
              </div>
              <div className=" flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <Music className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-black text-xs px-2 py-1 ">
                  • {task.completedCount} of {task.totalCount} people already completed
                  </div>
                </div>
                <div className="text-black text-xs px-2 py-1 flex items-center  space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Task 1</span>
                </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{task.category}</p>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{task.description}</p>
                <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  <Link to={'/dashboard/vedio'}>Do task</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialTask