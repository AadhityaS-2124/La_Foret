import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: Comment[];
  caption: string;
  liked: boolean;
  productId?: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'brand';
  text: string;
  timestamp: string;
}

export const InstagramView: React.FC = () => {
  const { navigate } = useRouter();
  const { addToCart, setCartOpen } = useCart();
  
  // Navigation State: 'profile' | 'messages'
  const [activeTab, setActiveTab] = useState<'profile' | 'messages'>('profile');
  const [followed, setFollowed] = useState(false);

  // Post State mapped to storefront products
  const [posts, setPosts] = useState<InstagramPost[]>([
    {
      id: "post1",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkUDPIZYsSunFaI37pZRQsG8zb6j11WED8o55Iusui1MhkwfjIDvXjpSU00rJ9jD8ZVS6zHpwLe3rodJA0J2-Ox2616Pt53qAvr5__y2jJAOVwRJnkgKGa_IM-TVhg66eEhHQI4VSOx58W_o6BgjtzTd7tTxMyID6HoKIsfd4Oreye4qLM7-DlEBEbZkJoKt8N9Ayg-NcfZO43mAswq3zm6KPNNSVHBb08oundm5lhuSLzkq_XMcx5RRvzcnKnmk9M_K5Vol6CjNk",
      likes: 421,
      liked: false,
      productId: "01", // Structural Blazer
      caption: "The silhouette of the wool coat against studio shadows. Form follows function.",
      comments: [
        { id: "1", username: "arch_maven", text: "This blazer geometry is outstanding.", timestamp: "2h" },
        { id: "2", username: "minimalist_living", text: "Is this raw linen heavyweight?", timestamp: "1h" },
        { id: "3", username: "kyoto_design", text: "Atelier looks so calm and focused.", timestamp: "30m" }
      ]
    },
    {
      id: "post2",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRR5MSf6-XLJ--c6KlJyXPfa3287xxxCE7W6MmBUOB4G7fV-wwCTy4NkMacnsgl5xCsLKWPvqECO6o0uxE8aJp4lrKd-k-A52EMnsxTfDpXFNyCcoGIo18dU0EjiaUQ2z0i1yHwzqDsUo_LWkOMiePynOugq5pvdjnUIZAUmZZrJFaUD6QD7EJNduZlueaYeiNuf8u1p-0P7ghtciQiSkB0ziyd1CUUwRReakyETnzvq4tZanaF1EKHSnIH1AeTS8NZsuBVqfB0U",
      likes: 312,
      liked: false,
      productId: "01", // Structural Blazer detail
      caption: "Lapel geometry. Stitched by hand in Kyoto using Belgian organic linen.",
      comments: [
        { id: "1", username: "nordic_craft", text: "Beautiful detailing. Truly raw.", timestamp: "3h" },
        { id: "2", username: "tange_tribute", text: "Brutalist simplicity. Love it.", timestamp: "2h" }
      ]
    },
    {
      id: "post3",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdss5TBTALm25B5dPIonxKrtPCuDpHp1F74KU_BmCNw1XGJf2tDkPbs5VP5a-zIct5XfGljHCdDrveufgfbOkM8VG90agtoHJ4GX0v2gYoACSucvM6C6VOXt4p_8AfebRNFbnw4G6tHU0oZusfoP5l2ISX8gVHso93u211Xvel4DVZOb4zGB6cjgQ8yqX9eGtS_NJD9wUWGptSrDKvBsHeBkdaNSlYyGGZHfL54lQb-2ehBQpFOZ09P0CSR0B2VPErjYb95MJ625w",
      likes: 290,
      liked: false,
      productId: "02", // Column Trouser
      caption: "Stone column trousers folded precisely. Raw textures and architectural cuts.",
      comments: [
        { id: "1", username: "flax_lover", text: "Hemp cotton blend has amazing texture.", timestamp: "1d" }
      ]
    },
    {
      id: "post4",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxY-2a09E3NVufAzWPgGXao70cl7XzXNXn83RBmGZl7OdKH8svZd60gk4kCQk5qmN5Ih07R9uSywEbATegQGZG1dJE-aIfkpw9ZNBf4fczsief5G_ZnuNRGLEDnSswVlduESKf4kxlpiHby_2slZNPWBys-zyIjc48V6_xMaXvKYhtA_P8vZxW5B6gitLUxYt5l7ZLB4AoEUoZDKz-IIylcvBCbp5aeA6XOxylV4E4CBZXcB6cGTqOtH3HlFFBHO9RpPjCpACQRwA",
      likes: 543,
      liked: false,
      productId: "03", // Sculptural Knit
      caption: "Merino wool draping. Structural mock neck. Soft cocoon silhouette.",
      comments: [
        { id: "1", username: "knit_obsessed", text: "This drape is so cozy yet architectural.", timestamp: "4h" }
      ]
    },
    {
      id: "post5",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
      likes: 387,
      liked: false,
      productId: "04", // Minimal Linen Shirt
      caption: "Tailoring details of our Minimal Linen Shirt in organic cream.",
      comments: []
    },
    {
      id: "post6",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800",
      likes: 476,
      liked: false,
      productId: "05", // Atelier Slipper
      caption: "Vegetable tanned leather atelier slippers. origami folded structure.",
      comments: []
    }
  ]);

  // Selected Lightbox Post State
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const selectedPost = posts.find(p => p.id === selectedPostId);

  // Associated Product for shopping tags
  const associatedProduct = selectedPost && selectedPost.productId
    ? products.find(p => p.id === selectedPost.productId)
    : null;

  // Form comments
  const [commentInput, setCommentInput] = useState('');

  // Messaging (DM) State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: "m1", sender: 'brand', text: "Welcome to La Forêt communications. How can we assist you with our objects?", timestamp: "12:00 PM" }
  ]);
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Chat window scroll ref
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  // Handle Like
  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  // Add Comment
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim() || !selectedPostId) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      username: 'user_anonymous',
      text: commentInput.trim(),
      timestamp: '1s'
    };

    setPosts(posts.map(post => {
      if (post.id === selectedPostId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));

    setCommentInput('');
  };

  // Send Direct Message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const userText = messageInput.trim();
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setMessageInput('');
    setIsTyping(true);

    // Dynamic brand automated responses
    setTimeout(() => {
      let replyText = "Thank you for contacting our Kyoto atelier. Our team will review your message and reply shortly.";
      const query = userText.toLowerCase();

      if (query.includes('blazer') || query.includes('coat')) {
        replyText = "Our Structural Blazer is crafted from 100% Belgian Organic Linen. It is currently in stock in limited quantities.";
      } else if (query.includes('trouser') || query.includes('pants')) {
        replyText = "The Column Trouser in stone cotton-hemp is available. Sizing follows a straight high-waist cut.";
      } else if (query.includes('shipping') || query.includes('delivery')) {
        replyText = "We offer complimentary shipping within Japan. International delivery to US/EU takes 5-9 business days.";
      } else if (query.includes('size') || query.includes('fit')) {
        replyText = "Our garments are engineered for an architectural, relaxed drape. We suggest taking your standard EU size.";
      }

      const brandMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'brand',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages(prev => [...prev, brandMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-[#ffffff] font-sans antialiased text-[#262626]">
      {/* 1. LEFT SIDEBAR NAVIGATION (Desktop) */}
      <aside className="hidden md:flex flex-col justify-between w-64 h-screen fixed left-0 top-0 border-r border-[#dbdbdb] bg-[#ffffff] px-3 py-6 z-40">
        <div className="space-y-8">
          {/* Logo */}
          <div className="px-3 pt-2">
            <button
              onClick={() => { setActiveTab('profile'); setSelectedPostId(null); }}
              className="font-serif italic font-bold text-2xl tracking-normal text-left block border-0 bg-transparent cursor-pointer p-0 select-none"
            >
              Insta✦gram
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <button
              onClick={() => navigate('')}
              className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-[#fafafa] transition-colors text-left font-medium text-sm text-[#262626]"
            >
              <span className="material-symbols-outlined text-[24px]">home</span>
              <span>Home (Store)</span>
            </button>

            <button
              onClick={() => alert('Search feature is disabled for this storefront demo.')}
              className="w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-[#fafafa] transition-colors text-left font-medium text-sm text-[#262626]"
            >
              <span className="material-symbols-outlined text-[24px]">search</span>
              <span>Search</span>
            </button>

            <button
              onClick={() => { setActiveTab('messages'); setSelectedPostId(null); }}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-[#fafafa] transition-colors text-left font-medium text-sm ${
                activeTab === 'messages' ? 'font-bold' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[24px]">mail</span>
                <span>Messages</span>
              </div>
              <span className="bg-[#fe0169] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
            </button>

            <button
              onClick={() => { setActiveTab('profile'); setSelectedPostId(null); }}
              className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-[#fafafa] transition-colors text-left font-medium text-sm ${
                activeTab === 'profile' ? 'font-bold bg-[#fafafa]/80' : ''
              }`}
            >
              <span className="material-symbols-outlined text-[24px] text-accent-sage">account_circle</span>
              <span>Profile</span>
            </button>
          </nav>
        </div>

        {/* Studio Branding */}
        <div className="px-3 text-[11px] text-[#8e8e8e] uppercase tracking-wider">
          La Forêt Atelier
        </div>
      </aside>

      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 left-0 w-full h-12 bg-white border-b border-[#dbdbdb] flex justify-between items-center px-4 z-40">
        <button
          onClick={() => { setActiveTab('profile'); setSelectedPostId(null); }}
          className="font-serif italic font-bold text-lg tracking-normal"
        >
          Insta✦gram
        </button>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('')}>
            <span className="material-symbols-outlined text-[22px] block">storefront</span>
          </button>
          <button onClick={() => { setActiveTab('messages'); setSelectedPostId(null); }} className="relative">
            <span className="material-symbols-outlined text-[22px] block">mail</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#fe0169] rounded-full border border-white" />
          </button>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-12 bg-white border-t border-[#dbdbdb] flex justify-around items-center z-40">
        <button onClick={() => navigate('')} className="py-2">
          <span className="material-symbols-outlined text-[24px]">home</span>
        </button>
        <button onClick={() => { setActiveTab('messages'); setSelectedPostId(null); }} className={`py-2 ${activeTab === 'messages' ? 'text-black' : 'text-[#8e8e8e]'}`}>
          <span className="material-symbols-outlined text-[24px]">mail</span>
        </button>
        <button onClick={() => { setActiveTab('profile'); setSelectedPostId(null); }} className={`py-2 ${activeTab === 'profile' ? 'text-black' : 'text-[#8e8e8e]'}`}>
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
        </button>
      </div>

      {/* 2. MAIN CONTENT REGION */}
      <div className={`flex-1 md:pl-64 bg-[#ffffff] flex flex-col h-screen pt-12 pb-12 md:pt-0 md:pb-0 ${
        activeTab === 'profile' ? 'overflow-y-auto' : 'overflow-hidden'
      }`}>
        {activeTab === 'profile' ? (
          /* ================= PROFILE VIEW ================= */
          <div className="max-w-4xl w-full mx-auto px-4 md:px-10 py-10 flex-grow">
            {/* User Profile Info Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16 border-b border-[#dbdbdb] pb-10 mb-8 text-center sm:text-left">
              {/* Avatar circle */}
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border border-[#dbdbdb] p-1 flex-shrink-0 bg-[#fafafa]">
                <div className="w-full h-full rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-headline-md text-2xl tracking-tighter">
                  LF
                </div>
              </div>

              {/* Bio & Actions */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <h1 className="text-xl font-light tracking-wide text-[#262626]">laforet_atelier</h1>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFollowed(!followed)}
                      className={`px-6 py-1.5 font-sans text-xs font-semibold rounded transition-colors ${
                        followed
                          ? 'bg-[#efefef] text-black border border-[#dbdbdb]'
                          : 'bg-[#0095f6] text-white hover:bg-[#1877f2]'
                      }`}
                    >
                      {followed ? 'Following' : 'Follow'}
                    </button>
                    <button
                      onClick={() => { setActiveTab('messages'); setSelectedPostId(null); }}
                      className="px-6 py-1.5 bg-[#efefef] text-[#262626] font-sans text-xs font-semibold rounded hover:bg-[#dbdbdb] transition-colors"
                    >
                      Message
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center sm:justify-start gap-10 text-sm text-[#262626]">
                  <span><strong className="font-semibold">6</strong> posts</span>
                  <span><strong className="font-semibold">14.2k</strong> followers</span>
                  <span><strong className="font-semibold">0</strong> following</span>
                </div>

                {/* Bio text */}
                <div className="text-sm leading-relaxed text-[#262626]">
                  <strong className="font-semibold block">La Forêt</strong>
                  <span className="text-[#8e8e8e]">Design Studio</span><br />
                  Silence, structure, and zero-waste pattern-making.<br />
                  Kyoto Machiya, JP • Copenhagen, DK.<br />
                  <button onClick={() => navigate('')} className="text-[#00376b] font-medium hover:underline border-0 bg-transparent p-0 cursor-pointer text-xs">laforet.com</button>
                </div>
              </div>
            </div>

            {/* Profile Grid Tabs */}
            <div className="flex justify-center border-b border-[#dbdbdb] mb-6">
              <span className="flex items-center gap-1.5 py-4 border-t border-black -mt-[1px] font-semibold text-xs uppercase tracking-widest text-[#262626]">
                <span className="material-symbols-outlined text-[16px] block">grid_on</span>
                POSTS
              </span>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-3 gap-1 md:gap-7">
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className="aspect-square bg-[#fafafa] relative overflow-hidden group cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[600ms]"
                    src={post.image}
                    alt={post.caption}
                  />
                  {/* Hover stats overlays */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-sm font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px] fill-white">favorite</span>
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px] fill-white">chat_bubble</span>
                      {post.comments.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ================= MESSAGING VIEW (DIRECT MESSAGES) ================= */
          <div className="flex-grow flex items-stretch max-w-5xl w-full mx-auto bg-white border-x border-[#dbdbdb] h-[calc(100vh-48px)] md:h-screen overflow-hidden">
            {/* Left DM Panel: Chat list (w-80) */}
            <div className="hidden sm:flex w-80 border-r border-[#dbdbdb] flex-col bg-white h-full overflow-y-auto">
              <div className="h-16 px-6 border-b border-[#dbdbdb] flex items-center justify-center font-semibold text-sm flex-shrink-0 bg-white">
                laforet_atelier
              </div>
              <div className="flex-1 overflow-y-auto">
                <button className="w-full flex items-center gap-3 px-6 py-4 bg-[#fafafa] border-b border-primary/5 text-left outline-none">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    LF
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-xs text-[#262626]">laforet_atelier</span>
                      <span className="text-[10px] text-[#8e8e8e]">Active</span>
                    </div>
                    <p className="text-xs text-[#8e8e8e] truncate font-light">
                      {chatMessages[chatMessages.length - 1]?.text}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right DM Panel: Chat Window */}
            <div className="flex-1 flex flex-col justify-between bg-white h-full overflow-hidden">
              {/* Chat Window Header */}
              <div className="h-16 px-6 border-b border-[#dbdbdb] flex items-center justify-between bg-white flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                    LF
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs text-[#262626]">laforet_atelier</span>
                    <span className="text-[10px] text-[#8e8e8e] leading-none">Design Studio • Active Now</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="text-secondary hover:text-primary transition-colors py-1 outline-none"
                >
                  <span className="material-symbols-outlined text-[20px] block">info</span>
                </button>
              </div>

              {/* Chat Message Logs (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2.5 max-w-[70%]`}>
                      {msg.sender === 'brand' && (
                        <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[8px] flex-shrink-0 mt-0.5">
                          LF
                        </div>
                      )}
                      <div className="flex flex-col">
                        <div
                          className={`px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                            msg.sender === 'user'
                              ? 'bg-[#0095f6] text-white rounded-tr-none'
                              : 'bg-[#efefef] text-[#262626] rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                        <span className={`text-[9px] text-[#8e8e8e] mt-1 ${
                          msg.sender === 'user' ? 'text-right' : 'text-left'
                        }`}>
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Simulated Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2.5 max-w-[70%]">
                      <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[8px] flex-shrink-0">
                        LF
                      </div>
                      <div className="bg-[#efefef] px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#8e8e8e] rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-[#8e8e8e] rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-[#8e8e8e] rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Message Input form (Fixed at bottom of chat panel) */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-[#dbdbdb] bg-white flex gap-3 flex-shrink-0 z-10">
                <input
                  type="text"
                  required
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 bg-[#fafafa] border border-[#dbdbdb] rounded-full px-5 py-2.5 text-xs outline-none focus:border-[#8e8e8e] text-black"
                />
                <button
                  type="submit"
                  className="text-[#0095f6] hover:text-[#00376b] font-semibold text-xs px-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* 3. LIGHTBOX DETAILED POST VIEW MODAL (WITH SHOP PRODUCT CARD) */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedPostId(null)}
        >
          {/* Global Close Button in top-right corner of screen */}
          <button
            onClick={() => setSelectedPostId(null)}
            className="absolute top-4 right-4 text-white hover:opacity-85 z-50 p-2"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>

          {/* Main Lightbox Frame */}
          <div
            className="w-full max-w-4xl bg-white text-[#262626] border border-[#dbdbdb] relative flex flex-col md:flex-row items-stretch overflow-hidden h-[90vh] md:h-[600px] z-10"
            style={{ borderRadius: '0px' }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content frame
          >
            {/* Left Column: Post Photo (60%) */}
            <div className="w-full md:w-[60%] bg-[#fafafa] flex items-center justify-center relative overflow-hidden h-1/2 md:h-full flex-shrink-0 border-b md:border-b-0 md:border-r border-[#dbdbdb]">
              <img
                className="w-full h-full object-cover"
                src={selectedPost.image}
                alt={selectedPost.caption}
              />
            </div>

            {/* Right Column: Profile details, comments, and Shopping Tag (40%) */}
            <div className="w-full md:w-[40%] flex flex-col justify-between h-1/2 md:h-full bg-white relative overflow-hidden">
              
              {/* Panel Header */}
              <div className="p-4 border-b border-[#dbdbdb] flex items-center justify-between bg-white flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[10px]">
                    LF
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs">laforet_atelier</span>
                    <span className="text-[10px] text-accent-sage leading-none">Kyoto, Japan</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPostId(null)}
                  className="md:hidden text-[#8e8e8e] hover:text-[#262626] transition-colors py-1"
                >
                  <span className="material-symbols-outlined text-[20px] block">close</span>
                </button>
              </div>

              {/* Scrollable Comments Log Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white text-xs">
                {/* Caption as the first comment */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-[8px] flex-shrink-0">
                    LF
                  </div>
                  <div>
                    <span className="font-semibold mr-1.5">laforet_atelier</span>
                    <span className="text-[#262626] font-light leading-relaxed">{selectedPost.caption}</span>
                    <span className="block text-[9px] text-[#8e8e8e] mt-1">1d</span>
                  </div>
                </div>

                {/* User comments list */}
                {selectedPost.comments.length === 0 ? (
                  <div className="py-12 text-center text-[#8e8e8e] font-light">
                    No comments yet. Be the first to share reflections.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedPost.comments.map((comment) => (
                      <div key={comment.id} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#8e8e8e]/20 text-[#262626] flex items-center justify-center font-bold text-[8px] flex-shrink-0">
                          {comment.username.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <span className="font-semibold mr-1.5">{comment.username}</span>
                          <span className="text-[#262626] font-light leading-relaxed">{comment.text}</span>
                          <span className="block text-[9px] text-[#8e8e8e] mt-1">{comment.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product tag details (Bridges social feed back to the store) */}
              {associatedProduct && (
                <div className="p-4 border-t border-[#dbdbdb] bg-[#fafafa] flex items-center justify-between gap-3 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 object-cover border border-[#dbdbdb] grayscale" src={associatedProduct.image} alt={associatedProduct.name} />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-primary">{associatedProduct.name}</span>
                      <span className="text-[#8e8e8e]">${associatedProduct.price} USD</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <button
                      onClick={() => {
                        addToCart(associatedProduct);
                        setCartOpen(true);
                      }}
                      className="bg-accent-sage text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 hover:bg-[#6c746c] transition-colors"
                      style={{ borderRadius: '0px' }}
                    >
                      Add to Bag
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPostId(null);
                        navigate(`objects/${associatedProduct.id}`);
                      }}
                      className="text-[#0095f6] text-[10px] font-semibold hover:underline"
                    >
                      Details
                    </button>
                  </div>
                </div>
              )}

              {/* Interaction Panel footer & comment submit input */}
              <div className="border-t border-[#dbdbdb] bg-white flex-shrink-0">
                {/* Actions row */}
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button onClick={() => handleLikePost(selectedPost.id)} className="transition-transform active:scale-125">
                      <span className={`material-symbols-outlined text-[24px] block ${
                        selectedPost.liked ? 'text-[#fe0169] fill-[#fe0169]' : 'text-black'
                      }`}>
                        favorite
                      </span>
                    </button>
                    <button onClick={() => document.getElementById('comment-input')?.focus()}>
                      <span className="material-symbols-outlined text-[24px] block text-black">chat_bubble</span>
                    </button>
                  </div>
                  <button onClick={() => alert('Post saved to collection.')}>
                    <span className="material-symbols-outlined text-[24px] block text-black">bookmark</span>
                  </button>
                </div>

                {/* Likes count */}
                <div className="px-3 pb-3 font-semibold text-xs">
                  {selectedPost.likes} likes
                </div>

                {/* Comment Form */}
                <form onSubmit={handleAddComment} className="border-t border-[#dbdbdb] px-3 py-2 flex gap-2">
                  <input
                    type="text"
                    id="comment-input"
                    required
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 bg-transparent border-none text-xs outline-none focus:ring-0 text-black py-1.5"
                  />
                  <button
                    type="submit"
                    className="text-[#0095f6] hover:text-[#00376b] font-semibold text-xs px-2"
                  >
                    Post
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
