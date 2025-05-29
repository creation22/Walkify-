import { useState } from 'react'

function App() {
  const [timer, setTimer] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center p-4'>
      <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-md'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='text-4xl font-bold text-indigo-600 mb-2'>
            🚶‍♂️ Walkifyy
          </div>
          <p className='text-gray-600 text-sm'>Stay healthy with walking reminders</p>
        </div>

      
        <div className='mb-8'>
          <label className='block text-gray-700 font-semibold mb-3 text-lg'>
            Set Timer (minutes)
          </label>
          <div className='relative'>
            <input 
              type="number" 
              value={timer}
              onChange={(e) => setTimer(e.target.value)}
              placeholder='Enter minutes'
              className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none text-lg text-center font-medium'
              min="1"
              max="120"
            />
            <div className='absolute right-3 top-3 text-gray-400 font-medium'>min</div>
          </div>
        </div>

      
        <div className='mb-8'>
          <p className='text-gray-600 text-sm mb-3'>Quick select:</p>
          <div className='grid grid-cols-4 gap-2'>
            {[15, 30, 45, 60].map((time) => (
              <button
                key={time}
                onClick={() => setTimer(time)}
                className='px-3 py-2 bg-gray-100 hover:bg-indigo-100 rounded-lg text-sm font-medium transition-colors'
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button className='w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg mb-6'>
          🔔 Start Reminder
        </button>

        
        <div className='bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center'>
          <div className='text-2xl mb-2'>🌿</div>
          <div className='text-green-800 font-semibold text-lg mb-1'>
            Time to Walk!
          </div>
          <p className='text-green-600 text-sm'>
            Take a break and go for a healthy walk
          </p>
        </div>

        {/* Footer */}
        <div className='text-center mt-6 text-xs text-gray-400'>
          Stay active • Stay healthy • Stay productive
        </div>
      </div>
    </div>
  )
}

export default App