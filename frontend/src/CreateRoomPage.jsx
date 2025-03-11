
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { Copy, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";

function CreateRoomPage() {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (roomName.trim()) {
      const newRoomId = nanoid(10);
      setRoomId(newRoomId);
    }
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/feedback/${roomId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-10"
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="flex items-center text-white/80 hover:text-white mb-8 bg-white/10 px-4 py-2 rounded-lg transition-all"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </motion.button>

        {/* Room Creation */}
        {!roomId ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-8"
            >
              <h1 className="text-4xl font-extrabold tracking-tight">
                Create Your Room
              </h1>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="bg-indigo-100 p-3 rounded-xl"
              >
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </motion.div>
            </motion.div>

            <form onSubmit={handleCreateRoom} className="space-y-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <label htmlFor="roomName" className="block text-white/90 text-lg mb-3 font-medium">
                  Give your room a name
                </label>
                <input
                  type="text"
                  id="roomName"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl border-2 border-white/30 bg-white/20 text-white placeholder-white/60 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 transition-all text-lg"
                  placeholder="e.g., Team Feedback Round"
                  required
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
              >
                Create Room
                <Sparkles className="h-6 w-6" />
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Success Message */}
            <div className="bg-green-50/20 backdrop-blur-xl rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-green-100 p-3 rounded-full"
                >
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </motion.div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Room Created Successfully!</h2>
              <p className="text-white/80 text-center mb-6">
                Share this link to receive anonymous feedback:
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border-2 border-white/20"
              >
                <code className="flex-1 text-lg text-white/90 font-mono">
                  {window.location.origin}/feedback/{roomId}
                </code>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={copyToClipboard}
                  className={`p-2 rounded-lg transition-colors ${
                    copied
                      ? "bg-green-300 text-green-900"
                      : "bg-gray-200/30 text-white/80 hover:bg-gray-200/40"
                  }`}
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <Copy className="h-6 w-6" />
                  )}
                </motion.button>
              </motion.div>
            </div>

            {/* Go to Room Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/feedback/${roomId}`)}
              className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl hover:bg-gray-800 transition-colors shadow-lg text-lg font-semibold"
            >
              Go to Feedback Room
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default CreateRoomPage;
