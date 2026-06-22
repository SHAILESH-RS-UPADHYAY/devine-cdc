import { Metadata } from "next";
import { ADDRESS, CONTACT, HOURS, SITE_CONFIG, WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | " + SITE_CONFIG.shortName,
  description: "Get in touch with Devine Child Development Centre. Book an appointment or visit our clinic in Gurgaon.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-devine-orange mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are here to answer your questions and support your child's journey. Reach out to us today to book an assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-devine-orange mb-8">
              Get In Touch
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-devine-teal/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-devine-teal" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">{ADDRESS.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-devine-peach/10 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-devine-peach" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Phone & WhatsApp</h3>
                  <p className="text-gray-600 mb-2">{CONTACT.phoneDisplay}</p>
                  <Button asChild variant="outline" className="text-devine-peach border-devine-peach hover:bg-devine-peach hover:text-white mt-2 w-full sm:w-auto whitespace-normal h-auto py-2 inline-flex items-center justify-center">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-devine-green/10 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-devine-green" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="text-gray-600 hover:text-devine-green transition-colors break-all sm:break-words block">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-devine-orange/10 p-3 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-devine-orange" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">{HOURS.days}</p>
                  <p className="text-gray-600 font-medium">{HOURS.display}</p>
                  <p className="text-sm text-gray-400 mt-1">Closed on Sundays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[350px] sm:h-[450px] lg:h-[600px] relative">
            {ADDRESS.googleMapsEmbed ? (
              <a href={ADDRESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group cursor-pointer">
                <iframe
                  src={ADDRESS.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Devine CDC Location Map"
                ></iframe>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="bg-white text-devine-orange px-6 py-3 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </div>
                </div>
              </a>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                Map loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
