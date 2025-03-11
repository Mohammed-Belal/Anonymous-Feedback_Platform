// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { MessageSquare, ArrowRight, Shield, Users, Lock } from 'lucide-react';

// // function HomePage() {
// //   const [roomCode, setRoomCode] = useState('');
// //   const navigate = useNavigate();

// //   const handleJoinRoom = (e) => {
// //     e.preventDefault();
// //     if (roomCode.trim()) {
// //         navigate(`/feedback/${roomCode}`);

// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
// //       <div className="max-w-6xl mx-auto px-4 py-16">
// //         <div className="text-center mb-16">
// //           <div className="flex justify-center mb-6">
// //             <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg">
// //               <MessageSquare className="h-16 w-16 text-white" />
// //             </div>
// //           </div>
// //           <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
// //             Anonymous Feedback Made Simple
// //           </h1>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //             Create a safe space for honest communication. No sign-ups required – just create 
// //             a room and start collecting authentic, anonymous feedback instantly.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-12 mb-16">
// //           <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
// //             <div className="flex items-center justify-between mb-6">
// //               <h2 className="text-3xl font-bold text-gray-900">Create Room</h2>
// //               <div className="bg-indigo-100 p-3 rounded-xl">
// //                 <Shield className="h-8 w-8 text-indigo-600" />
// //               </div>
// //             </div>
// //             <p className="text-gray-600 mb-8 text-lg">
// //               Start your feedback journey by creating a private room. Share the link 
// //               and collect honest feedback from your team.
// //             </p>
// //             <button
// //               onClick={() => navigate('/create')}
// //               className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl hover:bg-indigo-700 
// //                 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
// //             >
// //               Create Feedback Room
// //               <ArrowRight className="h-6 w-6" />
// //             </button>
// //           </div>

