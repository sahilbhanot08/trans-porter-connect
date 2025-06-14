
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                🚚 India's #1 Logistics Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meet Your 
              <span className="text-yellow-300"> Logistics Hero!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Tired of calling multiple transporters? Say hello to TransPorter - 
              the <strong>Uber for trucks</strong>, connecting you instantly with trusted drivers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Real-time GPS tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <span>Verified drivers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <span>On-demand booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                  <Star className="h-5 w-5" />
                </div>
                <span>Upfront pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 hover-scale"
              >
                📦 Book a Truck Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                🧑‍✈️ Join as Driver
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Card className="p-6 bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Quick Stats</h3>
                <p className="opacity-80">Trusted by businesses nationwide</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50K+</div>
                  <div className="text-sm opacity-80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">10K+</div>
                  <div className="text-sm opacity-80">Verified Drivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">1M+</div>
                  <div className="text-sm opacity-80">Trips Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">4.8⭐</div>
                  <div className="text-sm opacity-80">Average Rating</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
