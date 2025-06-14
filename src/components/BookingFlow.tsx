
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Calendar, CreditCard, CheckCircle } from 'lucide-react';

const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickup: '',
    delivery: '',
    date: '',
    time: ''
  });

  const steps = [
    {
      id: 1,
      title: 'Pickup & Delivery',
      icon: MapPin,
      description: 'Enter your locations'
    },
    {
      id: 2,
      title: 'Schedule',
      icon: Calendar,
      description: 'Pick date & time'
    },
    {
      id: 3,
      title: 'Confirm & Pay',
      icon: CreditCard,
      description: 'Complete booking'
    }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                isCompleted ? 'bg-green-500 text-white' : 
                isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
              </div>
              <div className="text-center">
                <div className={`font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-400">{step.description}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`hidden sm:block absolute h-0.5 w-24 mt-6 ml-12 ${
                  isCompleted ? 'bg-green-500' : 'bg-gray-200'
                }`} style={{left: `${(index + 1) * 33.33}%`}} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 mr-2" })}
            Step {currentStep}: {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  placeholder="Enter pickup address"
                  value={bookingData.pickup}
                  onChange={(e) => setBookingData({...bookingData, pickup: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="delivery">Delivery Location</Label>
                <Input
                  id="delivery"
                  placeholder="Enter delivery address"
                  value={bookingData.delivery}
                  onChange={(e) => setBookingData({...bookingData, delivery: e.target.value})}
                />
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Estimated Distance</div>
                    <div className="text-sm text-gray-600">Based on your locations</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">12.5 km</div>
                    <div className="text-sm text-gray-500">~25 mins</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Pickup Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Pickup Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  />
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-medium text-green-800 mb-2">Quick Schedule Options</div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="bg-white">
                    📅 Today
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white">
                    🌅 Tomorrow
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white">
                    ⚡ ASAP
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white">
                    📋 Schedule Later
                  </Button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Route:</span>
                    <span>12.5 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span>Mini Truck</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base fare:</span>
                    <span>₹150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%):</span>
                    <span>₹27</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-medium">
                    <span>Total:</span>
                    <span>₹177</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="flex items-center justify-center">
                  💳 UPI
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  💳 Card
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  💰 Wallet
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          Back
        </Button>
        <Button 
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {currentStep === 3 ? 'Confirm Booking' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default BookingFlow;
