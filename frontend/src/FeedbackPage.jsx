// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Send, ArrowLeft, CheckCircle, MessageSquare } from 'lucide-react';

// function FeedbackPage() {
//   const { roomId } = useParams();
//   const navigate = useNavigate();
//   const [feedback, setFeedback] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (feedback.trim()) {
//       // Here you would typically send the feedback to your backend
//       console.log('Feedback submitted:', feedback);
//       setSubmitted(true);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
//             <div className="mb-8">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <CheckCircle className="h-10 w-10 text-green-600" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 Thank You for Your Feedback!
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 Your feedback has been submitted anonymously. Your insights help make positive changes.
//               </p>
//             </div>
//             <button
//               onClick={() => navigate('/')}
//               className="bg-gray-900 text-white py-4 px-8 rounded-xl hover:bg-gray-800 
//                 transition-colors shadow-lg text-lg font-semibold"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <button
//           onClick={() => navigate('/')}
//           className="flex items-center text-gray-600 hover:text-gray-900 mb-8 
//             bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
//         >
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to Home
//         </button>

//         <div className="bg-white rounded-2xl shadow-xl p-10">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h1 className="text-4xl font-bold text-gray-900 mb-2">
//                 Share Your Thoughts
//               </h1>
//               <p className="text-gray-600">
//                 Room ID: <span className="font-mono">{roomId}</span>
//               </p>
//             </div>
//             <div className="bg-purple-100 p-3 rounded-xl">
//               <MessageSquare className="h-8 w-8 text-purple-600" />
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="feedback" className="block text-gray-700 text-lg mb-3 font-medium">
//                 Your Anonymous Feedback
//               </label>
//               <textarea
//                 id="feedback"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//                 className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 
//                   focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
//                   transition-all text-lg h-40 resize-none"
//                 placeholder="Share your honest thoughts here..."
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl 
//                 hover:bg-purple-700 transition-colors shadow-lg flex items-center 
//                 justify-center gap-3 text-lg font-semibold"
//             >
//               Submit Feedback
//               <Send className="h-6 w-6" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeedbackPage;

























import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, CheckCircle, MessageSquare } from 'lucide-react';

function FeedbackPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      // Here you would typically send the feedback to your backend
      console.log('Feedback submitted:', feedback);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Feedback!
              </h2>
              <p className="text-gray-600 text-lg">
                Your feedback has been submitted anonymously. Your insights help make positive changes.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-900 text-white py-4 px-8 rounded-xl hover:bg-gray-800 
                transition-colors shadow-lg text-lg font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 
            bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Share Your Thoughts
              </h1>
              <p className="text-gray-600">
                Room ID: <span className="font-mono">{roomId}</span>
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <MessageSquare className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="feedback" className="block text-gray-700 text-lg mb-3 font-medium">
                Your Anonymous Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-200 
                  transition-all text-lg h-40 resize-none"
                placeholder="Share your honest thoughts here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl 
                hover:bg-purple-700 transition-colors shadow-lg flex items-center 
                justify-center gap-3 text-lg font-semibold"
            >
              Submit Feedback
              <Send className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;