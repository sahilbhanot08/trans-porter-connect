import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, MapPin, Clock, Shield, Star, Users, Zap, CreditCard } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import VehicleSelector from '@/components/VehicleSelector';
import BookingFlow from '@/components/BookingFlow';
import DriverProfile from '@/components/DriverProfile';
import LiveTracking from '@/components/LiveTracking';
import PricingCard from '@/components/PricingCard';

const Index = () => {
  // Ref for "services" section
  const vehicleRef = useRef<HTMLDivElement | null>(null);

  // Handler to scroll to vehicle selection (used for booking and hero CTA)
  const scrollToVehicleSection = () => {
    if (vehicleRef.current) {
      vehicleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TransPorter</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#tracking" className="text-gray-600 hover:text-blue-600 transition-colors">Track</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              {/* <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Driver Sign Up
              </Button> */}
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={scrollToVehicleSection}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onBookTruckClick={scrollToVehicleSection} />

      {/* Vehicle Selection */}
      <section id="services" className="py-16 bg-white" ref={vehicleRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Vehicle</h2>
            <p className="text-lg text-gray-600">From small deliveries to large shipments, we've got you covered</p>
          </div>
          <VehicleSelector />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TransPorter?</h2>
            <p className="text-lg text-gray-600">Logistics made simple, reliable, and efficient</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Verified Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">All drivers are background-checked and vehicle-verified for your safety</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track your shipment live with GPS and get delivery updates</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Upfront Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No hidden charges. Pay via UPI, cards, or digital wallets</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">On-demand Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Book instantly or schedule pickups as per your convenience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book in 3 Simple Steps</h2>
            <p className="text-lg text-gray-600">Experience the easiest way to book logistics</p>
          </div>
          <BookingFlow />
        </div>
      </section>

      {/* Driver Profile */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Your Driver</h2>
              <p className="text-lg mb-8 opacity-90">
                Every TransPorter driver is verified, rated, and committed to safe, timely deliveries. 
                Connect with experienced professionals who understand your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Average rating: 4.8/5 stars</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-200" />
                  <span>10,000+ verified drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-green-300" />
                  <span>Average pickup time: 15 minutes</span>
                </div>
              </div>
            </div>
            <div>
              <DriverProfile />
            </div>
          </div>
        </div>
      </section>

      {/* Live Tracking */}
      <section id="tracking" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Tracking</h2>
            <p className="text-lg text-gray-600">Stay updated with real-time location and delivery status</p>
          </div>
          <LiveTracking />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Know exactly what you'll pay before you book</p>
          </div>
          <PricingCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses who trust TransPorter for their logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Truck className="h-5 w-5 mr-2" />
              Book Your First Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">TransPorter</span>
              </div>
              <p className="text-gray-400">
                Making logistics simple, reliable, and efficient for businesses across India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Truck Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tempo Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mini Truck</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TransPorter. All rights reserved. Logistics, on your terms.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