// //           <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
// //             <div className="flex items-center justify-between mb-6">
// //               <h2 className="text-3xl font-bold text-gray-900">Join Room</h2>
// //               <div className="bg-purple-100 p-3 rounded-xl">
// //                 <Users className="h-8 w-8 text-purple-600" />
// //               </div>
// //             </div>
// //             <form onSubmit={handleJoinRoom}>
// //               <div className="mb-6">
// //                 <label htmlFor="roomCode" className="block text-gray-700 text-lg mb-3 font-medium">
// //                   Have a room code?
// //                 </label>
// //                 <div className="relative">
// //                   <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// //                   <input
// //                     type="text"
// //                     id="roomCode"
// //                     value={roomCode}
// //                     onChange={(e) => setRoomCode(e.target.value)}
// //                     className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 
// //                       focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all
// //                       text-lg"
// //                     placeholder="Enter room code"
// //                   />
// //                 </div>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl hover:bg-purple-700 
// //                   transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
// //               >
// //                 Join Room
// //                 <ArrowRight className="h-6 w-6" />
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {[
// //             {
// //               icon: <Shield className="h-8 w-8 text-indigo-600" />,
// //               title: "100% Anonymous",
// //               description: "Your identity remains completely private. Share honest feedback without worry."
// //             },
// //             {
// //               icon: <Lock className="h-8 w-8 text-purple-600" />,
// //               title: "Secure Rooms",
// //               description: "Each feedback room is private and accessible only via unique codes."
// //             },
// //             {
// //               icon: <Users className="h-8 w-8 text-pink-600" />,
// //               title: "Easy Sharing",
// //               description: "Share room links instantly with your team or participants."
// //             }
// //           ].map((feature, index) => (
// //             <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
// //               <div className="bg-white/80 w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-sm">
// //                 {feature.icon}
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
// //               <p className="text-gray-600">{feature.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MessageSquare, ArrowRight, Shield, Users, Lock } from 'lucide-react';

// function HomePage() {
//   const [roomCode, setRoomCode] = useState('');
//   const navigate = useNavigate();

//   const handleJoinRoom = (e) => {
//     e.preventDefault();
//     if (roomCode.trim()) {
//       navigate(`/feedback/${roomCode}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <div className="text-center mb-16">
//           <div className="flex justify-center mb-6">
//             <div className="bg-indigo-600 p-4 rounded-2xl shadow-lg">
//               <MessageSquare className="h-16 w-16 text-white" />
//             </div>
//           </div>
//           <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             Anonymous Feedback Made Simple
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Create a safe space for honest communication. No sign-ups required – just create 
//             a room and start collecting authentic, anonymous feedback instantly.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 mb-16">
//           <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-3xl font-bold text-gray-900">Create Room</h2>
//               <div className="bg-indigo-100 p-3 rounded-xl">
//                 <Shield className="h-8 w-8 text-indigo-600" />
//               </div>
//             </div>
//             <p className="text-gray-600 mb-8 text-lg">
//               Start your feedback journey by creating a private room. Share the link 
//               and collect honest feedback from your team.
//             </p>
//             <button
//               onClick={() => navigate('/create')}
//               className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl hover:bg-indigo-700 
//                 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
//             >
//               Create Feedback Room
//               <ArrowRight className="h-6 w-6" />
//             </button>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-3xl font-bold text-gray-900">Join Room</h2>
//               <div className="bg-purple-100 p-3 rounded-xl">
//                 <Users className="h-8 w-8 text-purple-600" />
//               </div>
//             </div>
//             <form onSubmit={handleJoinRoom}>
//               <div className="mb-6">
//                 <label htmlFor="roomCode" className="block text-gray-700 text-lg mb-3 font-medium">
//                   Have a room code?
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     id="roomCode"
//                     value={roomCode}
//                     onChange={(e) => setRoomCode(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 
//                       focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all
//                       text-lg"
//                     placeholder="Enter room code"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl hover:bg-purple-700 
//                   transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
//               >
//                 Join Room
//                 <ArrowRight className="h-6 w-6" />
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Shield className="h-8 w-8 text-indigo-600" />,
//               title: "100% Anonymous",
//               description: "Your identity remains completely private. Share honest feedback without worry."
//             },
//             {
//               icon: <Lock className="h-8 w-8 text-purple-600" />,
//               title: "Secure Rooms",
//               description: "Each feedback room is private and accessible only via unique codes."
//             },
//             {
//               icon: <Users className="h-8 w-8 text-pink-600" />,
//               title: "Easy Sharing",
//               description: "Share room links instantly with your team or participants."
//             }
//           ].map((feature, index) => (
//             <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
//               <div className="bg-white/80 w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

































import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Shield, Users, Lock } from "lucide-react";

function HomePage() {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomCode.trim()) {
      navigate(`/feedback/${roomCode}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl shadow-lg">
              <MessageSquare className="h-16 w-16 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight tracking-wide">
            Anonymous Feedback <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-300">Made Simple</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Create a safe space for honest communication. No sign-ups required – just create a room and start collecting authentic, anonymous feedback instantly.
          </p>
        </motion.div>

        {/* Create / Join Room Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "Create Room",
              icon: <Shield className="h-8 w-8 text-indigo-600" />,
              description: "Start your feedback journey by creating a private room. Share the link and collect honest feedback.",
              action: () => navigate("/create"),
              btnText: "Create Feedback Room",
            },
            {
              title: "Join Room",
              icon: <Users className="h-8 w-8 text-purple-600" />,
              form: true,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{item.title}</h2>
                <div className="bg-white/30 p-3 rounded-xl">{item.icon}</div>
              </div>
              {item.form ? (
                <form onSubmit={handleJoinRoom}>
                  <div className="mb-6">
                    <label htmlFor="roomCode" className="block text-white/80 text-lg mb-3 font-medium">
                      Have a room code?
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                      <input
                        type="text"
                        id="roomCode"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300/50 
                        focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition-all text-lg bg-white/20 text-white placeholder-white/60"
                        placeholder="Enter room code"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl hover:bg-purple-700 
                      transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
                  >
                    Join Room
                    <ArrowRight className="h-6 w-6" />
                  </motion.button>
                </form>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={item.action}
                  className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl hover:bg-indigo-700 
                    transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
                >
                  {item.btnText}
                  <ArrowRight className="h-6 w-6" />
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-indigo-600" />,
              title: "100% Anonymous",
              description: "Your identity remains completely private. Share honest feedback without worry.",
            },
            {
              icon: <Lock className="h-8 w-8 text-purple-600" />,
              title: "Secure Rooms",
              description: "Each feedback room is private and accessible only via unique codes.",
            },
            {
              icon: <Users className="h-8 w-8 text-pink-600" />,
              title: "Easy Sharing",
              description: "Share room links instantly with your team or participants.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-md"
            >
              <div className="bg-white/40 w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
