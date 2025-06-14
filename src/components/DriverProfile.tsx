
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock, Phone, MessageCircle } from 'lucide-react';

const DriverProfile = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
              alt="Driver"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">Rajesh Kumar</h3>
            <p className="text-gray-600">Professional Driver</p>
            <div className="flex items-center mt-1">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">4.9 (847 trips)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">5.2</div>
            <div className="text-xs text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-xs text-gray-600">On-time Delivery</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm">Verified Driver License</span>
            <Badge variant="secondary" className="ml-auto">✓</Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm">Available 24/7</span>
            <Badge className="ml-auto bg-green-100 text-green-800">Online</Badge>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-gray-600 mb-3">
            "Professional service with safe and timely deliveries. Experienced in handling fragile and valuable cargo."
          </p>
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverProfile;
