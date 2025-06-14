
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, MapPin, Truck } from 'lucide-react';

const PricingCard = () => {
  const [distance, setDistance] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [estimate, setEstimate] = useState(null);

  const calculatePrice = () => {
    if (!distance || !vehicleType) return;
    
    const rates = {
      'mini-truck': 10,
      'tempo': 15,
      'truck': 22
    };
    
    const baseRate = rates[vehicleType] || 10;
    const distanceNum = parseFloat(distance);
    const baseFare = distanceNum * baseRate;
    const gst = baseFare * 0.18;
    const total = baseFare + gst;
    
    setEstimate({
      baseFare: Math.round(baseFare),
      gst: Math.round(gst),
      total: Math.round(total),
      perKm: baseRate
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center text-2xl">
            <Calculator className="h-6 w-6 mr-2 text-blue-600" />
            Price Calculator
          </CardTitle>
          <p className="text-gray-600">Get instant quotes for your shipment</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="distance">Distance (km)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Enter distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mini-truck">Mini Truck (1-2 Tons)</SelectItem>
                  <SelectItem value="tempo">Tempo (2-4 Tons)</SelectItem>
                  <SelectItem value="truck">Large Truck (5-10 Tons)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={calculatePrice}
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
            disabled={!distance || !vehicleType}
          >
            Calculate Price
          </Button>

          {estimate && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-blue-200">
              <h3 className="text-lg font-semibold mb-4 text-center text-blue-900">
                Price Estimate
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Base Fare ({distance} km × ₹{estimate.perKm}/km)</span>
                  <span className="font-medium">₹{estimate.baseFare}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">GST (18%)</span>
                  <span className="font-medium">₹{estimate.gst}</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount</span>
                  <span className="text-2xl font-bold text-green-600">₹{estimate.total}</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    No hidden charges
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Real-time GPS tracking included
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Insurance coverage available
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sample Pricing Table */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Sample Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium">Mini Truck</h4>
                  <p className="text-2xl font-bold text-green-600">₹10/km</p>
                  <p className="text-sm text-gray-600">Perfect for small loads</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium">Tempo</h4>
                  <p className="text-2xl font-bold text-blue-600">₹15/km</p>
                  <p className="text-sm text-gray-600">Ideal for medium cargo</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Truck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-medium">Large Truck</h4>
                  <p className="text-2xl font-bold text-purple-600">₹22/km</p>
                  <p className="text-sm text-gray-600">Best for bulk shipments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCard;
