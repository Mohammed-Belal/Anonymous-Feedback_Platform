import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageSquare, ArrowLeft, Send, ThumbsUp, Clock, Heart, Flag, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

function RoomPage() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [newFeedback, setNewFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reactions, setReactions] = useState({});

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem(`feedbacks-${roomId}`);
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, [roomId]);

  useEffect(() => {
    if (feedbacks.length > 0) {
      localStorage.setItem(`feedbacks-${roomId}`, JSON.stringify(feedbacks));
    }
  }, [feedbacks, roomId]);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!newFeedback.trim()) return;
    setIsSubmitting(true);

    setTimeout(() => {
      const newEntry = {
        id: Date.now().toString(),
        message: newFeedback,
        timestamp: new Date().toISOString(),
        likes: 0,
        reports: 0
      };

      setFeedbacks([newEntry, ...feedbacks]);
      setNewFeedback('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleReaction = (feedbackId, type) => {
    const key = `${type}-${feedbackId}`;
    if (reactions[key]) return;

    setFeedbacks(feedbacks.map(feedback =>
      feedback.id === feedbackId ? { ...feedback, [type]: feedback[type] + 1 } : feedback
    ));
    setReactions(prev => ({ ...prev, [key]: true }));
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
        </motion.button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <form onSubmit={handleSubmitFeedback} className="mb-12">
            <textarea
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-lg h-32 resize-none"
              placeholder="Your thoughts are valuable..."
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-4 px-8 rounded-xl hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg font-semibold"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              <Send className="h-6 w-6" />
            </motion.button>
          </form>

          <div className="space-y-4">
            {feedbacks.length === 0 ? (
              <p className="text-center text-gray-600 text-lg">No feedback yet.</p>
            ) : (
              feedbacks.map((feedback) => (
                <motion.div
                  key={feedback.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100"
                >
                  <p className="text-gray-800 text-lg mb-4">{feedback.message}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-2 inline" /> {formatTimestamp(feedback.timestamp)}
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleReaction(feedback.id, 'likes')}>
                        <Heart className="h-4 w-4 text-red-500" /> {feedback.likes}
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleReaction(feedback.id, 'reports')}>
                        <Flag className="h-4 w-4 text-orange-500" />
                      </motion.button>
                      <motion.button whileTap={{ scale: 0.9 }}>
                        <Share2 className="h-4 w-4 text-blue-500" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RoomPage;












