import { link } from "fs";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl flex items-center font-bold mb-4 text-primary">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-primary">LAMORADOGH</span>
            </h3>
            
            <p className="text-background/80 mb-6">
              Your trusted agricultural commodity trading partner across Ghana. Sourcing, trading, and distributing HIGH Grade farm-produced goods.
            </p>
            
            {/* Social Media Links with Actual Logos */}
            <div className="flex space-x-3">
              {[
                { 
                  name: 'Facebook', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  url: 'https://facebook.com/lamorado',
                  color: 'hover:text-[#1877F2]'
                },
                { 
                  name: 'Instagram', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.816 3.73 13.665 3.73 12.368s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-10.368c-.517 0-.933.416-.933.933s.416.933.933.933c.517 0 .933-.416.933-.933s-.416-.933-.933-.933zm1.866 10.368c-1.297 0-2.448-.49-3.323-1.297-.906-.875-1.396-2.026-1.396-3.323s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                    </svg>
                  ),
                  url: 'https://instagram.com/lamorado',
                  color: 'hover:text-[#E4405F]'
                },
                { 
                  name: 'Twitter', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  ),
                  url: 'https://x.com/LamoradoGH',
                  color: 'hover:text-[#1DA1F2]'
                },
                { 
                  name: 'LinkedIn', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  url: 'https://linkedin.com/company/lamorado',
                  color: 'hover:text-[#0A66C2]'
                },
                { 
                  name: 'YouTube', 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                  url: 'https://youtube.com/lamorado',
                  color: 'hover:text-[#FF0000]'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-background/70 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-background/80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors duration-300 hover:pl-2 block transform hover:translate-x-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors duration-300 hover:pl-2 block transform hover:translate-x-1">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors duration-300 hover:pl-2 block transform hover:translate-x-1">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-300 hover:pl-2 block transform hover:translate-x-1">
                  About
                </a>
              </li>
            </ul>
          </div>
          


          {/* Social Media Section with Branded Buttons */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
              Connecting African agriculture to the world. Premium quality commodities sourced with integrity.
            </p>
              
              {/* Brand-colored Social Media Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { 
                    name: 'Facebook', 
                    color: 'bg-[#1877F2] hover:bg-[#166FE5]',
                    icon: (
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Instagram', 
                    color: 'bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90',
                    icon: (
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.816 3.73 13.665 3.73 12.368s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-10.368c-.517 0-.933.416-.933.933s.416.933.933.933c.517 0 .933-.416.933-.933s-.416-.933-.933-.933zm1.866 10.368c-1.297 0-2.448-.49-3.323-1.297-.906-.875-1.396-2.026-1.396-3.323s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Twitter', 
                    link: 'https://x.com/lamoradoGH',
                    color: 'bg-[#1DA1F2] hover:bg-[#1A91DA]',
                    icon: (
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'LinkedIn',
                    link: 'https://linkedin.com/in/lamorado-enterprise-2a3635397', 
                    color: 'bg-[#0A66C2] hover:bg-[#004182]',
                    icon: (
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white flex items-center justify-center py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm font-medium space-x-2`}
                  >
                    {social.icon}
                    <span className="text-xs">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} LAMORADOGH. All rights reserved.</p>
            
            {/* Social Media Links in Bottom Bar */}
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com/lamorado`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-primary transition-colors duration-300 text-sm flex items-center space-x-1"
                >
                  <span>{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};