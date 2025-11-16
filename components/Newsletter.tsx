import React, { useState } from 'react';
import { Send, Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-16 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto container-padding">
        <div className="max-w-lg mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
            
            {/* Decorative wave */}
            <div className="mb-6">
              <svg className="w-full h-4 text-coral-500" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C10 0 20 10 30 5C40 0 50 10 60 5C70 0 80 10 90 5C95 2.5 100 7.5 100 5V10H0V5Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Title */}
            <h3 className="heading-sm text-center mb-4">Newsletter</h3>

            {/* Description */}
            <p className="text-center text-body mb-6 text-sm">
              Join 25,000+ developers! Get the latest programming tutorials and tech insights delivered to your inbox.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500 transition-all duration-200"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-coral disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </span>
                )}
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-4">
              By signing up, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;