import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";

import { Mail, MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";

export const Contact = () => {
  const { toast } = useToast();
  const accessKey = import.meta.env.VITE_WEB3_ACCESS_KEY;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [searchParams] = useSearchParams();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    botCheck: ''
  });

  // Pre-fill message if product parameter is present
  useEffect(() => {
    console.log(recaptchaSiteKey)
    const product = searchParams.get('product');
    if (product) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to request a quote for ${product}. Please provide pricing and availability information.\n\n`
      }));
    }
  }, [searchParams]);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    // Bot check
    if(formData.botCheck !== '') return;

    // reCAPTCHA validation
    if (!recaptchaToken) {
      toast({
        title: "reCAPTCHA Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive"
      });
      return;
    }

    const readyFormData = new FormData()

    readyFormData.append('access_key',accessKey)
    readyFormData.append('name', formData.name)
    readyFormData.append('email', formData.email)
    readyFormData.append('phone', formData.phone)
    readyFormData.append('message', formData.message)
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: readyFormData
    }).then((res) => res.json());

    if (response.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", phone: "", message: "", botCheck: "" });
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          {/* Contact Form */}
          <div className="animate-slide-in-left opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[150px] bg-background"
                  />
                </div>
                
                {/* Google reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={recaptchaSiteKey}
                    onChange={(token) => setRecaptchaToken(token)}
                    onExpired={() => setRecaptchaToken(null)}
                    onErrored={() => setRecaptchaToken(null)}
                  />
                </div>

                {/* Honeypot field for bots */}
                <input
                  type="text"
                  name="botCheck"
                  value={formData.botCheck}
                  onChange={(e) => setFormData({ ...formData, botCheck: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button type="submit" size="lg" className="w-full text-lg h-12">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-lg">Phone</div>
                    <a href="tel:+233535126757" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                      +233 535126757
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-lg">Location</div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      G8 Franco Estates | Ofankor Hills<br />
                      GW-0297-1056 | Accra – Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1 text-lg">Business Hours</div>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-24 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-3xl font-bold text-center mb-8">Visit Our Office</h3>
          <div className="w-full h-[400px] bg-muted rounded-2xl overflow-hidden relative group">
            {/* Placeholder for Map - In a real app, embed Google Maps iframe here */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-background/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-center transform transition-transform hover:scale-105 duration-300">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-3 animate-bounce" />
                <p className="font-bold text-lg">Find us at Ofankor Hills</p>
                <p className="text-muted-foreground">Accra, Ghana</p>
                <Button variant="outline" className="mt-4" onClick={() => window.open('https://maps.google.com/?q=G8+Franco+Estates+Ofankor+Hills+Accra', '_blank')}>
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Do you export internationally?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes, we export our agricultural commodities to various countries across the globe. We handle all necessary documentation and logistics to ensure a smooth delivery process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">What is the minimum order quantity?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Our minimum order quantity varies depending on the product. For most commodities like Cashew and Shea Butter, we typically work with container loads, but please contact us for specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">How do you ensure product quality?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                We work directly with verified farmers and suppliers. Our team conducts rigorous quality checks at sourcing points and before shipment to ensure all products meet international standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">Can I request product samples?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Yes, we can provide samples for serious inquiries. Please contact our sales team with your company details and specific product interest to arrange for samples.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
