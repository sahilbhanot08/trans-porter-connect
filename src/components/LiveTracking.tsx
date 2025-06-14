
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Clock, Package, Phone } from 'lucide-react';

const LiveTracking = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 28.6139, lng: 77.2090 });
  const [progress, setProgress] = useState(35);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 2;
        return newProgress > 100 ? 35 : newProgress;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const trackingSteps = [
    { status: 'completed', title: 'Order Confirmed', time: '2:30 PM', description: 'Booking confirmed, driver assigned' },
    { status: 'completed', title: 'Driver En Route', time: '2:45 PM', description: 'Driver is coming to pickup location' },
    { status: 'active', title: 'Pickup in Progress', time: '3:15 PM', description: 'Driver has arrived at pickup location' },
    { status: 'pending', title: 'In Transit', time: 'ETA 4:30 PM', description: 'Package is being delivered' },
    { status: 'pending', title: 'Delivered', time: 'ETA 5:00 PM', description: 'Package delivered successfully' }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Map/Tracking Visual */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Navigation className="h-5 w-5 mr-2 text-blue-600" />
            Live Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 h-80 overflow-hidden">
            {/* Simulated Map */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Route Line */}
            <div className="absolute top-16 left-8 w-3/4 h-0.5 bg-blue-600 rounded-full"></div>
            <div className="absolute top-16 left-8 h-0.5 bg-green-600 rounded-full transition-all duration-1000" style={{width: `${progress}%`}}></div>
            
            {/* Pickup Point */}
            <div className="absolute top-12 left-6 bg-green-500 p-2 rounded-full shadow-lg">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-20 left-0 bg-white px-2 py-1 rounded shadow text-xs">
              Pickup: Warehouse A
            </div>
            
            {/* Moving Truck */}
            <div className="absolute top-12 transition-all duration-1000 animate-pulse" style={{left: `${Math.min(progress, 85)}%`}}>
              <div className="bg-blue-600 p-2 rounded-full shadow-lg">
                <Package className="h-4 w-4 text-white" />
              </div>
            </div>
            
            {/* Delivery Point */}
            <div className="absolute top-12 right-6 bg-red-500 p-2 rounded-full shadow-lg">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-20 right-0 bg-white px-2 py-1 rounded shadow text-xs">
              Delivery: Store B
            </div>
            
            {/* Progress Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{width: `${progress}%`}}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-600">4.2 km</div>
              <div className="text-xs text-gray-600">Distance Remaining</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-600">18 mins</div>
              <div className="text-xs text-gray-600">ETA</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tracking Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-600" />
              Tracking Timeline
            </div>
            <Badge className="bg-green-100 text-green-800">
              In Progress
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                  step.status === 'completed' ? 'bg-green-500' :
                  step.status === 'active' ? 'bg-blue-500 animate-pulse' :
                  'bg-gray-300'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-medium ${
                      step.status === 'active' ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h4>
                    <time className="text-xs text-gray-500">{step.time}</time>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-blue-900">Driver: Rajesh Kumar</h4>
                <p className="text-sm text-blue-700">Truck: MH-01-AB-1234</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Driver
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveTracking;
